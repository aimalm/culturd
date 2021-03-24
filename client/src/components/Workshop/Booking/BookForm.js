
import React, { useState } from 'react'

import {
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
        <div>
        <h1>React Form Elements</h1>
        <Form
          name="testForm"
          onSubmit={data => {
            // data[form element name]
            setValues(data)
            // do something with values
          }}
        >
         
          <DateTime label="My Date" name="myDate" />
          <Telephone label="Telephone" name="myTelephone" />
          <DateTime label="Number of participants" type="datetime" name="myDateTime" />
          <DateTime
            label="My DateTime"
            type="datetime-local"
            name="myDateTimeLocal"
          />
         
          <DropDown
            label="My Drop Down"
            initialValue=""
            data-testid="dd1"
            name="Country"
          >
            <OptionGroup label="Indonesia">
              <Option initialValue="Cooking">Cooking</Option>
              <Option initialValue="Dance">Dance</Option>
              <Option initialValue="Art">Art</Option>
     
     
            </OptionGroup>
            <OptionGroup label="Congo">
            <Option initialValue="Cooking">Cooking</Option>
              <Option initialValue="Dance">Dance</Option>
              <Option initialValue="Art">Art</Option>
             
            </OptionGroup>
            <OptionGroup label="Chinese">
            <Option initialValue="Cooking">Cooking</Option>
              <Option initialValue="Dance">Dance</Option>
              <Option initialValue="Art">Art</Option>
            </OptionGroup>
            <OptionGroup label="Afganistan">
            <Option initialValue="Cooking">Cooking</Option>
              <Option initialValue="Dance">Dance</Option>
              <Option initialValue="Art">Art</Option>
            </OptionGroup>
          </DropDown>
          <button onClick={e => {}}>Save</button>
        </Form>
        <div data-testid="ref-out">
          <ul>
       
            <li>Telephone : {values.myTelephone}</li>
            <li>Number of person: {values.myDateTime}</li>
            <li> Date & Time booking: {values.myDateTimeLocal}</li>
            <li>Country: {values.myDropDown}</li>
          </ul>
        </div>
      </div>
    )
  }
  
export default BookForm
