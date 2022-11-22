import React, { useState } from "react"; 
import "./sign-in.css"; 

export const SignIn = (props) => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    return (
    //Outer container to define flex properties
    <div className="outer-container">
        <div className="auth-form-container">
            <h2>Sign up</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="budspencer@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="password">Repeat password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" id="button">Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already registered? Proceed to login.</button>
        </div>
    </div>
    )
}