<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from the API
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  // Use useEffect to fetch meal ideas when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))
        ) : (
          <li>No meal ideas available</li>
        )}
      </ul>
    </div>
  );
};

export default MealIdeas;

=======
"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from the API
  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  // Function to load meal ideas
  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  // Use useEffect to fetch meal ideas when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))
        ) : (
          <li>No meal ideas available</li>
        )}
      </ul>
    </div>
  );
};

export default MealIdeas;

>>>>>>> ff73849b2226db465251d1d84c269b2cd750e8c0
