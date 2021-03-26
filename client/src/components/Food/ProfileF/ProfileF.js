import React from "react";
import {
    Button,
    Form,
    TextBox,
    Password,
    EmailInput, 
    UrlInput,
    Telephone,
    TextArea
  } from 'react-form-elements'
  import{User} from '../Template'
  import "./ProfileF.css";



function ProfileF() {
   
  return (
    <div className='profile-wrapper'>
      <div className="profile-menu">
      <img className="profile-user-pic" src={User.profilePic} alt="" />

        <ul>
          <li>
            <h3>Hello {User.name} !</h3>
          </li>
          <li>
            <h5>personal info</h5>
          </li>
          <li>
            <h5>order history</h5>
          </li>
        </ul>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <Form
            onSubmit={(values) => {
              console.log("formValues", values);
            }}
          >
            <TextBox name="name" label="UserName" initialValue={User.name} className="profile-form"/>
            <Password name="password" label="Password Input" initialValue="" />
            <Password name="re-confirm-password" label="Re-enter Password" initialValue="" />

            <EmailInput
              name="emailAddress"
              label="Email Input"
              initialValue={User.email}
            />
            
            <Telephone
              name="telephoneNumber"
              label="Telephone Number"
              initialValue={User.phone}
            />
            
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ProfileF;
