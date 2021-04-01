import React, { useState } from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

function SignUp() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className="signup-container">
            <div className="reg-button-container">
                <button className="reg-dropdown-button" onClick={()=>setShowLogin(!showLogin)}>
                Register <AiFillCaretDown />
                </button>
                {showLogin ? (
                <div className="reg-dropdown-container">
                    <Link to="/" className="reg-login-link">
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
            <div className="sign-form-container">
                <div className="form-container-1">
                    <h2 className="login-h2">Already have an account?</h2>
                    <p><Link to="/login" className="reg-link">Log in</Link> to get access to all features of the application</p>
                </div>
                <div className="form-container-2">
                    <form>
                        <h4>Sign up</h4>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label><br/>
                            <input type="text" name="firstName" id="firstName" className="input-fields"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label><br/>
                            <input type="text" name="lastName" id="lastName" className="input-fields"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input type="email" name="email" id="sign-email" className="input-fields"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label><br/>
                            <input type="email" name="password" id="sign-pass" className="input-fields"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass">Confirm Password</label><br/>
                            <input type="password" name="confirmPass" id="confirmPass" className="input-fields"/>
                        </div>
                        <button type="submit" className="submit-btn">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
