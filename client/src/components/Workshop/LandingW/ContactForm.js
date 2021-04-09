import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { IoMdClose } from "react-icons/io";
import thanks from "../image/thanks.png";


function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1jymwca', 'template_sy3h1dt', e.target, 'user_PEqi70VcSRGoi1kpcoHyN')
      .then((result) => {
         // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setIsSubmitting(true)
  }

  
    return (
      <>
      {isSubmitting ? (
        <div className="pop-up-notice contact-workshop-submit">
          <button
            className="paypal-button-close"
            onClick={() => {
              setIsSubmitting(false);
            }}
          > 
            <IoMdClose />
          </button>
           <img className="logo_thanks" src={thanks} alt="First slide" />
          <h5 className="h5-popupW">Your Email has been sent.</h5>
        </div>
      ) : (
        ""
      )}
       <h1 className="title-home">Get in Touch</h1>

       

        <div className="container-contactus-work">
          <Form onSubmit={sendEmail}>
            <FormGroup controlid="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlid="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlid="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
              />
            </FormGroup>
            <Button variant="primary" type="submit" value="Send">
              Submit
            </Button>
          </Form>
      </div>

      </>
    )
  }


export default ContactForm
