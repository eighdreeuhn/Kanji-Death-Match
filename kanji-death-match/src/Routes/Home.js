import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiMain from "./KanjiMain";


const Home = () => {

    return (
        <div className="Home">
            <header>
                <nav>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Link to="/home/kanji">Kanji</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/kanji" element={<KanjiMain />} />
                </Routes>
            </div>
        </div>
    )
}

export default Home;