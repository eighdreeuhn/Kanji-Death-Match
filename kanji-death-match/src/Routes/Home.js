import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiMain from "./KanjiMain";


const Home = () => {

    const [kanji, setKanji] = useState([]);
    const [searchInfo, setSearchInfo] = useState("")

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com',
          'X-RapidAPI-Key': '58f5ec4060msh8e547825688a507p19b380jsn8306895f50db'
        }
      };

    const handleChange = (e) => {
        console.log("input");
        setSearchInfo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=${searchInfo}`, options)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setKanji(data);
            setSearchInfo("")
        })
        .catch(err => console.error(err));  
    }

    return (
        <div className="Home">
            <header>
                <h1>Kanji Deathmatch</h1>
                <nav>
                    <ul>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
            <div className="search-form">
               <form onSubmit={handleSubmit}>
                   <label></label>
                   <input onChange={handleChange} value={searchInfo} type="text" placeholder="Type some stuff..."></input>
                   <button type="submit">Kanji-fy!</button>
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