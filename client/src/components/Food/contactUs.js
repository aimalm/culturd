import React from 'react'
import './contactUs.css'
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
init("user_PEqi70VcSRGoi1kpcoHyN");

export default function contactUs() {

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
        <div className="aboutus_main">
          <form className="contact-form" onClick={()=>sendEmail(e)} >
            <input type="hidden" name="contact_number" />

            <label>Name</label>
            <input type="text" name="from_name" />

            <label>Email</label>
            <input type="email" name="user_email" />
            
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
    )
}

 
