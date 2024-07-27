"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './item.json';
import { addItem, getItems, deleteItem } from '../_services/shopping-list-services';
import { useUserAuth } from '../_utils/auth-context';

export async function handleGetItem(userId, itemId, setItems) {
  try {
      const item = await getItem(userId, itemId);
      setItems(item);
      console.log(item);
  } catch (error) {
      console.error("Error getting item:", error);
  }
}

export async function handleDeleteItem(userId, itemId) {
  try {
      await deleteItem(userId, itemId);
      console.log(`Deleted item with ID: ${itemId}`);
      // Update the UI or state to reflect the deleted item
  } catch (error) {
      console.error("Error deleting item:", error);
  }
}

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  //good
  async function handleAddItem(NewItem)
  {
    const item = {
      name: NewItem.name,
      category: NewItem.category,
      quantity: NewItem.quantity
    }
    try{
      const itemId = await addItem(user.uid, item);
      console.log(itemId)
    }
    catch(error){
      console.error("Cannot add to the database")
    }
    setItems([...items, item]);
  };

  

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanName);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}