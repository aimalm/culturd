import React from "react";
import "./ShoppingCartF.css";
import { IoMdArrowBack } from "react-icons/io";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";


function ShoppingCartF({ shoppingCart, setShoppingCart }) {

  const deleteFromCart = (id) => {
    let newShoppingCart = shoppingCart.filter((food) => food.id !== id);
    setShoppingCart(newShoppingCart);
  };

  const subTotal = (shoppingCart.reduce((a,b)=>(a+b.price), 0))

  return (
    <div className="shopping-cart-wrapper">
      <a href="/food">
        <IoMdArrowBack className="" />
      </a>
      <h1>Shopping Cart</h1>

      {shoppingCart.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <div>
          {shoppingCart.map((food) => (
            <div key={food.id} className="shopping-cart-item">
              <img className="cart-img" src={food.imageUrl} alt="" />
              <div className="cart-food-info">
                {food.dish}
                {food.pickupDate}
                {food.address}
              </div>
              <div className="cart-price">
                <h3><EuroSymbolIcon/>{food.price}</h3>
              </div>
              <button onClick={() => deleteFromCart(food.id)}>Delete</button>
            </div>
          ))}
      

          <div className="cart-breakline"></div>
          <h3>Subtotal: <EuroSymbolIcon/> {subTotal}</h3>

          <button>Check Out</button>

        </div>
      )}

      {/* TODO: calculate the total price */}
    </div>
  );
}

export default ShoppingCartF;
