import React from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import NavLogSign from '../NavLogSign/NavLogSign';
import axios from "axios"


function SignUp() {
    function register(e){
        console.log("hi");
        e.preventDefault();
        const data =    {
            "Type_of_User": "guest",
            "User_Name": "aimal.m",
            "Name": "Valerie",
            "Last_Name": "Maarij",
            "Email": "me@gmail.com",
            "Contact_Number": "0489784513",
            "Address": "gentstraat 120, 900",
            "Profile_Picture": "www.photo.com"
        };
        
        axios.post('http://localhost:5000/culturd_api/Em3Wi5va8is15/user', data);

    }
    return (
        <div className="signup-container">
            <NavLogSign />
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
                            <input type="text" name="firstName" id="firstName" className="input-fields" required/>
                            <p className="error-msg">* error</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label><br/>
                            <input type="text" name="lastName" id="lastName" className="input-fields" required/>
                            <p className="error-msg">* error</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label><br/>
                            <input type="email" name="email" id="sign-email" className="input-fields" required/>
                            <p className="error-msg">* error</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label><br/>
                            <input type="password" name="password" id="sign-pass" className="input-fields" required/>
                            <p className="error-msg">* error</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPass">Confirm Password</label><br/>
                            <input type="password" name="confirmPass" id="confirmPass" className="input-fields" required/>
                            <p className="error-msg">* error</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user">Choose</label><br/>
                            <select name="user" id="user" className="input-fields">
                                <option value="guest">Guest</option>
                                <option value="cook">Cook</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-btn onClick = {register(e)}">Signup</button>
                    </form>
                </div>
            </div>
            <button className="submit-btn" onClick={register}>Signup</button>

        </div>
    );
}

export default SignUp;
