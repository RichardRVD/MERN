import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPlayers = () => {

  const [allPlayers, setAllPlayers] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
    .then( response => {
      console.log(response.data.results)
      setAllPlayers(response.data.results)
    })
    .catch(err => console.log(err))
  }, [deleteToggle])

  const deletePlayer = (e, id) => {
    console.log("Deleting player", id)
    axios.delete(`http://localhost:8000/api/player/delete/${id}`)
    .then((response) => {
      console.log("Delete was successful", response)
      setDeleteToggle(!deleteToggle)
    })
    .catch(err => console.log("Error while deleting", err))
  }

  return (
    <div className='container'>
      <Link to={"/"}>Manage Players</Link> | <Link to={"/status/game/1"}>Manage Player Status</Link>
      <div className="container">
        <Link to={"/"}>List</Link> | <Link to={"/player/new"}> Add Player</Link>
      </div>
      <div className="container">
        <table className='table table-striped table-dark'>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Preferred Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              allPlayers.map((p, index) => {
                return (
                  <tr key={index}>
                    <td>{p.name}</td>
                    <td>{p.position}</td>
                    <td><button className='btn btn-danger' onClick={(e) =>{deletePlayer(e, p._id)}}>DELETE</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllPlayers