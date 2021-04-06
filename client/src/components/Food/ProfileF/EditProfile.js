
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
 const [image, setImage] = useState('');

 

 const show= () => {
  const b = document.getElementById('file-selector');
  //data.append('categoryImage', files[0]);
  //console.log(b.files[0].name);
  let files = b.files

  let reader = new FileReader();

  console.log(reader.readAsDataURL(files[0]));

  //userData.ProfilePicture = a;
  //a =b.files[0].name;
  //return a
  
  //('categoryImage', files[0]);
};

const handleSubmit = (e) => {
  e.preventDefault();
  
  };
  return (
    <div className="profile-info">
      <h3 className="profile-info-title">Edit your account details</h3>

      <Form
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

      

        <input
            type='file'
            id='file-selector'
            onChange={show}
          /> {show}
          
          <Button type ="submit" className="profile-order-button" onClick={show}>Save Changes</Button>

      </Form>


    </div>
  );
}

export default EditProfile;