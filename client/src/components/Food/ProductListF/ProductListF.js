import React, { useState } from "react";
import "./ProductListF.css";
import { FoodTable } from "../Template";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";

function ProductListF({ setSelectedDish }) {
  const [filteredDish, setFilteredDish] = useState(FoodTable);

  const selectHandler = (dishID) => {
    setSelectedDish(FoodTable.filter((item) => item.id === dishID));
  };

  const filterHandler = (e) => {
  
    switch (e.target.value) {
      case "main":
        setFilteredDish(FoodTable.filter((food) => food.category === "main"));
        
        break;

      case "side":
        setFilteredDish(FoodTable.filter((food) => food.category === "side"));
        break;

      case "dessert":
        setFilteredDish(FoodTable.filter((food) => food.category === "dessert"));
        break;

      case "veg":
        setFilteredDish(FoodTable.filter((food) => food.vegetarian));
        break;

      default:
        setFilteredDish(FoodTable);
        break;
    }
  };

  return (
    <div>
      <div className="search-button-container">
        
        <button className="search-filter-button" value="all" onClick={(e) => filterHandler(e)}>
          See All
        </button>
     
     
        <button className="search-filter-button" value="main" onClick={(e) => filterHandler(e)}>
          main dish
        </button>

        <button className="search-filter-button" value="side" onClick={(e) => filterHandler(e)}>
          side dish
        </button>
        <button className="search-filter-button" value="dessert" onClick={(e) => filterHandler(e)}>
          desserts
        </button>
        <button className="search-filter-button" value="veg" onClick={(e) => filterHandler(e)}>
          Vegetarian
        </button>
      </div>

      <div className="search-list">
        {filteredDish.map((dish) => (
          <Link key={dish.id} to={"/food/products/" + dish.id}>
            <div className="food-card" onClick={() => selectHandler(dish.id)}>
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
  );
}

export default ProductListF;
