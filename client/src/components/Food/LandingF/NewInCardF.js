import React from "react";
import { FoodTable } from "../Template";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";

let newInArray = FoodTable.slice(Math.max(FoodTable.length - 4, 1));

function NewInCardF({ setSelectedDish }) {
  const selectHandler = (selectedDishId) => {
    setSelectedDish(FoodTable.filter((item) => item.id === selectedDishId));
  };

  return (
    <div className="food-new">
      <h3 className="food-title-new">New In!</h3>
      <div className="breakline"></div>
      <div className="random-container">
        {newInArray.map((dish) => (
          <div className="food-card" >
          <Link key={dish.id} to={"/food/products/" + dish.id} onClick={() => selectHandler(dish.id)}>
            
              <div className="food-card-img">
                <img className="product-image" src={dish.imageUrl} alt="" />
              </div>
              <div className="food-info">
                <div className="more-button-wrapper">
                  <h4 className="dish-name">{dish.dishName}</h4>
                  <button className="more-button">
                    <AddCircleSharpIcon className="more-icon" />
                  </button>
                </div>
                <p className="cook-info">
                  {dish.cooker}<br></br>
                  {dish.cookerScore.map((star, index) => (
                    <StarIcon key={index} className="star" />
                  ))}
                </p>
              </div>
            
          </Link>
          </div>
        ))}
        
      </div>
      
      <div className="food-list-container">

      <Link to="/food/product_list" className="home-food-link food-list-link">
          see more
        </Link>
        </div>
    </div>
  );
}

export default NewInCardF;
