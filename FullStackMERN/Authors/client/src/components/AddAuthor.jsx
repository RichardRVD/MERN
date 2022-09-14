import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAuthor = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name: ""
    });
    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/author/new", formInfo)
        .then(response => {
            console.log(response)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.err.errors;
            console.log("Error from Catch:", err.response.data.err.error)
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });
    }

    return (
        <div className='container'>
            <h1>Favorite Authors</h1>
            <Link to={"/"} className="btn btn-info">Home</Link>
            <p>Add a new Author:</p>
            <form className='form form-control bg-light' onSubmit={submitHandler}>
                {errors.map((error, index) => <p key={index} className="bg-danger">{error}</p>)}
                <div className="form-group bg-light">
                    <label className='form-label lead bg-light'>Name:</label><br/>
                    <input className='form-control bg-light' type="text" name='name' onChange={onChangeHandler} placeholder="Please enter Author name here..."/>
                </div>
                <div className='bg-light'>
                    <Link to={"/"} className="bg-light"><button className='btn btn-warning mt-3 m-3'>Cancel</button></Link>
                    <button className='btn btn-success mt-3 m-3'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddAuthor