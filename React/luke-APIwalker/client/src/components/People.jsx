import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import obi from './images/obi.png';

const People = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((err) => {
            console.error(err);
            setData({error: "These aren't the droids you're looking for!"} )
        })
    },[id])
    
    return data.error ? (<><h1>{data.error}</h1><img src={obi}></img></>) : (
        <div>
            
            <h1>Star Wars Crew</h1>
            <h3>Name: {data.name}</h3>
            <h5>Height: {data.height}</h5>
            <h5>Skin Color: {data.skin_color}</h5>
            <h5>Eye Color: {data.eye_color}</h5>
        </div>
    )
}

export default People