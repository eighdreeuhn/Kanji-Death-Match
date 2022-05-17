import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import About from './Routes/About';
import KanjiDetails from './Components/KanjiDetails';
import './App.css';

function App() {

  return (
    <div className="App ">
          <Routes>
            <Route index element={<Intro/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/home/kanji" element={<KanjiDetails/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
