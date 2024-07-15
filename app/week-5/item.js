<<<<<<< HEAD


import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="list-none bg-yellow-300 border border-yellow-400 rounded-lg p-4 m-2 w-72">
      <div className="font-bold text-lg text-black">{name}</div>
      <div className="text-black">Quantity: {quantity}</div>
      <div className="text-black">Category: {category}</div>
    </li>
  );
};

export default Item;

=======


import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="list-none bg-yellow-300 border border-yellow-400 rounded-lg p-4 m-2 w-72">
      <div className="font-bold text-lg text-black">{name}</div>
      <div className="text-black">Quantity: {quantity}</div>
      <div className="text-black">Category: {category}</div>
    </li>
  );
};

export default Item;

>>>>>>> ff73849b2226db465251d1d84c269b2cd750e8c0
  