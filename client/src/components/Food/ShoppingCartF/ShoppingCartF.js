import React from "react";
import "./ShoppingCartF.css";
import { IoMdArrowBack } from "react-icons/io";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function ShoppingCartF({ shoppingCart, setShoppingCart }) {
  const subTotal = shoppingCart.reduce((a, b) => (a + b.price) * b.quantity, 0);

  const deleteFromCart = (id) => {
    let newShoppingCart = shoppingCart.filter((food) => food.id !== id);
    setShoppingCart(newShoppingCart);
  };

  const changeQuanityHandler = (e, id) => {
    switch (e.currentTarget.value) {
      case "plus":
        const plusArray = [...shoppingCart];
        shoppingCart.forEach((item) => {
          if (item.id === id) {
            item.quantity++;
          }
        });
        setShoppingCart(plusArray);
        break;

      case "minus":
        let minusArray = [...shoppingCart];

        shoppingCart.forEach((item) => {
          if (item.id === id && item.quantity > 1) {
            item.quantity--;
            setShoppingCart(minusArray);
          } else if( item.id === id && item.quantity === 1){
            deleteFromCart(id);
          }
        });
        break;

      default:
        setShoppingCart(shoppingCart);
        break;
    }
  };

  return (
    <div className="shopping-cart-wrapper">
      <a href="/food/product_list" className="back-button">
        <IoMdArrowBack className="back-button-icon" />
      </a>
      <h3 className="shopping-cart-title">My Order</h3>

      {shoppingCart.length === 0 ? (
        <h3 className="shopping-cart-title">
          Shopping cart is empty, <br></br>search for the your next HOME COOK
          FOOD!
        </h3>
      ) : (
        <div>
          {shoppingCart.map((food) => (
            <div key={food.id} className="shopping-cart-item">
              <img className="cart-img" src={food.imageUrl} alt="" />
              <div className="cart-food-info">
                <h4>{food.dishName}</h4>
                <p>pick up date: {food.pickupDate}</p>
                <p>pick up address: {food.address}</p>
              </div>
              <div className="cart-price">
                <h5>
                  <EuroSymbolIcon /> {food.price}
                </h5>
              </div>

              <div className="cart-quantity">
                <button
                  className="cart-plus-button"
                  onClick={(e) => changeQuanityHandler(e, food.id)}
                  value="plus"
                >
                  <BsPlus />
                </button>
                <input
                  type="text"
                  name="name"
                  value={food.quantity}
                  className="cart-quantity-input"
                  disabled
                />
                <button
                  className="cart-minus-button"
                  onClick={(e) => changeQuanityHandler(e, food.id)}
                  value="minus"
                >
                  <BiMinus />
                </button>
              </div>
              <button
                className="cart-delete-button"
                onClick={() => deleteFromCart(food.id)}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="cart-breakline"></div>
          <div className="cart-subtotal-container">
            

            <h5 className="cart-subtotal-title">Subtotal</h5>

            <h5 className="cart-subtotal-price">
              <EuroSymbolIcon /> {subTotal}
            </h5>

            <button className="home-food-link cart-checkout-button">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartF;
