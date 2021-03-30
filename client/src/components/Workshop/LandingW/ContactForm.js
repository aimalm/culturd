import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


function ContactForm() {
    return (
      <>
       <h1 className="title-home">Get in Touch</h1>
        <div className="container-contactus">
          <Form>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
 

      </div>

      </>
    )
  }


export default ContactForm
