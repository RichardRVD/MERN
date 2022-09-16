import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlayerStatus = () => {

    const [allPlayers, setAllPlayers] = useState([]);
    const [playToggle, setPlayToggle] = useState(false);
    const [playing, setPlaying] = useState({
        gameOneStatus:{
            gameOne: "undecided",
            gameTwo: "undecided",
            gameThree: "undecided"
        }
    })

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then( response => {
            console.log(response.data.results)
            setAllPlayers(response.data.results)
        })
        .catch( err => console.log(err))
    }, [])

    const playHandler = (e, id) => {
        console.log("Update playing or not:", id)
        // let playingForm = {}
        axios.put(`http://localhost:8000/api/player/update/${id}`, playing)
        .then((response) => {
            console.log("Updated game player status", response)
            setPlayToggle(!playToggle);
            setPlaying({
                ...playing,
                [e.target.name]: e.target.value
            })
        },[playToggle])
    }

    return (
        <div className='container'>
            <Link to={"/"}>Manage Players</Link> | <Link to={"/"}>Manage Player Status</Link>
            <div className="container">
                <h1>Player Status - Game 1</h1>
                <Link to={"/"}>Game 1</Link> | <Link to={"/"}> Game 2</Link> | <Link to={"/"}> Game 3</Link>
            </div>
            <div className="container">
                <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                    <th>Team Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    allPlayers.map((p, index) => {
                        return (
                        <tr key={index}>
                            <td>{p.name}</td>
                            <td>
                                <button className='btn btn-success m-1' onClick={(e) =>{playHandler(e, p.games.gameOne = "playing")}}>Playing</button>
                                <button className='btn btn-danger m-1' onClick={(e) =>{playHandler(e, p.games.gameOne = "not")}}>Not Playing</button>
                                <button className='btn btn-warning m-1' onClick={(e) =>{playHandler(e, p.games.gameOne = "undecided")}}>Undecided</button>
                            </td>
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

export default PlayerStatus