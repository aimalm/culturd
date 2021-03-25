import React from "react";
import "./ProductsF.css";
import { FaLeaf } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import StarIcon from "@material-ui/icons/Star";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { CgArrowLongUp } from "react-icons/cg";

import { Link } from "react-router-dom";

function ProductsF({
  selectedDish,
  setSelectedDish,
  shoppingCart,
  setShoppingCart,
  viewingCart,
  setViewingCart,
}) {
  const addCart = (id) => {

    console.log(id)
    //console.log(shoppingCart)
    let dishIDArray = shoppingCart.map((food) => food.id);
    let newArray = [...shoppingCart];

    
    if (dishIDArray.includes(id) === true) {
      console.log('include')
      newArray.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });

       setShoppingCart(newArray);
    } else {
      console.log('not incl')

      setShoppingCart([
        ...shoppingCart,
        {
          id: id,
          dish: selectedDish.dishName,
          cooker: selectedDish.cooker,
          price: selectedDish.price,
          pickupDate: selectedDish.pickupDate,
          address: selectedDish.address,
          imageUrl: selectedDish.imageUrl,
          quantity: 1,
        },
      ]);
    }

    setViewingCart(true);
    setTimeout(() => {
      setViewingCart(false);
    }, 3000);
  };
  

  return (
    <div>
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
        <Link to="/food">
          <button className="back-button">
            <IoMdArrowBack className="back-button-icon" />
          </button>
        </Link>

        {typeof selectedDish.dishName != "undefined" ? (
          <div className="products-container">
            <div className="products-info">
              <img
                className="products-img-food"
                src={selectedDish.imageUrl}
                alt=""
              />
              <div className="products-ingredients-container">
                {selectedDish.ingredients.map((ingredient) => (
                  <p key={ingredient} className="ingredient-lable">
                    {ingredient}
                  </p>
                ))}

                {selectedDish.vegetarian ? (
                  <FaLeaf className="ingredient-vegetarian" />
                ) : (
                  ""
                )}
              </div>
              <h2 className="products-dishname">{selectedDish.dishName}</h2>
              <h3 className="products-price">
                <EuroSymbolIcon /> <strong>{selectedDish.price}</strong>
              </h3>
              <p className="products-description">
                {selectedDish.dishDescription}
              </p>
              <p>
                <strong>Pick Up Date:</strong> {selectedDish.pickupDate}
              </p>
              <p>
                <strong>Pick Up Address:</strong> {selectedDish.address}
              </p>
            </div>

            <div className="cooker-info">
              <img
                className="products-img-cook"
                src={selectedDish.cookerImage}
                alt=""
              />
              <p>{selectedDish.cooker}</p>
              <div className="products-cooker-score">
                {selectedDish.cookerScore.map((score, index) => (
                  <StarIcon key={index} className="star" />
                ))}
              </div>
            </div>
            <button
              className="products-add-button"
              onClick={() => addCart(selectedDish.id)}
            >
              Add to cart
            </button>
          </div>
        ) : (
          <h3>Go back to check out the delicious HOME DISHES</h3>
        )}
      </div>
    </div>
  );
}

export default ProductsF;
