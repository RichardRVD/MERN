import React from 'react'
import { useParams } from 'react-router';

const Hello = () => {
    const {word} = useParams();
    const {color1} = useParams();
    const {bgcolor1} = useParams();
  return (
    <div>
        <h1 style={{backgroundColor:bgcolor1, color:color1}}>The word is: {word}</h1>
    </div>
  )
}

export default Hello