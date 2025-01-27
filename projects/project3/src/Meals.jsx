import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setMeals(res.data.meals);
      });
  }, []);

  const items = meals.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="" />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });
  return (
    <div>
      <h1>Meals</h1>
      {items}
    </div>
  );
};

export default Meals;
