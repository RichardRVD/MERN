import React from 'react'

const Tab = (props) => {
    const { Tab, index, setIndex } = props;
    const { name } = Tab;

    const chosen = ( e, index ) => {
        setIndex( index );
    }

  return (
    <div>
        <button onClick={ e => chosen( e, index ) } className="btn btn-dark">{ name }</button>
    </div>
  )
}

export default Tab