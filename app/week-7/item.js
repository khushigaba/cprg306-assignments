import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="list-none bg-yellow-300 border border-yellow-400 rounded-lg p-4 m-2 w-72 cursor-pointer"
      onClick={() => onSelect({ name, quantity, category })}
    >
      <div className="font-bold text-lg text-black">{name}</div>
      <div className="text-black">Quantity: {quantity}</div>
      <div className="text-black">Category: {category}</div>
    </li>
  );
};

export default Item;
