import React from 'react'
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1jymwca', 'template_sy3h1dt', e.target, 'user_PEqi70VcSRGoi1kpcoHyN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  
    return (
      <>
       <h1 className="title-home">Get in Touch</h1>
        <div className="container-contactus">
          <Form onSubmit={sendEmail}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
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
