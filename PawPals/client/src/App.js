import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllPets from "./components/AllPets";
import PetCard from "./components/PetCard";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPets/>}/>
        <Route path="/swipe" element={<PetCard/>}/>
      </Routes>

    </div>
  );
}

export default App;
