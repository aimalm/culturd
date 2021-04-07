
import {
  Button,
  Form,
  TextBox,
  //Password,
  EmailInput,
  UrlInput,
} from "react-form-elements";

import {updateUser} from "../../Axois/Axois"
import { useState } from "react";

function EditProfile({ userData, getUser }) {


const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("ProfilePicture", fileData);

    fetch("http://localhost:5000/culturd_api/Em3Wi5va8is15/user/606b2d70b3d1692a3cc3ac4b", {
      method: "PATCH",
      body: data,
    })
      .then((result) => {
        console.log("File Sent Successful");
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
      
  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
      className="profile-form"
        name="edit profile form"
        onSubmit={(values) => {
          console.log("edit profile form", values);
          updateUser(userData._id, values);

          setTimeout(() => {
            getUser(userData.email);
          }, 500);
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
        {/* <Password
          name="password"
          label="Password "
          initialValue={userData.password}
          className="profile-form"
        /> */}

        <EmailInput
          name="email"
          label="Email "
          initialValue={userData.email}
          className="profile-form"
        />
        <UrlInput
          name="ProfilePicture"
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
          
          <Button type ="submit" className="profile-order-button">Save Changes</Button>

      </Form>

      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Confirm</button>
      </form>


    </div>
  );
}

export default EditProfile;