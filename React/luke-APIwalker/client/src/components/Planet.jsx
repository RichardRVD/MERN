import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import obi from './images/obi.png';
const Planet = () => {
    const [data, setData] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((err) => {
            console.error(err);
            setData({error: "These aren't the droids you're looking for!"})
        })
    },[id])
  return data.error ? (<><h1>{data.error}</h1><img src={obi}></img></>) : (
    <div>
        <h1>Star Wars Planet</h1>
        <h3>Name: {data.name}</h3>
        <h5>Climate: {data.climate}</h5>
        <h5>Diameter: {data.diameter}</h5>
        <h5>Gravity: {data.gravity}</h5>
    </div>
  )
}

export default Planet