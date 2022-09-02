import React, { useState } from  'react';
import './style.css';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
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
                <div className='input'>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div className='input'>
                    <label>Email Address: </label> 
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='input'>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div className='input'>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
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
