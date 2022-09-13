import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {

  const [products, setProducts] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false)
  
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then((res) => setProducts(res.data.results))
    .catch(err => console.log(err))
  }, [deleteToggle]);

  const deleteProduct = (e, id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then((res) => {
      console.log("Delete Successful", res)
      setDeleteToggle(!deleteToggle)
    })
    .catch(err => console.log("Error deleting product", err))
  }

  return (
    <div className='container'>
      <h1>List of products:</h1>
      <table>
        <thead>
          <tr>
            <th scope='col' >Product</th>
            <th scope='col' >Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((p, i) => {
              return (
                <tr key={i}>
                  <td className='mb-5' ><Link to={`/product/${p._id}`}>{p.title}</Link></td>
                  <td><button className='btn btn-danger mb-3 ml-3' onClick={(e) => {deleteProduct(e, p._id)}}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductList;