import React, { useState } from 'react';

//
const FetchAPI = (props) => {

    //create a state variable to store our API results in.
    const [ pokemon, setPokemon ] = useState([]);

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
            return response.json(); //this allows us to parse the response to JSON format
        })
        .then((response) => {
            console.log("Getting back response from our API:", response);
            setPokemon(response.results)
        })
        .catch(err => {
            console.log("This is the catch error", err);
        });
    }

  return (
    <div>
        <h1>FetchAPI</h1>
        <button className='btn btn-success' onClick={ fetchData }>Get the list of Pokemon!</button>
        <hr />
        {pokemon.map((p, index) => { return <li key={index}>{p.name}</li>})
            
        }
    </div>
  )
}

export default FetchAPI