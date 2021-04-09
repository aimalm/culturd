import React from "react";

function UpComingOrder() {
 
  // TODO: Build logic to show login user's latest orders

  return (
    <div className="profile-history">
      <h3 className="profile-history-title">Your Upcoming order</h3>

      <div className="upcoming-order-container">
        <img
          className=" upcoming-order-img"
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt=""
        />
        <div className="upcoming-order-details">
          <p>
            <strong>Dish: </strong> Chocolate cake
          </p>
          <p>
            <strong>Quantity: </strong> 3
          </p>
          <p>
            <strong>Pick up date: </strong> 2021-04-10
          </p>
         
        </div>
      </div>

      <div className="upcoming-order-container">
        <img
          className=" upcoming-order-img"
          src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
          alt=""
        />
        <div className="upcoming-order-details">
          <p>
            <strong>Dish: </strong> doughnut
          </p>
          <p>
            <strong>Quantity: </strong> 1
          </p>
          <p>
            <strong>Pick up date: </strong> 2021-04-07
          </p>
         
        </div>
      </div>
      <div className="upcoming-order-container">
        <img
          className=" upcoming-order-img"
          src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
          alt=""
        />
        <div className="upcoming-order-details">
          <p>
            <strong>Dish: </strong> doughnut
          </p>

          
          <p>
            <strong>Quantity: </strong> 1

          </p>
          <p>
            <strong>Pick up date: </strong> 2021-04-07
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpComingOrder;
