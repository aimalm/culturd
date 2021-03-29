import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import logoFood from "../image/logofood.png";
import logoWorkshop from "../image/logoworkshop.png";

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="home-button-container">
        <button className="home-dropdown-button" onClick={()=>setShowLogin(!showLogin)}>
          Login <AiFillCaretDown />
        </button>
        {showLogin ? (
          <div className="home-dropdown-container">
            <Link to="/" className="home-login-link">
              <p>Login</p>
            </Link>
            <Link to="/" className="home-reg-link">
              <p>Register</p>
            </Link>
            <Link to="/" className="home-about-us-link">
              <p>Contact Us</p>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="home-section-container">
        <div className="home-section-workshop">
          <h1 className="home-section-title-workshop">
            Always wanted to learn <br></br>how to cook foreign dishes
          </h1>
          <Link to="/workshop" className="home-workshop-link">
            Discover more
          </Link>
        </div>
        <div className="home-section-food">
          <h1 className="home-section-title-food">
            Get foreign dishes <br></br>from passionate home cooks
          </h1>
          <Link to="/food" className="home-food-link">
            Discover more
          </Link>
        </div>
        <Link to="/about_us" className="home-aboutus-link">
          <img className="home-logo-food" src={logoFood} alt="" />
          <img className="home-logo-workshop" src={logoWorkshop} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
