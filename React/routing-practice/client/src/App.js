import './App.css';
import Hello from './components/Hello';
import Home from './components/Home';
import Number from './components/Number';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:word" element={<Hello />} />
      <Route path="/number/:numbers" element={<Number />} />
      <Route path="/:word/:bgcolor1/:color1" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
