import React from 'react'

const Box = (props) => {
    const {data} = props;
    const {style} = data;
    return (
        <div className='m-1' style={style}>
        </div>
    )
}
export default Box