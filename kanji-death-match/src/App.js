import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import About from './Routes/About';
import KanjiDetails from './Components/KanjiDetails';
import Error from './Components/Error';
import Fight from './Routes/Fight';
import './App.css';

function App() {

  return (
    <div className="App ">
          <Routes>
            <Route index element={<Intro/>}/>
            <Route path="/home/*" element={<Home/>}>
              <Route path=":kanji" element={<KanjiDetails/>}/>
              {/* <Route path=":kanji" element={<KanjiDetails/>} /> */}
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/fight" element={<Fight/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
