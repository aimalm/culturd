import React from "react";
import "./ProductDetailsF.css";
import { FaLeaf } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import StarIcon from "@material-ui/icons/Star";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { CgArrowLongUp } from "react-icons/cg";

import { Link } from "react-router-dom";


function ProductDetailsF({
  selectedDish,
  setSelectedDish,
  shoppingCart,
  setShoppingCart,
  viewingCart,
  setViewingCart,
}) {

  

  const addCart = (dishID) => {
 
    let dishIDArray = shoppingCart.map((food) => food.id);
    

    if (dishIDArray.includes(dishID) === true) {

      let newArray = [...shoppingCart];

      newArray.map((item) => {
        if (item.id === dishID) {
          item.quantity++;
        }
      });
      setShoppingCart(newArray)

    } else {

      setShoppingCart([...shoppingCart, ...selectedDish]);
      
    }

    setViewingCart(true);
    setTimeout(() => {
      setViewingCart(false);
    }, 3000);
  };


  return (
    <div>
      
      {/* shopping cart alert here */}
      {viewingCart ? (
        <div className="add-cart-alert">
          <p>
            {" "}
            <CgArrowLongUp />
            The dish is now in your cart! <CgArrowLongUp />
          </p>
        </div>
      ) : (
        ""
      )}

      <div className="products-wrapper">
        {/* go back button here */}
        <Link to="/food/search">
          <button className="back-button">
            <IoMdArrowBack className="back-button-icon" />
          </button>
        </Link>

        {/* product display here */}
        {selectedDish.length > 0 ? (
          <div>
            {selectedDish.map((dish) => (
              <div className="products-container">
                <div className="products-info">
                  <img
                    className="products-img-food"
                    src={dish.imageUrl}
                    alt=""
                  />
                  <div className="products-ingredients-container">
                    {dish.ingredients.map((ingredient) => (
                      <p key={ingredient} className="ingredient-lable">
                        {ingredient}
                      </p>
                    ))}
                    {dish.vegetarian? (
                      <FaLeaf className="ingredient-vegetarian" />
                    ) : "" }
                  </div>
                  <h2 className="products-dishname">{dish.dishName}</h2>
                  <h3 className="products-price">
                    <EuroSymbolIcon /> <strong>{dish.price}</strong>
                  </h3>
                  <p className="products-description">{dish.dishDescription}</p>
                  <p>
                    <strong>Pick Up Date:</strong> {dish.pickupDate}
                  </p>
                  <p>
                    <strong>Pick Up Address:</strong> {dish.address}
                  </p>
                </div>
                <div className="cooker-info">
                  <img
                    className="products-img-cook"
                    src={dish.cookerImage}
                    alt=""
                  />
                  <p>{dish.cooker}</p>
                  <div className="products-cooker-score">
                    {dish.cookerScore.map((score, index) => (
                      <StarIcon key={index} className="star" />
                    ))}
                  </div>
                </div>
                <button
                  className="products-add-button"
                  onClick={() => addCart(dish.id)}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h3>Go back to check out the delicious HOME DISHES</h3>
        )}
      </div>
    
    </div>
  );
}

export default ProductDetailsF;
