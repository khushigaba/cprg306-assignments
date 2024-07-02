"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      {/* Create sort buttons */}
      <button
        className="bg-orange-500 p-1 m-2 w-28"
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        className="bg-orange-700 p-1 m-2 w-28"
        onClick={() => setSortBy("category")}
      >
        Category
      </button>

      {/* Render sorted items */}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={onItemSelect}
        />
      ))}
    </div>
  );
}
