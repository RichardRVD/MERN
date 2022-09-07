import React from 'react'
import { useParams } from 'react-router';

const Number = () => {
    const {numbers} = useParams();
  return (
    <div>
        The number is: {numbers}
    </div>
  )
}

export default Number