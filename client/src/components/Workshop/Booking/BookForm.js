
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
          <button onClick={e => {}}>Save</button>
        </Form>
        <div data-testid="ref-out">
          <ul>
            <li>Telephone : {values.myTelephone}</li>
            <li>Number of person: {values.myDateTime}</li>
            <li> Date & Time booking: {values.myDateTimeLocal}</li>
            <li>Country: {values.myDropDownCountry}</li>
            <li>Workshop: {values.myDropDownWorkshop}</li>
          </ul>
        </div>
      </div>
    )
  }
  
export default BookForm
