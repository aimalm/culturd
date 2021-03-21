import React from "react";
import './ShoppingCartF.css'
import { IoMdArrowBack } from "react-icons/io";

function ShoppingCartF({shoppingCart, setShoppingCart}) {
    

    const deleteFromCart = (id) =>{
        
        let newShoppingCart = shoppingCart.filter((food)=>food.id !== id)
        console.log(newShoppingCart)
        setShoppingCart(newShoppingCart)
    }

    return (
        
        <div className="shopping-cart-wrapper">
            <a href="/food">
           
            <IoMdArrowBack className="" />
          </a>
        <h1>Shopping Cart</h1>

        {shoppingCart.length===0?(
            <h1>Your cart is empty</h1>
            
        ):(
            <div>
            {shoppingCart.map((food)=>(
               <div key={food.id}  className="shopping-cart-item">
                   {/* <img src={food.imageUrl} alt=""/> */}
                   {food.dish}
                   {food.pickupDate}
                   {food.address}
                   {food.price}
                   <button onClick={()=>deleteFromCart(food.id)}>Delete</button>
               </div>
           ))}
           <button>Check Out</button>
   
           <h3>Total Price</h3>
           </div>
        )}

      
        {/* TODO: calculate the total price */}
    </div>
    )
}

export default ShoppingCartF







