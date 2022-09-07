
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Form />
      <Routes>
        <Route path='/' element={<h1>R2D2</h1>} />
        <Route path='/people/:id' element={<People/>} />
        <Route path='/planets/:id' element={<Planet/>} />
      </Routes>
    </div>
  );
}

export default App;
