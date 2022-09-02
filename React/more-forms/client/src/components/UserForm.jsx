import React, { useState } from  'react';
import './style.css';
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastname, setLastName] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");  
    const [conPassError, setConPassError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        if(firstname.length > 0 && firstname.length < 2){
            setFirstError("First name must be longer than two characters.");
        } else {
            setFirstError("");
        }
        if(lastname.length > 0 && lastname.length < 2){
            setLastError("Last name must be longer than two characters.");
        } else {
            setLastError("");
        }
        if(email.length > 0 && email.length < 5){
            setEmailError("Email must be longer than five characters.");
        } else {
            setEmailError("");
        }
        if(password.length > 0 && password.length < 8){
            setPassError("Password must be at least 8 characters.");
        } else {
            setPassError("");
        }
        if(password != confirmpassword){
            setConPassError("Password and confirm passwords do not match. Please check spelling and try again.")
        } else {
            setConPassError("");
        }
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };

    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div className='input'>
                    <label>First Name: </label> 
                    <input  type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div className='error'>{firstError ? <p>{firstError}</p> : ""}</div>
                <div className='input'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className='error'>{lastError ? <p>{lastError}</p> : ""}</div>
                <div className='input'>
                    <label>Email Address: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='error'>{emailError ? <p>{emailError}</p> : ""}</div>
                <div className='input'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className='error'>{passError ? <p>{passError}</p> : ""}</div>
                <div className='input'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <div className='error'>{conPassError ? <p>{conPassError}</p> : ""}</div>
                <input className='button' type="submit" value="Create User" />
            </form>
            <h1>
                Your Form Data:
            </h1>
            <h3>
                First Name: {firstname}
            </h3>
            <h3>
                Last Name: {lastname}
            </h3>
            <h3>
                Email: {email}
            </h3>
            <h3>
                Password: {password}
            </h3>
            <h3>
                Confirm Password: {confirmpassword}
            </h3>
        </div>
    );
};
    
export default UserForm;
