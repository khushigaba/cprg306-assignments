<<<<<<< HEAD
"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
  
    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];
  
    // Sort the items
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
        class="bg-orange-500 p-1 m-2 w-28"
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        class="bg-orange-700 p-1 m-2 w-28"
        onClick={() => setSortBy("category")}
      >
        Category
      </button>

      {/* Render sorted items */}
      {sortedItems.map((item) => (
        <div key={item.id}>
          <ul>
            <li class="list-none bg-yellow-300 border border-yellow-400 rounded-lg p-4 m-2 w-72">
              <h2 class="text-xl font-bold">{item.name}</h2>

              <div class="text-sm">
                Buy {item.quantity} in {item.category}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
=======
"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
  
    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];
  
    // Sort the items
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
        class="bg-orange-500 p-1 m-2 w-28"
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        class="bg-orange-700 p-1 m-2 w-28"
        onClick={() => setSortBy("category")}
      >
        Category
      </button>

      {/* Render sorted items */}
      {sortedItems.map((item) => (
        <div key={item.id}>
          <ul>
            <li class="list-none bg-yellow-300 border border-yellow-400 rounded-lg p-4 m-2 w-72">
              <h2 class="text-xl font-bold">{item.name}</h2>

              <div class="text-sm">
                Buy {item.quantity} in {item.category}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
>>>>>>> ff73849b2226db465251d1d84c269b2cd750e8c0
}