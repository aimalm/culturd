import {
  Button,
  Form,
  TextBox,
  EmailInput,
  UrlInput,
} from "react-form-elements";

import { updateUser } from "../../Axois/Axois";
import React, { useState } from "react";

function EditProfile({ userData, getUser }) {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = () => {
       // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("ProfilePicture", fileData);

    fetch(
      `http://localhost:5000/culturd_api/Em3Wi5va8is15/user/email/${localStorage.getItem(
        "userID"
      )}`,
      {
        method: "PATCH",
        body: data,
      }
    )
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const submitHandler = (values) => {
    console.log("edit profile form", values);
    updateUser(userData._id, values);
    onSubmitHandler();

    setTimeout(() => {
      getUser(userData.email);
    }, 500);
  };

  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
        className="profile-form"
        name="edit profile form"
        onSubmit={submitHandler}
      >
        <TextBox
          name="firstName"
          label="First Name"
          initialValue={userData.firstName}
          className="profile-form"
          required
        />
        <TextBox
          name="lastName"
          label="Last Name"
          initialValue={userData.lastName}
          className="profile-form"
          required
        />

        <input type="file" onChange={fileChangeHandler} />

        <EmailInput
          name="email"
          label="Email "
          initialValue={userData.email}
          className="profile-form"
          required
        />

        <TextBox
          name="Address"
          label="Address"
          initialValue={userData.address}
          className="profile-form"
        />

        <Button type="submit" className="profile-order-button">
          Save Changes
        </Button>
      </Form>
   
    </div>
  );
}

export default EditProfile;
