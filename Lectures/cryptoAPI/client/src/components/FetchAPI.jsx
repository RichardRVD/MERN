import React, { useState } from 'react'

//
const FetchAPI = () => {

    //create a state variable to store our API results in.
    const [ coins, setCoin ] = useState([]);

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            return response.json(); //this allows us to parse the response to JSON format
        })
        .then((response) => {
            console.log("Getting back response from our API:", response);
            setCoin(response)
        })
        .catch(err => {
            console.log("This is the catch error", err);
        });
        console.log("I am texting a friend while running other tasks"); // this will display first because of the fetch request / promise.
    }

  return (
    <div>
        <h1>FetchAPI</h1>
        <button className='btn btn-success' onClick={ fetchData }>Click me for Crypto Data!</button>
        {
            coins.map(( c, idx ) => {
                return(
                    <div key={ idx }>
                        <h3><img src={c.image} height="50px"/> { c.name } ${ c.current_price }</h3>
                    </div>
                )
            })
        }

    </div>

  )
}

export default FetchAPI