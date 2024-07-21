"use client";
// Import the useUserAuth hook
import { useUserAuth } from "../_utils/auth-context.js";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-services";
import { useEffect, useState } from "react";



 
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    if (user) {
      const items = await getItems(user.uid);
      setItems(items);
    }
  };
  

  const handleAddItem = async (newItem) => {
    if (user) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
    }
  };
  
  const handleDeleteItem = async (itemId) => {
    if (user) {
      await deleteItem(user.uid, itemId);
      setItems(items.filter(item => item.id !== itemId));
    }
  };
  


  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          <button onClick={() => handleGetItem(item.id)}>Get Item</button>
          <button onClick={() => handleAddItem(item.id)}>Add Item</button>
        </div>
      ))}
    </div>
  );
};
// Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// // Sign in to Firebase with GitHub authentication
// await gitHubSignIn();
 
// // Sign out of Firebase
// await firebaseSignOut();
 
// // Display some of the user's information
// <p>
//   Welcome, {user.displayName} ({user.email})
// </p>;

