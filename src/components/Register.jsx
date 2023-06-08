import React, { useState } from 'react';
export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h2>Rgeister</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" id='name' placeholder='full name'/>
                <label htmlfor="email">email</label>
                <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlfor="password">password</label>
                <input value={password} type="password" placeholder="**********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={()=> props.onFormSwitch("login")}>already have an account? login here</button>
        </div>
    )
}