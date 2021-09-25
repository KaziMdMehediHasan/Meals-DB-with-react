import React, { useEffect, useState } from "react";
import SingleMeal from "../SingleMeal/SingleMeal";
import WishList from "../WishList/WishList";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [favMeal, setFavMeal] = useState([]);
  const [searchFood, setSearchFood] = useState("");
  //for adding meals to favorites list
  const handleAddMeals = (meal) => {
    const newMeals = [...favMeal, meal];
    setFavMeal(newMeals);
  };

  const searchItems = (event) => {
    let keyWord = "";
    keyWord = event.target.value;

    setSearchFood(keyWord);
  };

  //loading data from api
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchFood]);

  return (
    <div>
      <div className="header-parent">
        <div>
          <h2>MEALS</h2>
        </div>
        <div className="navigation">
          <div className="search">
            <input
              onChange={searchItems}
              type="text"
              placeholder="search your meal"
            />
          </div>
          <nav className="items">
            <ul className="item">
              <li>Meals</li>
              <li>Today's Special</li>
              <li>Offers</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="body-container">
        <div className="meals-container">
          {meals?.map((meal) => (
            <SingleMeal
              key={meal.idMeal}
              meal={meal}
              handleAddMeals={() => handleAddMeals(meal)}
            ></SingleMeal>
          ))}
        </div>
        <div>
          <WishList meals={favMeal}></WishList>
        </div>
      </div>
    </div>
  );
};

export default Meals;
