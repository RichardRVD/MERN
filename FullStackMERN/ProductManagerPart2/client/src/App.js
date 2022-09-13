import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/products/"/>
        <Route element={<Detail/>} path="/product/:id"/>
      </Routes>
    </div>
  );
}

export default App;
