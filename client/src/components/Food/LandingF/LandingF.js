import React from "react";
import "./LandingF.css";

import SearchIcon from "@material-ui/icons/Search";
import { FoodTable } from "../Template";
import StarIcon from "@material-ui/icons/Star";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import chefHat from "../images/chef_hat.png";
import pot from "../images/kitchen-pack.png";

import { Link } from "react-router-dom";

function LandingF({ setSelectedDish, shoppingCart, viewingCart }) {
  const selectHandler = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <div className="food-home">

      {/* search box start here */}
      <div className="home-search-container">
        <h2 className="home-search-title">
          Getting your <br></br>
          <strong>home food takeaway</strong>
        </h2>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Home dishes..."
          />
          <button className="search-button">
            <SearchIcon className="search-button-icon" />
          </button>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5d98e"
          d="M0,224L720,288L1440,192L1440,320L720,320L0,320Z"
        ></path>
      </svg>

      {/* new food post start here */}
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

      {/* How it works start here */}
        <h3 className="how-it-works-title">How it works?</h3>
        <div className="how-it-works">
          <div className="step-one">
            <div>
              <h3> 1</h3>
              <p>
                Browse for the food you like,<br></br>
                you can search by name, available date or pick up location
              </p>
            </div>
          </div>

          <img className="step-img-pot" src={pot} alt="" />

          <img className="step-img-hat" src={chefHat} alt="" />

          <div className="step-two">
            <div>
              <h3> 2</h3>
              <p>
                Add to shopping carte<br></br>
                and login to your personal account
              </p>
            </div>
          </div>
          <div className="step-three">
            <div>
              <h3> 3</h3>
              <p>
                Check out and pay the deposit<br></br>
                Ready to pick up your next Home Dish on the day!
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default LandingF;
