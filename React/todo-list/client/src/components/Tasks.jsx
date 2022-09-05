import React from 'react'

const Tasks = (props) => {

    const { index, list, setList } = props;
    let selected = list[index];
    let completed = list[index].isComplete;

    let unfinished = {
        textDecoration: 'none'
    }
    let finished = {
        textDecoration: "line-through"
    }

    const checkbox = (e) => {
        list[index].isComplete = !list[index].isComplete
        setList([...list])
    }
    const deleted = (e) => {
        e.preventDefault();
        let listOfTasks = list.filter( task => list.indexOf(task) != index);
        setList(listOfTasks);
    }

  return (
    <div>
        <form onSubmit={ deleted }>
            
            <p style={ completed ? finished : unfinished } > { selected.name }<input className='ml-3' type="checkbox" checked={ completed } onChange={ checkbox }/> </p>
            <input type="submit" value="Delete Task" className='btn btn-danger mb-3' />
        </form>
    </div>
  )
}

export default Tasks