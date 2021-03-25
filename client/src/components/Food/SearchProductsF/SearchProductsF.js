import React from 'react';
import './SearchProductsF.css';
import {FoodTable} from '../Template'
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";


function SearchProductsF({setSelectedDish}) {
    const selectHandler = (dish) => {
        setSelectedDish(dish);
      };
    return (
        <div>
           <div className="search-button-container">
           <button>See All</button>
           <button>See on Calendar</button>
           <button>See on Map</button>
           </div>

            <div className="search-all">
            {FoodTable.map(dish => (
              
                <Link key={dish.id} to={"/food/products/" + dish.id}>
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

export default SearchProductsF
