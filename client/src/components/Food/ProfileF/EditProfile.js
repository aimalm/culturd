import React, {useState} from "react";

import {
  Button,
  Form,
  TextBox,
  //Password,
  EmailInput,
  UrlInput,
  UrlInput,
} from "react-form-elements";

import {updateUser} from "../../Axois/Axois"

function EditProfile({ userData, getUser }) {

  const [progressPercent, setProgressPercent] = useState(0);

   const [formData, setFormData] = useState('');

  // const [error, setError] = useState({
  //   found: false,
  //   message: '',
  // });


    // Upload image
    const upload = ({ target: { files } }) => {
      let data = new FormData();
      data.append('categoryImage', files[0]);
      setFormData(data);
    };

    // setProgressPercent(0);
    // const options = {
    //   onUploadProgress: (progressEvent) => {
    //     const { loaded, total } = progressEvent;
    //     let percent = Math.floor((loaded * 100) / total);
    //     console.log(`${loaded}kb of ${total}kb | ${percent}%`);
    //     setProgressPercent(percent);
    //   },
    // };


  
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
        <div>
          <div className='progress mb-3 w-100'>
           
          </div>
          <div className='custom-file mb-3'>
          <UrlInput name="thisisaurl" label="URL" />

            <label className='custom-file-label' htmlFor='inputGroupFile04'>
              Choose file
            </label>
          </div>
         
        </div>

        <Button className="profile-order-button">Save Changes</Button>
      </Form>
    </div>
  );
}

export default EditProfile;
