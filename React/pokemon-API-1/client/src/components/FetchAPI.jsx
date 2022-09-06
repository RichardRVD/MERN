import React, { useEffect, useState } from 'react';
import axios from 'axios';

//
const FetchAPI = (props) => {

    const [pokemon, setPokemon] = useState([]);
    const [request, setRequest] = useState(false);
    
    useEffect(() => {
        if(request){
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then( response => {setPokemon(response.data.results);
            })
            .catch(err => console.log("This is the error:", err));
            setRequest(false);
        }
    },[request]); 
    const fetchData = (e) => {
        setRequest(true);
        // fetch("")
        // .then((response) => {
        //     return response.json(); //this allows us to parse the response to JSON format
        // })
        // .then((response) => {
        //     console.log("Getting back response from our API:", response);
        //     setPokemon(response.results)
        // })
        // .catch(err => {
        //     console.log("This is the catch error", err);
        // });
    }

  return (
    <div>
        <h1>FetchAPI</h1>
        <button className='btn btn-success' onClick={ fetchData }>Fetch Pokemon!</button>
        <hr />
        { pokemon.length > 0 && pokemon.map((p, index) => { return( <li key={index}>{p.name}</li>)})
            
        }
    </div>
  )
}

export default FetchAPI