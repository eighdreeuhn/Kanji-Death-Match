import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Intro from './Components/Intro';
import Home from './Routes/Home';
import About from './Routes/About';
import KanjiMain from './Routes/KanjiMain'
import './App.css';

function App() {

  return (
    <div className="App ">
          <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/home" element={<Home />}>
              <Route path="/home/kanji" element={<KanjiMain/>}/>
              <Route path="/home/about" element={<About/>}/> 
            </Route>
          </Routes>
    </div>
  );
}

export default App;
