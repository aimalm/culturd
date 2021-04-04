import React from "react";

function OrderHistory({ userData,dishData }) {

  let cookHistory = dishData.filter(dish=>dish.cooker === userData.firstName)

 console.log(cookHistory)
  return (
    <div className="profile-history">
      {userData.TypeOfUser === "cook" ? (
        <h3 className="profile-history-title">Your selling history</h3>
      ) : (
        <h3 className="profile-history-title">Your order history</h3>
      )}
      <div className="profile-order-container">
        <div className="profile-order-details">
          <p>
            <strong>Order Date: </strong> 20/03/2021
          </p>
          <p>
            <strong>Dish: </strong> Chicken Noodle Soup
          </p>
          <p>
            <strong>Cook: </strong> Joanna Morrison
          </p>
        </div>

        <img
          className="profile-order-img cart-img"
          src="https://images.unsplash.com/photo-1560434019-4558f9a9e2a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <button className="profile-history-button">Review</button>
      </div>
      <div className="profile-order-container">
        <div className="profile-order-details">
          <p>
            <strong>Order Date: </strong> 20/03/2021
          </p>
          <p>
            <strong>Dish: </strong> Chicken Noodle Soup
          </p>
          <p>
            <strong>Cook: </strong> Joanna Morrison
          </p>
        </div>

        <img
          className="profile-order-img cart-img"
          src="https://images.unsplash.com/photo-1604228982586-ded54b1ad579?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <button className="profile-history-button">Review</button>
      </div>
    </div>
  );
}

export default OrderHistory;
