import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function footer() {
  return (
    <div className="footer">
      <span className="footer-line">&#x2015;</span>
      <div className="footer-icon-container">
        <Link to="/">
          <FacebookIcon className="footer-icon" />
        </Link>
        <Link to="/">
          <InstagramIcon className="footer-icon" />
        </Link>
        <Link to="/">
          <TwitterIcon className="footer-icon" />
        </Link>
        <a href="mailto:name@email.com">
          <MailOutlineIcon className="footer-icon" />
        </a>
      </div>
      <p className="footer-copyright">
        &copy; Copyright 2021 - CULTURD - All rights reserved.
      </p>
    </div>
  );
}

export default footer;
