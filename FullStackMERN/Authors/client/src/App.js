import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import AllAuthors from "./components/AllAuthors";
import { Routes, Route } from 'react-router-dom';
import AddAuthor from "./components/AddAuthor";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllAuthors/>}/>
        <Route path="/author/new" element={<AddAuthor/>}/>
        <Route path="/author/edit/:id" element={<EditAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
