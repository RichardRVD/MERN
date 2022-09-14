import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(response => {
            console.log(response.data.results)
            setAllAuthors(response.data.results)
        })
        .catch(err => console.log(err))
    },[deleteToggle])

    const deleteAuthor = (e, id) => {
        console.log("Deleting Author", id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
        .then((response) => {
            console.log("Delete was successful", response)
            setDeleteToggle(!deleteToggle)
        })
        .catch(err => console.log("Error while deleting", err))
    }

    return (
        <div className='container'>
            <h1>
                Favorite Authors
            </h1>
            <Link to="/author/new" className='btn btn-info'>Add an Author</Link>
            <p>We have quotes by:</p>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((a, index) => {
                            return (
                                <tr key={index}>
                                    <td>{a.name}</td>
                                    <td><Link to={`/author/edit/${a._id}`} className="btn btn-primary">Edit</Link> <button className='btn btn-danger' onClick={(e) => {deleteAuthor(e, a._id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors