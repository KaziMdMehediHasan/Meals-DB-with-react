import React from "react";
import "./SingleMeal.css";
const SingleMeal = (props) => {
  console.log(props.meal);
  const { strMealThumb, strMeal, strCategory, strArea, strYoutube } =
    props.meal;
  return (
    <div className="single-meal">
      <div>
        <img src={strMealThumb} alt="meal snap" />
      </div>
      <div>
        <h3>{strMeal}</h3>
        <p>
          <strong>{strCategory}</strong>
        </p>
        <p>
          <i>{strArea}</i>
        </p>
        <div className="btn">
          <button onClick={props.handleAddMeals}>Add to Favorites</button>
          <button>
            <a href={strYoutube}>Learn To Cook</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMeal;
