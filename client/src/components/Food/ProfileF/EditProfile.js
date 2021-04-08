
import {
  Button,
  Form,
  TextBox,
  //Password,
  EmailInput,
  UrlInput,
} from "react-form-elements";

import {updateUser} from "../../Axois/Axois"
import UploadProfileImage from "./UploadProfileImage"

function EditProfile({ userData, getUser }) {

  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
      className="profile-form"
        name="edit profile form"
        onSubmit={(values) => {
          //console.log("edit profile form", values);
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
       
        <TextBox
          name="Address"
          label="Address"
          initialValue={userData.address}
          className="profile-form"
        />
          
          <Button type ="submit" className="profile-order-button">Save Changes</Button>

      </Form>
        <UploadProfileImage />
    </div>
  );
}

export default EditProfile;