import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Routes/Home';
import KanjiMain from './Routes/KanjiMain'

import './App.css';

function App() {

  const exitIntro = () => {
    document.querySelector(".intro-overlay").classList.toggle("intro-overlay")
  }
  return (
    <div className="App intro-overlay">
      <h1 className="intro-1">KANJI</h1>
      <h1 className="intro-2">DEATHMATCH</h1>
      <h1 className="intro-3">漢字のデスマッチ</h1>
      <Link to="/home"><button onClick={exitIntro}className="intro-4">始まろう！</button></Link>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="/home/kanji" element={<KanjiMain/>}/>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
