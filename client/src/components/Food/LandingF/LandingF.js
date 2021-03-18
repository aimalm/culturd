import React from "react";
// import cookingPic from "../Assets/cooking.png";
import "./LandingF.css";
import SearchIcon from "@material-ui/icons/Search";
import{FoodTable} from "../Template"
import StarIcon from '@material-ui/icons/Star';

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
        
          {FoodTable.map((dish)=>(
            
            <div className="product"><h4>{dish.dishName}</h4>
            <p>{dish.cooker}</p>

            <div className="cook-score">
              {(dish.cookerScore).map((star)=>(
                <StarIcon/>))}
            
            </div>
            <img className="product-image" src={dish.imageUrl} alt=""/>
            <button>More info</button>
          </div>
            ))}
          
    

      </div>
    </div>
  );
}

export default LandingF;
