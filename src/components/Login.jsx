import React, { useState } from 'react';
export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlfor="password">password</label>
                <input value={password} type="password" placeholder="**********" id="password" name="password"/>
                <button className="link-btn" type="submit">Log In</button>
            </form>
            <button onClick={()=> props.onFormSwitch("register")}>dont have an account? register here</button>
        </div>
    )
}