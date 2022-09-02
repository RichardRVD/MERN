import React, {useState} from 'react'

const UserForm = (props) => {
    const {data, setData} = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleSize = (e) => {
        setSize(e.target.value);
    }
    const handleForm = (e) => {
        e.preventDefault();
        setData([...data, {
            "color" : color,
            "size" : size,
            "style" : {
                "display" : "inline-block",
                "background" : color,
                "height" : `${size}px`,
                "width" : `${size}px`
            }
        }]);
        setColor("");
        setSize("");
    }
    return (
        <div>
            <form onSubmit={ handleForm }>
                <h1>Fill out your box info:</h1>
                <div className= "form-group">
                    <label htmlFor= 'color'>Color: </label>
                    <input type= "text" className='form-control bg-light border-success' name= "color" value={color} onChange= { handleColor } />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size:</label>
                    <input type= "text" className='form-control bg-light border-success' name= "size" value={size} onChange= { handleSize } />
                </div>
                <input type="submit" value="Add a box" className='btn btn-success' />
            </form>
        </div>
    )
}
export default UserForm