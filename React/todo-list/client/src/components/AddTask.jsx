import React, { useState } from "react";

const AddTask = ( props ) => {
    const { list, setList } = props;
    const [ name, setName ] = useState("")

    const addATask = ( e ) => {
        setName( e.target.value );
    }

    const addToList = ( e ) => {
        e.preventDefault();
        let newTask = {
            name: name,
            isComplete: false
        }
        setList([ ...list, newTask ]);
        setName("");
    }
    return (
        <div>
            <form onSubmit={ addToList }>
                <div>
                    <input type="text" className="form-control mt-2" onChange={ addATask } value = { name } />
                </div>
                <input type="submit" value="Add your task" className="btn btn-success mt-2" />
            </form>
        </div>
    )
}
export default AddTask;