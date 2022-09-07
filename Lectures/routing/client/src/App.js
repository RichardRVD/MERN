import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Teams from './components/Teams';
import { Routes, Route, Link } from "react-router-dom";
import Players from './components/Players';
function App() {
  return (
    <div className="App">
      <h1>React Routing</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={ <h1>Hi, This is the home page</h1> } />
        <Route path="/about" element={ <About/> }/>
        <Route path="/teams" element={ <Teams /> } />
        <Route path="/teams/:city" element={ <Teams /> } />
        <Route path="/players" element={ <Players /> } />
      </Routes>
    </div>
  );
}

export default App;
