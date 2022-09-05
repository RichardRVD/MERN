import './App.css';
import Tab from './components/Tab';
import React, { useState } from 'react';

function App() {
  const [ tabs ] = useState([
    { name: "Tab 1",
      data: "Tab 1 has been clicked"},
    { name: "Tab 2",
      data: "Look at Tab 2, doin' its THANG!"},
    { name: "Tab 3",
      data: "Tab 3 is the cool tab... It just doesnt really care. (Which is cool)"}
  ]);
  const [ index, setIndex ] = useState(0);
  return (
    <div className="App">
      <div className='row justify-content-center align-items-center'>
        <div className='col-4 mt-2 d-flex'>
          { tabs.map((item, i) => <Tab key={i} Tab={item} index={i} setIndex={setIndex} />)}
          <div className='border border-dark m-2'>
            <p className='text-left px-2 py-1'> { tabs[index].data } </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
