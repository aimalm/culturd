import React, { useState } from "react";

import "./ProfileF.css";
import { User } from "../Template";
import EditProfile from "./EditProfile";
import OrderHistory from "./OrderHistory";
import AddPost from "./AddPost";

function ProfileF({createFood}) {
  const [viewSection, setViewSection] = useState("info");
 
 
  return (
    <div className="profile-wrapper">
      <div className="profile-menu">
        <img className="profile-user-pic" src={User.Profile_Picture} alt="" />

        <h3>Hello {User.Name} !</h3>

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

        {User.Type_of_User === "cook" ? (
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
          {viewSection === "info" ? (
            <EditProfile/>
          ) : ""}
          {viewSection === "history" ? (
            <OrderHistory/>
          ) : ""}
          {viewSection === "addPost" ? (
            <AddPost createFood={createFood}/>
          ) : ""}
        </div>
      </div>
    </div>
  );
}

export default ProfileF;
