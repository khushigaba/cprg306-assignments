
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 bg-gray-100 rounded-lg shadow-md mb-2">
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-gray-700">Quantity: {quantity}</div>
      <div className="text-gray-500">Category: {category}</div>
    </li>
  );
};

export default Item;
