import React from "react";
// import cookingPic from "../Assets/cooking.png";
import "./LandingF.css";
import SearchIcon from "@material-ui/icons/Search";

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
      <div className="random-container">
        <div className="product">
          <h4>Name of food</h4>
          <p>Cook's Name</p>
          <div className="cook-score">4</div>
          <img className="product-image" src="https://images.unsplash.com/photo-1584739200850-dc2072fdfe04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <button>More info</button>
        </div>
        <div className="product">
          <h4>Name of food</h4>
          <p>Cook's Name</p>
          <div className="cook-score">4</div>
          <img className="product-image" src="https://images.unsplash.com/photo-1584739200850-dc2072fdfe04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <button>More info</button>
        </div>
        <div className="product">
          <h4>Name of food</h4>
          <p>Cook's Name</p>
          <div className="cook-score">4</div>
          <img className="product-image" src="https://images.unsplash.com/photo-1584739200850-dc2072fdfe04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
          <button>More info</button>
        </div>

      </div>
    </div>
  );
}

export default LandingF;
