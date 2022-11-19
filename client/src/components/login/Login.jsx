import React, { useState } from "react"; 
import "./login.css"; 
import axios from "axios"; 

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); //use react router to navigate to a page

    const url = "http://localhost:3000/login/"   

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {email, pass})
    }
    return (
    <div className="outer-container">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="budspencer@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" id="button">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    </div>
        
    )
}