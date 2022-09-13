import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    const [deleteToggle, setDeleteToggle] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err));
    }, [props.id, deleteToggle]);

    const deleteProduct = (e, id) => {
      axios.delete(`http://localhost:8000/api/product/delete/${id}`)
      .then((res) => {
        console.log("Delete Successful", res)
        setDeleteToggle(!deleteToggle)
        navigate("/products")
      })
      .catch(err => console.log("Error deleting product", err))
    }

  return (
    <div>
        <h1>Title: {product.title}</h1>
        <h3>Price: ${product.price}</h3>
        <h3>Description: {product.description}</h3>
        <button className='btn btn-info'><Link to={`/product/edit/${id}`}>Edit</Link></button>
        <button className='btn btn-danger mb-3 ml-3' onClick={(e) => {deleteProduct(e, product._id)}}>Delete</button>
    </div>
  )
}

export default Detail;