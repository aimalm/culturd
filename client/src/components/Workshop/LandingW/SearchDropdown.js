import React, { useState } from 'react'


import {
  TextBox,
  EmailInput,
  Form,
} from 'react-form-elements'

function SearchDropdown() {

    const [setValues] = useState({})

    return (

    <>
        <div className="Booking-container">
        <h1>Contact Us to Book Your Workshop</h1>
        <Form
          name="testForm"
          onSubmit={data => {
            // data[form element name]
            setValues(data)
            // do something with values
         }}

        >
            
         <TextBox
        label="Your name" 
        required
        name="Your name"
           />

          <EmailInput
           name="emailbox"
           label="Email"
           initialValue=""
         /> 

        <TextBox

          label="Message"
          name="lastname"
          required
         
        />
          <button className="button-about" onClick={e => {}}>Send Message</button>
        </Form>
     </div>
   </>
    )
  }
  
export default SearchDropdown
