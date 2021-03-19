import React,{useEffect} from "react";
import "./ProductsF.css";
import { FaLeaf } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import StarIcon from "@material-ui/icons/Star";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";

import { Link } from "react-router-dom";

function ProductsF({ selectedDish, setSelectedDish,shoppingCart, setShoppingCart }) {

   const addCart = () => {

    setShoppingCart([...shoppingCart, {
        dish: selectedDish.dishName,
        cooker: selectedDish.cooker,
        price: selectedDish.price,
        pickUpDate: selectedDish.pickUpDate,
        address: selectedDish.address
    }])
   }

  

  return (
    <div>
        <div className="products-wrapper">

      <Link to="/food">
        <button onClick={() => setSelectedDish([])}>
          <IoMdArrowBack className="back-button" />
        </button>
      </Link>

      {typeof selectedDish.dishName != "undefined" ? (
          <div>
          <div className="products-info">
            <img src={selectedDish.imageUrl} alt="" />
            {selectedDish.ingredients.map((ingredient) => (
              <span key={ingredient} className="ingredient-lable">
                {ingredient}
              </span>
            ))}
            {selectedDish.vegetarian ? <FaLeaf /> : ""}
            <h3>{selectedDish.dishName}</h3>
            <p>{selectedDish.dishDescription}</p>
            <p>
              {selectedDish.price} <EuroSymbolIcon />
            </p>
          </div>

          <div className="cooker-info">
            <img src={selectedDish.cookerImage} alt="" />
            {selectedDish.cooker}
            {selectedDish.cookerScore.map((score, index) => (
              <StarIcon key={index} className="star" />
            ))}
          </div>

          <button onClick={addCart}>Add to cart</button>
          </div>

      ) : (
        <h1>Go back to check out the delicious HOME DISHES</h1>
      )}

    </div>
    </div>

  );
}

export default ProductsF;
