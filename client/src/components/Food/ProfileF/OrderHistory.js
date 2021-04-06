import React, { useState } from "react";
import { deleteFoodPost } from "../../Axois/Axois";
import { IoMdClose } from "react-icons/io";

function OrderHistory({ userData, dishData, getAllFood }) {
  const [deleting, setDeleting] = useState(false);

  const dishPostByMe = dishData.filter(
    (dish) => dish.cookerId === userData._id
  );
  console.log("dishPostByMe: ", dishPostByMe);
  // console.log(userData._id)
  //console.log(cookHistory)
  return (
    <div className="profile-history">
      <h3 className="profile-history-title">Your selling post history</h3>

      {dishPostByMe.length === 0 ? (
        <h5>You have no active post yet, add your next Home Food </h5>
      ) : (
        <div>
          {dishPostByMe.map((dish) => (
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
              <button
                className="profile-history-button"
                onClick={() => {
                  setDeleting(true);
                }}
              >
                Remove This post
              </button>
              {deleting ? (
                <div className="pop-up-notice delete-confirm-container ">
                  <button
                    className="paypal-button-close"
                    onClick={() => {
                      setDeleting(false);
                    }}
                  >
                    <IoMdClose />
                  </button>
                  <h4>Are you sure to DELETE the post?</h4>
                  
                  <button
                  className="button delete-post-button"
                    onClick={() => {
                      deleteFoodPost(dish._id);
                      setDeleting(false);
                      setTimeout(() => {
                        getAllFood();
                      }, 500);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
