import React, { useState } from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

function Login() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className="login-container">
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
                    <Link to="/" className="reg-contact-us-link">
                    <p>Contact Us</p>
                    </Link>
                </div>
                ) : (
                ""
                )}
            </div>
            <div className="log-form-container">
                <div className="form-container-1">
                    <h2>New User?</h2>
                    <p><Link to="/signup" className="reg-link">Sign up</Link> to get access to all features of the application</p>
                </div>
                <div className="form-container-2">
                    <form>
                        <h4>Log in</h4>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input type="email" name="email" id="log-email" className="input-fields"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" name="password" id="log-pass" className="input-fields"/>
                            <p><Link to="/" id="password-link">Forgot password?</Link></p>
                        </div>
                        <button type="submit"className="submit-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
