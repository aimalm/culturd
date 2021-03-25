
import React, { useState } from 'react'
import './BookForm.css'

import {
  TextBox,
  EmailInput,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
  Form,
} from 'react-form-elements'

function BookForm() {

    const [values, setValues] = useState({})

    return (

    <>
        <div className="Booking-container">
        <h1>Request your price quote here</h1>
        <Form
          name="testForm"
          onSubmit={data => {
            // data[form element name]
            setValues(data)
            // do something with values
         }}

        >
            
         <TextBox
        label="Firstname" 
        required
        name="firstname"
           />

        <TextBox

          label="Lastname"
          name="lastame"
          required
         
        />
         <EmailInput
           

          name="emailbox"
          label="Email"
          initialValue=""
        />
         
          <Telephone className="input" label="Telephone" name="myTelephone" />
          <DateTime
           
            label="My DateTime"
            type="datetime-local"
            name="myDateTimeLocal"
          />
         
          <DropDown
            label="Country"
            initialValue=""
            data-testid=""
            name="myDropDownCountry"
          >
            <OptionGroup label="Country">
              <Option initialValue="Indonesia">Indonesia</Option>
              <Option initialValue="Congo">Congo</Option>
              <Option initialValue="Chinese">Chinese</Option>
              <Option initialValue="Afganistan">Afganistan</Option>
            </OptionGroup>
          </DropDown>

          <DropDown
            label="Workshop"
            initialValue=""
            data-testid="dd1"
            name="myDropDownWorkshop"
          >
            <OptionGroup label="Workshop">
              <Option initialValue="Cooking">Cooking</Option>
              <Option initialValue="Dance">Dance</Option>
              <Option initialValue="Art">Art</Option>
            </OptionGroup>
          </DropDown>
          <DateTime label="Number of participants" type="datetime" name="myDateTime" />
         <br></br>
          <buttonc className="landing_main-button" onClick={e => {}}>Save</buttonc>
        </Form>
     </div>
        <div data-testid="ref-out">
          <ul>
            <li>Name: {values.myName}</li> 
            <li>Email Address : {values.emailbox}</li> 
            <li>Telephone : {values.myTelephone}</li>
            <li>Number of person: {values.myDateTime}</li>
            <li> Date & Time booking: {values.myDateTimeLocal}</li>
            <li>Country: {values.myDropDownCountry}</li>
            <li>Workshop: {values.myDropDownWorkshop}</li>
          </ul>
        </div>
   </>
    )
  }
  
export default BookForm
