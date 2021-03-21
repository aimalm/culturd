import React from "react";
import './ShoppingCartF.css'
import { IoMdArrowBack } from "react-icons/io";


export const ShoppingCartF = ({shoppingCart, setViewingCart}) => {

    
    console.log(shoppingCart)
    return (
        <div className="shopping-cart-wrapper">
            <button className="" onClick={()=>setViewingCart(false)} >
            <IoMdArrowBack className="" />
          </button>
        <h1>Shopping Cart</h1>
        {shoppingCart.map((food,index)=>(
            <div key={index}  className="shopping-cart-item">
                {/* <img src={food.imageUrl} alt=""/> */}
                {food.dish}
                {food.pickupDate}
                {food.address}
                {food.price}
            </div>
        ))}
        <button>Check Out</button>

        <h3>Total Price</h3>
        {/* TODO: calculate the total price */}
    </div>
    )
}

