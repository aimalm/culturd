import React, { useState } from "react";
import "./BookForm.css";
import { createBookForm } from "../../Axois/Axois";
import { IoMdClose } from "react-icons/io";


import {
  TextBox,
  EmailInput,
  DateTime,
  Telephone,
  DropDown,
  Option,
  OptionGroup,
  Form,
} from "react-form-elements";

function BookForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookFrom, setBookFrom] = useState([]);

  return (
    <>
      {isSubmitting && bookFrom ? (
        <div className="pop-up-notice book-from-confirmation">
          <button
            className="paypal-button-close"
            onClick={() => setIsSubmitting(false)}
          >
            <IoMdClose />
          </button>

          <h3 className="h3-popup">Please confirm the information</h3>
          <div className="pop-op_content">
          <p><strong>First Name: </strong>{bookFrom.firstname}</p>
          <p><strong>Last Name: </strong>{bookFrom.lastname}</p>
          <p><strong>Telephone: </strong>{bookFrom.myTelephone}</p>
          <p><strong>Email: </strong>{bookFrom.email}</p>
          <p><strong>Country you picked: </strong>{bookFrom.country}</p>
          <p><strong>Date & Time: </strong>{bookFrom.date_time}</p>
          <p><strong>Amount of ticket: </strong>{bookFrom.number}</p>
         
          <button className="btn-popup"
            onClick={() => {
              createBookForm(bookFrom);
              setIsSubmitting(false);
              
            }}
          >
            Submit
          </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <h1 className="h1-book">Request your price quote here</h1>
      <div className="Booking-container">
        <Form
          name="testForm"
          onSubmit={(data) => {
            //console.log(data);
            setBookFrom(data);
          }}
        >
          <TextBox label="Firstname" required name="firstname" />

          <TextBox label="Lastname" name="lastname" required />
          <EmailInput name="email" label="Email" initialValue="" />

          <Telephone className="input" label="Telephone" name="myTelephone" />
          <DateTime label="DateTime" type="datetime-local" name="date_time" />

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
          <DateTime
            label="Number of participants"
            type="datetime"
            name="number"
          />
          <br></br>
          <button
            className="button-about"
            onClick={() => setIsSubmitting(true)}
          >
            Save
          </button>
        </Form>
      </div>
    </>
  );
}

export default BookForm;
