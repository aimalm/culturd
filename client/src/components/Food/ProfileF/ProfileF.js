import React, { useState } from "react";

import "./ProfileF.css";
import EditProfile from "./EditProfile";
import OrderHistory from "./OrderHistory";
import AddPost from "./AddPost";



function ProfileF({ createFood, userData, updateUser }) {
  const [viewSection, setViewSection] = useState("info");

  return (
    <div className="profile-wrapper">
      <div className="profile-menu">
        {userData.ProfilePicture === null ||userData.ProfilePicture === undefined || userData.ProfilePicture === "" ? (
          <img
            className="profile-user-pic"
            src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt=""
          />
        ) : (
          <img
            className="profile-user-pic"
            src={userData.ProfilePicture}
            alt=""
          />
        )}

        <h3>Hello {userData.firstName} !</h3>

        <button
          className="profile-menu-categories"
          onClick={() => setViewSection("info")}
        >
          personal info
        </button>
        <button
          className="profile-menu-categories"
          onClick={() => setViewSection("history")}
        >
          order history
        </button>

        {userData.TypeOfUser === "cook" ? (
          <button
            className="profile-menu-addpost"
            onClick={() => setViewSection("addPost")}
          >
            Add Post
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="profile-content">
        <div className="profile-content-border">
          {viewSection === "info" ? <EditProfile userData={userData} updateUser={updateUser}/> : ""}
          {viewSection === "history" ? <OrderHistory /> : ""}
          {viewSection === "addPost" ? <AddPost createFood={createFood} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default ProfileF;
