import React, { useState } from "react";
import "./ProfileF.css";
import EditProfile from "./EditProfile";
import OrderHistory from "./OrderHistory";
import AddPost from "./AddPost";
import UpComingOrder from "./UpComingOrder";

function ProfileF({ userData, dishData, getUser, createFood, getAllFood }) {
  const [viewSection, setViewSection] = useState("info");

  return (
    <div className="profile-wrapper">
      <div className="profile-menu">
        <div className="profile-img-background">
          {userData.ProfilePicture === null ||
          userData.ProfilePicture === undefined ||
          userData.ProfilePicture === "" ? (
            <img
              className="profile-user-pic"
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="user_picture"
            />
          ) : (
            <img
              className="profile-user-pic"
              src={userData.ProfilePicture}
              alt="user_picture"
            />
          )}
        </div>

        <h3>Hello {userData.firstName} !</h3>

        <button
          className="button profile-menu-categories"
          onClick={() => setViewSection("info")}
        >
          personal info
        </button>
        {userData.TypeOfUser === "cook" ? (
          <button
            className="button profile-menu-categories"
            onClick={() => setViewSection("history")}
          >
            Your dishes
          </button>
        ) : (
          ""
        )}

        {userData.TypeOfUser === "cook" ? (
          <button
            className="button profile-menu-categories"
            onClick={() => setViewSection("order")}
          >
            Upcoming orders
          </button>
        ) : (
          ""
        )}

        {userData.TypeOfUser === "cook" ? (
          <button
            className="button profile-menu-addpost"
            onClick={() => setViewSection("addPost")}
          >
            Add a new post
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="profile-content">
        <div className="profile-content-border">
          {viewSection === "info" ? (
            <EditProfile userData={userData} getUser={getUser} />
          ) : (
            ""
          )}
          {viewSection === "history" ? (
            <OrderHistory
              userData={userData}
              dishData={dishData}
              getAllFood={getAllFood}
            />
          ) : (
            ""
          )}
          {viewSection === "addPost" ? (
            <AddPost
              userData={userData}
              createFood={createFood}
              getAllFood={getAllFood}
            />
          ) : (
            ""
          )}

          {viewSection === "order" ? <UpComingOrder /> : ""}
        </div>
      </div>
    </div>
  );
}

export default ProfileF;
