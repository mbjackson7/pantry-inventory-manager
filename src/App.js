import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import React from 'react';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;