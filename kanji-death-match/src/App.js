import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Routes/Home';
import KanjiMain from './Routes/KanjiMain'

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/home"><h1>HOME</h1></Link>
    <div>
      <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="/home/kanji" element={<KanjiMain/>}/>
            </Route>
        </Routes>
    </div>
    </div>
  );
}

export default App;
