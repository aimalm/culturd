import React from "react";
// import cookingPic from "../Assets/cooking.png";
import "./LandingF.css";
import SearchIcon from "@material-ui/icons/Search";
import { FoodTable } from "../Template";
import StarIcon from "@material-ui/icons/Star";
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';

function LandingF() {
  return (
    <div className="food-home">
      <div className="home-container">
        <div className="food-image-div">
          <img className="food-image" src="" alt="" />
        </div>
        <div className="search-bar">
          <input className="search-input" type="text" />
          <SearchIcon className="search-button" />
        </div>
      </div>

      <div className="food-new">
        <h3 className="food-title-new">New In</h3>

        <div className="random-container">
          {FoodTable.map((dish) => (
            <div>
              <img className="product-image" src={dish.imageUrl} alt="" />
              <div className="food-info">
                <div className="more-button-wrapper">
                  <h4 className="dish-name">{dish.dishName}</h4>
                  <button className="more-button"><AddCircleSharpIcon className="more-icon"/></button>
                </div>
               

                <p className="cook-score">
                {dish.cooker} 
                  {dish.cookerScore.map((star) => (
                    <StarIcon className="star" />
                  ))}
                </p>
              

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingF;
