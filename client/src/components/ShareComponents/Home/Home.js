import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import logoFood from "../image/logofood.png";
import logoWorkshop from "../image/logoworkshop.png";
import { ImUsers } from "react-icons/im"

function Home() {
  //const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="home-button-container">
        <Link to="/login" className="home-dropdown-button" >
          <ImUsers/> log in 
        </Link>
        {/* {showLogin ? (
          <div className="home-dropdown-container">
            <Link to="/login" className="home-login-link">
              <p>Log In</p>
            </Link>
            <Link to="/signup" className="home-reg-link">
              <p>Sign Up</p>
            </Link>
            <Link to="/contact_us" className="home-about-us-link">
              <p>Contact Us</p>
            </Link>
          </div>
        ) : (
          ""
        )} */}
      </div>
      <div className="home-section-container">
        <div className="home-section-workshop">
          <h1 className="home-section-title-workshop">
           Get to know more <br></br>About Our culture workshop
          </h1>
          <Link to="/workshop" className=" button home-workshop-link">
            Discover more
          </Link>
        </div>
        <div className="home-section-food">
          <h1 className="home-section-title-food">
            Get foreign dishes <br></br>from passionate home cooks
          </h1>
          <Link to="/food" className="button home-food-link">
            Discover more
          </Link>
        </div>
        <Link to="/about_us" className="home-aboutus-link">
          <img className="home-logo-food" src={logoFood} alt=""/>
          <img className="home-logo-workshop" src={logoWorkshop} alt="" />
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
