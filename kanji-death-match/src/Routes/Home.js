import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiMain from "./KanjiMain";


const Home = () => {

    const [kanji, setKanji] = useState([]);
    const [searchInfo, setSearchInfo] = useState("")

    const handleChange = () => {
        console.log("input");
    }

    const handleSubmit = () => {
        console.log("submit");
    }

    return (
        <div className="Home">
            <header>
                <nav>
                    <h1>Kanji Deathmatch</h1>
                    <ul>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
            <div>
               <form onSubmit={handleSubmit}>
                   <label></label>
                   <input onChange={handleChange} type="text" placeholder="Type some stuff..."></input>
                   <button >Kanji-fy!</button>
               </form>
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