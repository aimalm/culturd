
import React, { useState } from 'react'
import './BookForm.css'
import book from '../image/book.png'

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
        <img src={book} className="book-logo" alt=""/>
        <div className="Booking-container">
        <h1 className="h1-book">Request your price quote here</h1>
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
          name="lastname"
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
          <DateTime label="Number of participants" type="datetime" name="number" />
         <br></br>
          <button className="button-about" onClick={e => {}}>Save</button>
        </Form>
     </div>
        <div data-testid="ref-out">
          <ul>
            <li>Firstname: {values.firstname}</li> 
            <li>Lastn: {values.lastname}</li> 
            <li>Email Address : {values.emailbox}</li> 
            <li>Telephone : {values.myTelephone}</li>
            <li>Number of person: {values.myDateTime}</li>
            <li> Date & Time booking: {values.myDateTimeLocal}</li>
            <li>Country: {values.myDropDownCountry}</li>
            <li>Workshop: {values.myDropDownWorkshop}</li>
            <li>Number of people: {values.number}</li>
          </ul>
        </div>
   
   </>
    )
  }
  
export default BookForm
