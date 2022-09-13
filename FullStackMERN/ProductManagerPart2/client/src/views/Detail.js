import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err));
    }, [props.id]);
  return (
    <div>
        <h1>Title: {product.title}</h1>
        <h3>Price: ${product.price}</h3>
        <h3>Description: {product.description}</h3>
    </div>
  )
}

export default Detail;