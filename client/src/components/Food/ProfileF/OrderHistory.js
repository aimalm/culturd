import React from "react";
import { deleteFoodPost } from "../../Axois/Axois";
import { RiDeleteBin6Line } from "react-icons/ri";

function OrderHistory({ userData, dishData, getAllFood }) {
  const dishPostByMe = dishData.filter(
    (dish) => dish.cookerId === userData._id
  );

  return (
    <div className="profile-history">
      <h3 className="profile-history-title">Your selling post history</h3>

      {dishPostByMe.length === 0 ? (
        <h5>You have no active post yet, add your next Home Food </h5>
      ) : (
        <div>
          {dishPostByMe.map((dish) => (
            <div className="profile-order-container" key={dish._id}>
              <button
                className="profile-history-button"
                onClick={() => {
                  deleteFoodPost(dish._id);

                  setTimeout(() => {
                    getAllFood();
                  }, 500);
                }}
              >
                <RiDeleteBin6Line className="profile-history-button-icon" />
              </button>

              <div className="profile-order-details">
                <p>
                  <strong>Dish: </strong> {dish.dishName}
                </p>
                <p>
                  <strong>Description: </strong> {dish.dishDescription}
                </p>
                <p>
                  <strong>Pick up date: </strong>{" "}
                  {dish.pickupDate.substring(0, 10)}
                </p>
              </div>

              <img
                className="profile-order-img cart-img"
                src={dish.imageUrl}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
