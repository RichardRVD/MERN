import React, { Component } from 'react'

export default class PersonCard extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
          <h1>Name: {this.props.firstName} {this.props.lastName}</h1>
          <h3>Age: {this.props.age}</h3>
          <h3>Hair Color: {this.props.hairColor}</h3>
      </div>
    )
  }
}
