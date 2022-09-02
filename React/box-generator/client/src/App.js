import React, {useState} from 'react';
import './App.css';
import Box from './components/Box';
import UserForm from './components/UserForm';

function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      
			<div className ="row justify-content-center">
          <div className="col-3">
              <UserForm data={boxes} setData={setBoxes}></UserForm>
          </div>
      </div>
      <div>
          { boxes.map((addBox, i) => 
              <Box key={i} data={boxes[i]} />
          )}
      </div>
    </div>
  );
}

export default App;
