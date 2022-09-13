import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link, useNavigate} from 'react-router-dom';
    
const Update = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setFormInfo(res.data.results);
            })
            .catch(err => console.log("Error with get:", err))
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo) 
            .then(res => {
                console.log("Update put request:", res)
                navigate("/products")
            })
            .catch(err => console.error(err));
    }
    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    };
    
    return (
        <div className='container'>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" className='form-control'
                    value={formInfo.title} 
                    onChange={onChangeHandler} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price" className='form-control'
                    value={formInfo.price} 
                    onChange={onChangeHandler}  />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description" className='form-control'
                    value={formInfo.description} 
                    onChange={onChangeHandler}  />
                </p>
                <input className='btn btn-info' type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

