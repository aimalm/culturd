import React from "react";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";

function NewInCardF({ setSelectedDish, dishData }) {
  let newInArray = dishData.slice(Math.max(dishData.length - 4, 1));

  const selectHandler = (selectedDishId) => {
    setSelectedDish(dishData.filter((item) => item._id === selectedDishId));
  };

  return (
    <div className="food-new">
      <h3 className="food-title-new">New In</h3>
      <div className="breakline"></div>
      <div className="random-container">
        {newInArray.map((dish) => (
          <div className="food-card" key={dish._id}>
            <Link
              to={"/food/products/" + dish._id}
              onClick={() => selectHandler(dish._id)}
            >
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
                  {dish.cooker}
                  <br></br>
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
        <Link to="/food/product_list" className="button food-list-link">
          see more
        </Link>
      </div>
    </div>
  );
}

export default NewInCardF;
