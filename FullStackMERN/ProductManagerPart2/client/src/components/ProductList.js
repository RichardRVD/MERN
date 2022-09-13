import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then((res) => setProducts(res.data.results))
    .catch(err => console.log(err))
  }, []);
  return (
    <div className='container'>
      <h1>List of products:</h1>
        {products.map((p, i) => {
          return ( <h2 key={i}>
            <Link to={/product/ + p._id}>{p.title}</Link></h2>)})}
    </div>
  )
}

export default ProductList;