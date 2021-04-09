import React, { useState } from "react";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import home from "../image/home.png";
import "./contactUs.css";
import { ImUsers } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import thanks from "../image/thanks.png";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jymwca",
        "template_sy3h1dt",
        e.target,
        "user_PEqi70VcSRGoi1kpcoHyN"
      )
      .then(
        (result) => {
          //console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    setIsSubmitting(true);
  };

  return (
    <>
      <div className="home-arrow">
        <Link to="/">
          <img src={home} className="arrow" alt="" />
        </Link>
      </div>

      {isSubmitting ? (
        <div className="pop-up-notice contact-from-submit">
          <button
            className="paypal-button-close"
            onClick={() => {
              setIsSubmitting(false);
            }}
          >
            <IoMdClose />
          </button>
          <img className="logo_thanks" src={thanks} alt="First slide" />
          <h5 className="h5-popup"> Your Email has been sent.</h5>
        </div>
      ) : (
        ""
      )}

      <div className="reg-button-container">
        <Link to="/login">
          <button className="reg-dropdown-button">
            <span className="angle-icon">
              <ImUsers />
              SIGN UP
            </span>
          </button>
        </Link>
      </div>

      <h1 className="title-home">Contact Us</h1>
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>Ganzendries 176, Ghent</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>info@culturd.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h2>office hours</h2>
                    <span>Mon - Sat 9:00 am - 4.00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" method="post">
                <form onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" value="SEND" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.0442863459434!2d3.7088639156385197!3d51.033802779560105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c373de30a141a1%3A0xfe9e43a51a58a58e!2sGanzendries%20176%2C%209000%20Gent!5e0!3m2!1sen!2sbe!4v1617333970747!5m2!1sen!2sbe"
                  width="250"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
