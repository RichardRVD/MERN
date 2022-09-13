import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ProductForm = () => {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    });

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", formInfo)
        .then(res => {
        console.log(res)
        navigate("/products")
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='container'>
                <h1>Product Manager</h1>
                <form className='form' onSubmit={onSubmitHandler} >
                    <div className="mb-3 d-flex justify-content-center">
                        <label className='form'>Title: </label>
                        <input className="ml-2" type="text" name='title' onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                    <label className='form'>Price: </label>
                        <input className="ml-2" type="number" name='price' onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                    <label className='form'>Description: </label>
                        <input className="ml-2" type="text" name='description' onChange={onChangeHandler} />
                    </div>
                    <div>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
    )
}

export default ProductForm