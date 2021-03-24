import React from 'react'
import { FoodTable } from "../Template";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";



function NewInCardF({setSelectedDish}) {
    const selectHandler = (dish) => {
        setSelectedDish(dish);
      };

    return (
        <div className="food-new">
            <h3 className="food-title-new">New In!</h3>
        <div className="breakline"></div>
        <div className="random-container">
          {FoodTable.map((dish) => (
            <Link key={dish.dishID} to={"/food/products/" + dish.dishID}>
              <div className="food-card" onClick={() => selectHandler(dish)}>
                <img className="product-image" src={dish.imageUrl} alt="" />
                <div className="food-info">
                  <div className="more-button-wrapper">
                    <h4 className="dish-name">{dish.dishName}</h4>
                    <button className="more-button">
                      <AddCircleSharpIcon className="more-icon" />
                    </button>
                  </div>
                  <p className="cook-score">
                    {dish.cooker}
                    {dish.cookerScore.map((star, index) => (
                      <StarIcon key={index} className="star" />
                    ))}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
    )
}

export default NewInCardF
