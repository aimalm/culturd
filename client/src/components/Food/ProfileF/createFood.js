import React from 'react';
import { Button, Form, TextBox, EmailInput, UrlInput} from "react-form-elements";


function createFood() {
    return (
        <div>
            
        <Form
        className="profile-info-form"
        name="edit profile form"
        >
            <TextBox
            name="Address"
            label="Address"
            className="profile-form"
            /> 
            <TextBox
            name="Address"
            label="Address"
            className="profile-form"
            />

      </Form>
            
        </div>
    )
}

export default createFood
