import React from "react";

import {
  Button,
  Form,
  TextBox,
  Password,
  EmailInput,
  Telephone,
} from "react-form-elements";
import { User } from "../Template";

function EditProfile() {
  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
        className="profile-info-form"
        name="edit profile form"

        onSubmit={(values) => {
          console.log("edit profile form", values);
        }}
      >
        <TextBox
          name="Name"
          label="First Name"
          // initialValue={User.Name}
          className="profile-form"
        />
        <TextBox
          name="Last_Name"
          label="Last Name"
          // initialValue={User.Last_Name}
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
          name="Email"
          label="Email Input"
          // initialValue={User.Email}
          className="profile-form"
        />

        <Telephone
          name="Contact_Number"
          label="Telephone Number"
          //  initialValue={User.Contact_Number.toString()}
          className="profile-form"
        />
        <TextBox
          name="Address"
          label="Address"
          // initialValue={User.Address}
          className="profile-form"
        />

        <Button className="profile-order-button">Save Changes</Button>
      </Form>
    </div>
  );
}

export default EditProfile;
