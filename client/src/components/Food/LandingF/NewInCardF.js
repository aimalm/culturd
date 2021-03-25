import React from 'react'
import { FoodTable } from "../Template";
import { Link } from "react-router-dom";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import StarIcon from "@material-ui/icons/Star";



let newInArray = FoodTable.slice(Math.max(FoodTable.length - 4, 1))


function NewInCardF({setSelectedDish}) {
    const selectHandler = (dish) => {
        setSelectedDish(dish);
      };
    
  

// const groups = FoodTable.map((e, i) => { 
//      return i % 4 === 0 ? FoodTable.slice(i, i + 4) : null; 
// }).filter(e => { return e; });
// console.log(groups)


// const index = groups.length -1

// console.log(groups[index])

    return (
        <div className="food-new">
            <h3 className="food-title-new">New In!</h3>
        <div className="breakline"></div>
        <div className="random-container">
          {newInArray.map((dish) => (
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
          <Link to="/food/search">
          see more
          </Link>
         
        </div>


       
        </div>
    )
}

export default NewInCardF
