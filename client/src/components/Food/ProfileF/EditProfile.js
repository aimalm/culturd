import { Button, Form, TextBox, EmailInput } from "react-form-elements";

import { updateUser, API_KEY, API_URL } from "../../Axois/Axois";
import React, { useState, useEffect } from "react";

function EditProfile({ userData, getUser }) {
  const [fileData, setFileData] = useState("");
  const [uploadError, setUploadError] = useState("");

  useEffect(() => {
    setUploadError();
  }, []);

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = () => {
    // Handle File Data from the state Before Sending
    //console.log(fileData.type)

    if (
      (fileData && fileData.type === "image/png") ||
      fileData.type === "image/jpeg" ||
      fileData.type === "image/jpg"
    ) {
      console.log(fileData.size);
      setUploadError("");

      const data = new FormData();

      data.append("ProfilePicture", fileData);

      fetch(
        `${API_URL}${API_KEY}/user/email/${localStorage.getItem(
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
    }
    if (fileData.type === "undefined" || !fileData) {
      setUploadError("Only jpeg, png and jpg");
      console.log("no");
    }
    if (
      (!fileData && !fileData.type === "image/png") ||
      !fileData.type === "image/jpeg" ||
      !fileData.type === "image/jpg"
    ) {
      setUploadError("Only jpeg, png and jpg");
      console.log("no");
    }
  };

  const submitHandler = (values) => {
    console.log("edit profile form", values);
    onSubmitHandler();

    updateUser(userData._id, values);

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

        <input type="file" onChange={fileChangeHandler} />
        <p className="uploadErr">{uploadError}</p>

        <Button type="submit" className="profile-order-button">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}

export default EditProfile;
