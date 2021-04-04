import React, {useRef, useState} from 'react';
import './Registration.css';
import { Link } from "react-router-dom";
import NavLogSign from '../NavLogSign/NavLogSign';
import axios from "axios";


function Login() {
    const email = useRef();
    const password = useRef();

    
    const [ SignInError, setSignInError] = useState("");

    function logIn(e){
        e.preventDefault();
        const userEmail = email.current.value;
        const userPassword = password.current.value;
        const data =    {
            "email": `${userEmail}`,
            "password": `${userPassword}`
        };

        const API = axios.create({ baseURL: 'http://localhost:5000/culturd_api/Em3Wi5va8is15' });
        API.interceptors.request.use((req) => {
        if (localStorage.getItem('profile')) {
            req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        }
        return req;
    })

        //Get all for food
        const getUser = async (email) => {
            const response = await API.get(`/user/${email}`).catch((err) => console.log(err));

            if (response && response.data) {
                localStorage.setItem("userID", `${response.data._id}`);
                console.log(response.data._id)
            }
        };
        
            API
                .post("/signin", data)
                .then(function(res) {
                    localStorage.setItem("email", `${userEmail}`);
                    //localStorage.setItem("SignInError", "");
                    setSignInError(sessionStorage.getItem("SignInError"));

                    localStorage.removeItem("SignInError");
                    getUser("zaherc@gmail.com")

                    
                    //localStorage.setItem("_id", `${userID}`);
                    //window.location.replace("http://localhost:3000/login");
                })
                .then(
                    //console.log(sessionStorage.getItem("email"))
                )
                .catch(function(res) {
                    localStorage.setItem("SignInError", "Email or password is wrong");
                    setSignInError(sessionStorage.getItem("SignInError"));

                });
            }

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
                        <h1>Log in</h1>
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
    );
}

export default Login;
