import React, {useState, useRef} from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import NavLogSign from '../NavLogSign/NavLogSign';
import axios from "axios";

function SignUp() {
    const name = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const userType = useRef();

    const [ emailError, setEmailError] = useState("");

    function register(e){
        e.preventDefault();

        const fName = name.current.value;
        const lName = lastName.current.value;
        const userEmail = email.current.value;
        const userPassword = password.current.value;
        const user_Type = userType.current.value;

        const data =    {
            "TypeOfUser": `${user_Type}`,
            "firstName": `${fName}`,
            "lastName": `${lName}`,
            "email": `${userEmail}`,
            "password": `${userPassword}`
        };
            axios
                .post("http://localhost:5000/culturd_api/Em3Wi5va8is15/signup", data)
                .then(function(res) {
                    window.location.replace("http://localhost:3000/login");
                })
                .catch(function(res) {
                    sessionStorage.setItem("emailError", "* Someone has already registered with this email");
                    setEmailError(sessionStorage.getItem("emailError"));
                });
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
                        <div className="name-container">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label><br/>
                                <input ref = {name} type="text" name="firstName" id="firstName" className="input-fields" required/>
                                <p className="error-msg" ></p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label><br/>
                                <input ref = {lastName} type="text" name="lastName" id="lastName" className="input-fields" required/>
                                <p className="error-msg"></p>
                            </div>
                        </div>
                        <div className="email-container">
                            <div className="form-group">
                                <label  htmlFor="email">Email</label><br/>
                                <input ref = {email} type="email" name="email" id="sign-email" className="input-fields" required/>
                                <p className="error-msg"> {emailError}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user">Choose</label><br/>
                                <select ref = {userType} name="user" id="user" className="input-fields">
                                    <option value="guest">Guest</option>
                                    <option value="cook">Cook</option>
                                </select>
                            </div>
                        </div>
                        <div className="password-container">
                            <div className="form-group">
                                <label  htmlFor="password">Password</label><br/>
                                <input ref = {password} type="password" name="password" id="sign-pass" className="input-fields" required/>
                                <p className="error-msg"></p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPass">Confirm Password</label><br/>
                                <input type="password" name="confirmPass" id="confirmPass" className="input-fields" required/>
                                <p className="error-msg"></p>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn" onClick={register}>Signup</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default SignUp;
