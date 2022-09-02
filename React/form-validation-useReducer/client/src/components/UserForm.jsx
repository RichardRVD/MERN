import React, { useReducer } from 'react';

const intialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName:{
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action){
    return {
        ...state,
        [action.type] : action.payload
    };
}

const UserForm = () => {
    const [state, dispatch] = useReducer(reducer, intialState);

    function handleChange(e) {
        let error = null;
        let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if( e.target.name === "firstName" || e.target.name === "lastName" ){
            if( e.target.value.length == 0 )
            error = "Must be at least 1 character."
        } else {
            if( !e.target.value.match(regEmail)) {
                error = "Invalid email format. Please include the @ followed by a . route"
            } else {
                error = null;
            }
        }
        dispatch({
            type: e.target.name,
            payload: {
                value: e.target.value,
                error: error
            }
        });
    }

    return (
        <div>
            <h1>Validations with useReducer </h1>
            <div>
                <label>
                    <span>First Name:</span>
                    <input name="firstName" value={ state.firstName.value } onChange={ handleChange }/>
                    {state.firstName.error !== null && (<p> { state.firstName.error }</p>)}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>
                    <input name="lastName" value={ state.lastName.value } onChange={ handleChange }/>
                    {state.lastName.error !== null && (<p> { state.lastName.error }</p>)}
                </label>
            </div>
            <div>
                <label>
                    <span>Email :</span>
                    <input name="email" value={ state.email.value } onChange={ handleChange }/>
                    {state.email.error !== null && (<p> { state.email.error }</p>)}
                </label>
            </div>

        </div>
    )
}

export default UserForm