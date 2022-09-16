import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPlayer = () => {

  const navigate = useNavigate();

  const [errors, setErrors] = useState([])

  const [formInfo, setFormInfo] = useState({
    name: "",
    position: "",
    games: {
      gameOne: "undecided",
      gameTwo: "undecided",
      gameThree: "undecided"
    }
  })

  const onChangeHandler = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/player/new", formInfo)
    .then( response => {
      console.log(response)
      navigate("/")
    })
    .catch( err => {
      const errorResponse = err.response.data.err.errors;
      console.log("Error from catch:", err.response.data.err.errors)
      const errorArr = [];
      for(const key of Object.keys(errorResponse)){
        errorArr.push(errorResponse[key].message)
      }
      setErrors(errorArr)
    });
  }

  return (
    <div className='container'>
      <Link to={"/"} >Manage Players</Link> | <Link to={"/"} >Manage Player Status</Link>
      <div className="container">
        <Link to={"/"}>List</Link> | <Link to={"/player/new"} >Add Player</Link>
        <div className="container">
          <h1>Add Player</h1>
          <form className='form form-control bg-light' onSubmit={submitHandler}>
            {errors.map((error, index) => <p key={index} className="bg-danger">{error}</p>)}
            <div className="form-group bg-light">
              <label className='form-label lead bg-light'>Name: </label>
              <input type="text" className='form-control bg-light ml-2' name='name' onChange={onChangeHandler} placeholder="Please enter players name..." />
            </div>
            <div className="form-group bg-light">
              <label className='form-label lead bg-light'>Preferred Position: </label>
              <input type="text" className='form-control bg-light ml-2' name='position' onChange={onChangeHandler} placeholder="Please enter players preferred position..." />
            </div>
            <div className="bg-light">
              <button className='btn btn-success mt-3' disabled={formInfo.name.length < 2}>ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPlayer