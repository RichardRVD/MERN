import React, { Component } from 'react'


const PersonCard = props => {
    return (
        <div>
            <h1>Name: {props.firstName} {props.lastName}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
        </div>
    )
}
export default PersonCard;