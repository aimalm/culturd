import React from "react";

import {
  Button,
  Form,
  TextBox,
  Password,
  EmailInput,
  UrlInput
} from "react-form-elements";

function EditProfile({userData,updateUser}) {



  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
        className="profile-info-form"
        name="edit profile form"

        onSubmit={(values) => {
          console.log("edit profile form", values);
         
          updateUser(userData._id, values)
        }}
      >
        <TextBox
          name="firstName"
          label="First Name"
        initialValue={userData.firstName}
          className="profile-form"
        />
        <TextBox
          name="lastName"
          label="Last Name"
          initialValue={userData.lastName}
          className="profile-form"
        />
        <Password
          name="password"
          label="Password "
          initialValue=""
          className="profile-form"
        />
       

        <EmailInput
          name="email"
          label="Email "
         initialValue={userData.email}
          className="profile-form"
        />
        <UrlInput
          name="Profile_Picture"
          label="Profile Picture URL"
          initialValue={userData.ProfilePicture}
          placeholder="https://www.example.com"
          className="profile-form"

          
        />

        <TextBox
          name="Address"
          label="Address"
          initialValue={userData.address}
          className="profile-form"
        />

        <Button className="profile-order-button">Save Changes</Button>
      </Form>
    </div>
  );
}

export default EditProfile;
