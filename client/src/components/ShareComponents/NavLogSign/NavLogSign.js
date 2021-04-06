import React, { useState } from 'react';
import './NavLogSign.css';
import { Link } from "react-router-dom";
import { ImUsers } from "react-icons/im";

function NavLogSign() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div>
            <div className="reg-button-container">
                <button className="reg-dropdown-button" onClick={()=>setShowLogin(!showLogin)}>
             <span className="angle-icon"><ImUsers /> SIGN UP</span>
                </button>
                {showLogin ? (
                <div className="reg-dropdown-container">
                    <Link to="/" className="reg-home-link">
                    <p>Home</p>
                    </Link>
                    <Link to="/login" className="reg-login-link">
                    <p>Log In</p>
                    </Link>
                    <Link to="/signup" className="reg-signup-link">
                    <p>Sign Up</p>
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

export default NavLogSign;


