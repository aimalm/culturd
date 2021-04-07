import React, { useState } from 'react';
import './NavLogSign.css';
import home from '../image/home.png'
import { Link } from "react-router-dom";
import { ImUsers } from "react-icons/im";

function NavSignLog() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div>
            <div className="home-arrow">
                <Link to="/">
                    <img src={home} className="arrow" alt=""/>
                </Link>
            </div>
            <div className="reg-button-container">
                <button className="reg-dropdown-button" onClick={()=>setShowLogin(!showLogin)}>
                    <span className="angle-icon"><ImUsers /> LOG IN</span>
                </button>
                {showLogin ? (
                <div className="reg-dropdown-container">
                    <Link to="/login" className="reg-signup-link">
                    <p>Log In</p>
                    </Link>
                    <Link to="/contact_us" className="reg-contact-us-link">
                    <p>Contact Us</p>
                    </Link>
                </div>
                ) : (
                ""
                )}
            </div>
        </div>
    );
}

export default NavSignLog;