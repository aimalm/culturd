import React, { useRef, useState, useEffect } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import axios from "axios";
import NavLogSign from "../NavLogSign/NavLogSign";

function Login() {
  const email = useRef();
  const password = useRef();
  const [SignInError, setSignInError] = useState("");

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
                  <form className="log-form">
                      <h1 className="form-header">Log in</h1>
                      <div className="form-group">
                          <label htmlFor="email">Email</label><br/>
                          <input ref = {email} type="email" name="email" id="log-email" className="input-fields" required/>
                          <p className="error-msg"></p>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label><br/>
                          <input ref = {password} type="password" name="password" id="log-pass" className="input-fields" required/>
                          <p className="error-msg">{SignInError}</p>
                          <p><Link to="/" id="password-link">Forgot password?</Link></p>
                      </div>
                      <button type="submit"className="submit-btn" onClick={logIn}>Login</button>
                  </form>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Login;