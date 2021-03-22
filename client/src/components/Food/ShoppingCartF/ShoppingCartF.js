import React from "react";
import "./ShoppingCartF.css";
import { IoMdArrowBack } from "react-icons/io";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";

function ShoppingCartF({ shoppingCart, setShoppingCart }) {
  const deleteFromCart = (id) => {
    let newShoppingCart = shoppingCart.filter((food) => food.id !== id);
    setShoppingCart(newShoppingCart);
  };

  const subTotal = shoppingCart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="shopping-cart-wrapper">
      <a href="/food" className="back-button">
        <IoMdArrowBack className="back-button-icon" />
      </a>
      <h1 className="shopping-cart-title">My Order</h1>

      {shoppingCart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div>
          {shoppingCart.map((food) => (
            <div key={food.id} className="shopping-cart-item">
              <img className="cart-img" src={food.imageUrl} alt="" />
              <div className="cart-food-info">
                <h4>{food.dish}</h4>
                <p>pick up date: {food.pickupDate}</p>
                <p>pick up address: {food.address}</p>
              </div>
              <div className="cart-price">
                <h5>
                  <EuroSymbolIcon /> {food.price}
                </h5>
              </div>
              <button onClick={() => deleteFromCart(food.id)}>Delete</button>
            </div>
          ))}

          <div className="cart-breakline"></div>
          <div className="shopping-cart-item">
              <div></div>
              <h3>Subtotal</h3>

            <h3><EuroSymbolIcon /> {subTotal}</h3>
            <button className="cart-button-checkout">Check Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartF;
