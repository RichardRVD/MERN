import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddHero = () => {
    const navigate = useNavigate();

    const [errors, setErrors] = useState([])

    const [formInfo, setFormInfo] = useState({
        name: "",
        rating: "",
        img: ""
    });
    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/hero/new", formInfo)
        .then(response => {
            console.log(response)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.err.errors;
            console.log("This is the catch: ", err.response.data.err.error)
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });
    }

    return (
        <div className='container'>
            <h1>Add Hero</h1>
            <form className='form form-control' onSubmit={submitHandler} >
                {errors.map((err, index) => <p key={index} className="text-danger" >{err}</p> )}
                <div className="mb-3 d-flex">
                    <label className='form-label'>Name: </label>
                    <input type="text" className='form-label' name='name' onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex">
                <label className='form-label'>Rating: </label>
                    <input type="number" className='form-label' name='rating' onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex">
                <label className='form-label'>Image: </label>
                    <input type="text" className='form-label' name='img' onChange={onChangeHandler} />
                </div>
                <div>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddHero;

/*
    1. import useState
    2. import axios
    3. import useNavigate
*/