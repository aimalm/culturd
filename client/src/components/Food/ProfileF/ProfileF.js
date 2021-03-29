import React, { useState } from "react";
import {
  Button,
  Form,
  TextBox,
  Password,
  EmailInput,
  Telephone,
} from "react-form-elements";
import { User } from "../Template";
import "./ProfileF.css";

function ProfileF() {
  const [viewSection, setViewSection] = useState("info");

  return (
    <div className="profile-wrapper">
      <div className="profile-menu">
        <img className="profile-user-pic" src={User.profilePic} alt="" />

        <h3>Hello {User.name} !</h3>

        <button className='profile-menu-categories' onClick={() => setViewSection("info")}>personal info</button>
        <button className='profile-menu-categories' onClick={() => setViewSection("history")}>order history</button>
      </div>
      <div className="profile-content">
        <div className="profile-content-border">
        {viewSection === "info" ? (
          <div className="profile-info">
            <h3 className="profile-info-title">Edit your account details</h3>

            <Form
              className='profile-info-form'
              onSubmit={(values) => {
                console.log("formValues", values);
              }}
            >
              <TextBox
                name="name"
                label="UserName"
                initialValue={User.name}
                className="profile-form"
              />
              <Password
                name="password"
                label="Password Input"
                initialValue=""
                className="profile-form"
              />
              <Password
                name="re-confirm-password"
                label="Re-enter Password"
                initialValue=""
                className="profile-form"
              />

              <EmailInput
                name="emailAddress"
                label="Email Input"
                initialValue={User.email}
                className="profile-form"
              />

              <Telephone
                name="telephoneNumber"
                label="Telephone Number"
                initialValue={User.phone}
                className="profile-form"
              />

              <Button className="profile-order-button">Save Changes</Button>
            </Form>
          </div>
        ) : (
          <div className="profile-history">
            <h3 className="profile-history-title">Your order history</h3>
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
        )}
        </div>
      </div>
    </div>
  );
}

export default ProfileF;
