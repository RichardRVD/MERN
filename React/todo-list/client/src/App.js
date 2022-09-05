import './App.css';
import React, { useState } from 'react';
import Task from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1>ToDo List:</h1>
        <div>
          <h3> Add a new task:</h3>
          <AddTask list= { list } setList = { setList } />

          <h3> Here are your unfinished tasks: </h3>
          { list.map(( task, i ) => <Task key = { i } index = { i } list = { list } setList = { setList } /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
