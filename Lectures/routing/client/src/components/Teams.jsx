import React from 'react'
import { useParams } from 'react-router';

const Teams = () => {
    const {city} = useParams();
  return (
    <div>
        <h1>Teams</h1>
        <h3>Welcome to {city}</h3>
    </div>
  )
}

export default Teams