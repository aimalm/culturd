
import React, { useState } from 'react'
import './BookForm.css'
import {createBookForm} from '../../Axois/Axois'



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

  

    return (

    <>
     
          <h1 className="h1-book">Request your price quote here</h1>

        <div className="Booking-container">
        <Form
          name="testForm"
          onSubmit={data => {
            // data[form element name]
          console.log(data);
          createBookForm(data);
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
          name="email"
          label="Email"
          initialValue=""
        />
         
          <Telephone className="input" label="Telephone" name="myTelephone" />
          <DateTime
           
            label="DateTime"
            type="datetime-local"
            name="date_time"
          />
         
          <DropDown
            label="Country"
            initialValue=""
            data-testid=""
            name="country"
          >
            <OptionGroup label="Country">
              <Option initialValue="Indonesia">Indonesia</Option>
              <Option initialValue="Congo">Congo</Option>
              <Option initialValue="Chinese">Chinese</Option>
              <Option initialValue="Afganistan">Afganistan</Option>
            </OptionGroup>
          </DropDown>
          <DateTime label="Number of participants" type="datetime" name="number" />
         <br></br>
          <button className="button-about" onClick={e => {}}>Save</button>
        </Form>
     </div>
   </>
    )
  }
  
export default BookForm
