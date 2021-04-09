import React, {useState, useRef} from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY, API_URL } from "../../Axois/Axois"
import NavLogSign from '../NavLogSign/NavLogSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function SignUp() {
    const name = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const userType = useRef();

    const [ emailError, setEmailError] = useState("");

    const [ form, setForm ] = useState({});
    const [ errors, setErrors ] = useState({});

    const setField = (field, value) => {
        setForm({
        ...form,
        [field]: value
        })
    
        if ( !!errors[field] ) setErrors({
        ...errors,
        [field]: null
        })
    }

    const handleSubmit = ()=> {
        //e.preventDefault()
        const newErrors = findFormErrors()
        if ( Object.keys(newErrors).length > 0 ) {
        setErrors(newErrors)
        } 
    }

    const findFormErrors = () => {
        const { firstName, lastName, signPassword, confirmPass } = form
        const newErrors = {}
        //const regexEmail = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;

        if ( !firstName || firstName === '' ) newErrors.firstName = '* First name is empty'

        if ( !lastName || lastName === '' ) newErrors.lastName = '* Last name is empty'

        // if ( !signEmail || signEmail === '' ) newErrors.signEmail = '* Email address is empty'
        // else if ( !signEmail.match(regexEmail) ) newErrors.signEmail = '* Invalid email address'
        
        if ( !signPassword || signPassword === '' ) newErrors.signPassword = '* Password is empty'
        else if ( signPassword.length > 30 ) newErrors.signPassword = '* Password is too long'

        if ( !confirmPass || confirmPass === '' ) newErrors.confirmPass = '* Password not confirmed'
        else if ( confirmPass !== signPassword ) newErrors.confirmPass = '* Passwords don\'t match'

        return newErrors
    }

    function register(e){
        e.preventDefault();
        if(!handleSubmit()){
            
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
                .post(`${API_URL}${API_KEY}/signup`, data)
                .then(function(res) {
                    window.location.replace("/login");
                })
                .catch(function(res) {
                    sessionStorage.setItem("emailError", "* Someone has already registered with this email");
                    setEmailError(sessionStorage.getItem("emailError"));
                });

        }
        

    }
    return (
        <div>
            <NavLogSign />
            <div className="signup-container">
                <div className="sign-form-container">
                    <div className="form-container-3">
                        <h2 className="login-h2">Already have an account?</h2>
                        <p className="p-login"><Link to="/login" className="reg-link">SIGN IN</Link> to get access to all features of the application</p>
                    </div>
                    <div className="form-container-4">
                        <Form className="signUp-form">
                            <h1 className="form-header">SIGN UP</h1>
                            <div className="name-container">
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        ref = {name} 
                                        type="text" 
                                        name="firstName" 
                                        id="firstName" 
                                        className="input-fields" 
                                        onChange={ e => setField("firstName", e.target.value) }
                                        isInvalid={ !!errors.firstName }
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.firstName }
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        ref = {lastName} 
                                        type="text" 
                                        name="lastName" 
                                        id="lastName" 
                                        className="input-fields" 
                                        onChange={ e => setField("lastName", e.target.value) }
                                        isInvalid={ !!errors.lastName }
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.lastName }
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="email-container">
                                <Form.Group className="email-field">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        ref = {email} 
                                        type="email" 
                                        name="email" 
                                        id="sign-email" 
                                        className="input-fields" 
                                        onChange={ e => setField("signEmail", e.target.value) }
                                        isInvalid={ !!errors.signEmail }
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.signEmail }
                                    </Form.Control.Feedback>
                                    <p className="error-msg"> {emailError}</p>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Choose</Form.Label>
                                    <Form.Control 
                                        as="select" 
                                        ref = {userType} 
                                        name="user" 
                                        id="user" 
                                        className="input-fields"
                                    >
                                        <option value="guest" className="sign-option" >Guest &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</option>
                                        <option value="cook" className="sign-option" >Cook</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="password-container">
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        ref = {password} 
                                        type="password" 
                                        name="password" 
                                        id="sign-pass" 
                                        className="input-fields" 
                                        onChange={ e => setField("signPassword", e.target.value) }
                                        isInvalid={ !!errors.signPassword }
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.signPassword }
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="confirmPass" 
                                        id="confirmPass" 
                                        className="input-fields" 
                                        onChange={ e => setField("confirmPass", e.target.value) }
                                        isInvalid={ !!errors.confirmPass }
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.confirmPass }
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <button type="submit" className="submit-btn signUp" onClick={register} >SIGN UP</button>
                        </Form> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;