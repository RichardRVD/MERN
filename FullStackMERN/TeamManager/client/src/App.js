import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import AddPlayer from "./components/AddPlayer";
import PlayerStatus from "./components/PlayerStatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<AllPlayers/>}/>
        <Route path={"/player/new"} element={<AddPlayer/>}/>
        <Route path={"/status/game/1"} element={<PlayerStatus/>}/>
      </Routes>
    </div>
  );
}

export default App;
