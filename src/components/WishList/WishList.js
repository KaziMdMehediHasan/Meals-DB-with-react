import React from "react";
import "./WishList.css";
const WishList = (props) => {
  console.log(props.meals);
  const wishList = props.meals.map((meal) => <li>{meal.strMeal}</li>);
  return (
    <div>
      <h3>Your Added Meal : {wishList}</h3>
    </div>
  );
};

export default WishList;
