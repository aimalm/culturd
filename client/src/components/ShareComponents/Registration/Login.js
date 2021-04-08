import React, { useRef, useState, useEffect } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import axios from "axios";
import NavLogSign from "../NavLogSign/NavLogSign";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Login() {
  const email = useRef();
  const password = useRef();
  const [SignInError, setSignInError] = useState("");

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

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } 
  }

  const findFormErrors = () => {
    const { email, password } = form
    const newErrors = {}
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if ( !email || email === '' ) newErrors.email = '* Email address is empty'
    else if ( !email.match(regexEmail) ) newErrors.email = '* Invalid email address'
    
    if ( !password || password === '' ) newErrors.password = '* Password is empty'
    else if ( password.length > 30 ) newErrors.password = '* Password is too long'

    return newErrors
  }

  useEffect(() => {
    setSignInError();
  }, []);

  function logIn(e) {
    e.preventDefault();
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const data = {
      email: `${userEmail}`,
      password: `${userPassword}`,
    };

    const API = axios.create({
      baseURL: "http://localhost:5000/culturd_api/Em3Wi5va8is15",
    });
    API.interceptors.request.use((req) => {
      if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
          JSON.parse(localStorage.getItem("profile")).token
        }`;
      }
      return req;
    });

    //Get all for user
    const getUser = async () => {
      const response = await API.get(`/user/${userEmail}`).catch((err) =>
        console.log(err)
      );

      if (response && response.data) {
        window.localStorage.setItem("userID", `${response.data._id}`);
        window.localStorage.setItem("TypeOfUser", "admin");
        console.log(response.data._id);
      }
    };

    API.post("/signin", data)
      .then(function (res) {
        localStorage.setItem("email", `${userEmail}`);
        localStorage.setItem("SignInError", "");
        setSignInError(sessionStorage.getItem("SignInError"));
        getUser();
        localStorage.removeItem("SignInError");
        window.location.replace("http://localhost:3000/food");
      })

      .catch(function (res) {
        localStorage.setItem("SignInError", "Email or password is wrong");
        setSignInError(sessionStorage.getItem("SignInError"));
      });
  }

  return (
    <div>
      <NavLogSign />
      <div className="login-container">
          <div className="log-form-container">
              <div className="form-container-1">
                  <h2 className="login-h2">New User?</h2>
                  <p className="p-login"><Link to="/signup" className="reg-link">Sign up</Link> to get access to all features of the application</p>
              </div>
              <div className="form-container-2">
                  <Form className="log-form">
                    <h1 className="form-header">SIGN IN</h1>
                    <Form.Group className="form-group">
                      <Form.Label>Email</Form.Label>
                      <Form.Control 
                        ref = {email} 
                        type="email" 
                        name="email" 
                        id="log-email" 
                        className="input-fields"
                        onChange={ e => setField('email', e.target.value) }
                        isInvalid={ !!errors.email }
                      />
                      <Form.Control.Feedback type='invalid'>
                        { errors.email }
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="form-group">
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        ref = {password} 
                        type="password" 
                        name="password" 
                        id="log-pass" 
                        className="input-fields" 
                        onChange={ e => setField('password', e.target.value) }
                        isInvalid={ !!errors.password }
                      />
                      <Form.Control.Feedback type='invalid'>
                        { errors.password }
                      </Form.Control.Feedback>
                        <p className="error-msg">{SignInError}</p>
                        <p><Link to="/" id="password-link">Forgot password?</Link></p>
                    </Form.Group>
                    <button type="submit"className="submit-btn" onClick={logIn}  onClick={ handleSubmit }>SIGN IN</button>
                  </Form>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
