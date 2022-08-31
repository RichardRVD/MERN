import React, { Component } from 'react'

class ToDo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Things I need to do:</h2>
                <li>Learn React</li>
                <li>Eat lunch</li>
                <li>Walk the dog</li>
                <li>Go to sleep</li>
                <li>Wake up and do it all again tomorrow...</li>
            </div>
        )
    }
}
export default ToDo;
