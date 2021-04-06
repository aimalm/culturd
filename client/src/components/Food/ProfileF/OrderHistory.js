import React from "react";
import {deleteFoodPost} from "../../Axois/Axois"

function OrderHistory({ userData,dishData,getAllFood }) {

  
  const dishPostByMe = dishData.filter(dish => dish.cookerId === userData._id)
//   console.log("dishPostByMe: ", dishPostByMe)
// console.log(userData._id)
 //console.log(cookHistory)
  return (
    <div className="profile-history">
      {userData.TypeOfUser === "cook" ? (
        <h3 className="profile-history-title">Your selling post history</h3>
      ) : (
        <h3 className="profile-history-title">Your order history</h3>
      )}
     

        {dishPostByMe.map(dish=>(
          <div className="profile-order-container" key={dish._id}>
          <div className="profile-order-details">
            
            <p>
              <strong>Dish: </strong> {dish.dishName}
            </p>
            <p>
              <strong>Description: </strong> {dish.dishDescription}
            </p>
            <p>
              <strong>Pick up date: </strong> {dish.pickupDate}
            </p>
            
          </div>
  
          <img
            className="profile-order-img cart-img"
            src={dish.imageUrl}
            alt=""
          />
          <button className="profile-history-button" onClick={()=>{
            deleteFoodPost(dish._id)
            setTimeout(() => {
              getAllFood()
            }, 500);
          }}>
          
          
          Remove the post</button>
        </div>
        ))}
         
     
    </div>
  );
}

export default OrderHistory;
