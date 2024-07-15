<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items = {items} />
    </div>
  );
}

=======

"use client";
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {

  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };
  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items = {items} />
    </div>
  );
}
>>>>>>> ff73849b2226db465251d1d84c269b2cd750e8c0
