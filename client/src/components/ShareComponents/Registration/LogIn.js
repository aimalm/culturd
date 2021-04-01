import React from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import NavLogSign from '../NavLogSign/NavLogSign';

function Login() {
    return (
        <div className="login-container">
            <NavLogSign />
            <div className="log-form-container">
                <div className="form-container-1">
                    <h2 className="login-h2">New User ?</h2>
                    <p className="p-login"><Link to="/signup" className="reg-link">Sign up</Link> to get access to all features of the application</p>
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
                        <button type="submit"className="submit-btn">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
