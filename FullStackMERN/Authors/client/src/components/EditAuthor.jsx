import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditAuthor = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]);

    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(response => {
            console.log(response)
            setFormInfo(response.data.results)
        })
        .catch(err => console.log("Edit page error get request:", err ))
    }, [id]);

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/update/${id}`, formInfo)
        .then(response => {
            console.log("Edit page Put request:", response)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.err.errors;
            console.log("Catch Error:", err.response.data.err.error)
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
                    <input className='form-control bg-light' type="text" name='name' onChange={onChangeHandler} value={formInfo.name}/>
                </div>
                <div className='bg-light'>
                <Link to={"/"} className="bg-light"><button className='btn btn-warning mt-3 m-3'>Cancel</button></Link>
                    <button className='btn btn-success mt-3 m-3'>Submit</button>
                </div>
            </form>
    </div>
  )
}

export default EditAuthor