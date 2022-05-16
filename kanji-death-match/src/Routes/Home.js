import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiCard from '../Components/KanjiCard';
import KanjiMain from "./KanjiMain";
import About from './About';


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
            let kanjiCopy = [...kanji];
            data.forEach((entry) => {
                kanjiCopy.push(entry)});
            setKanji(kanjiCopy);
            setSearchInfo("")
        })
        .catch(err => console.error(err));  
    }

        const kanjiCards = kanji.map((symbol, index) => {
            if (kanji) {
                return(
                    <KanjiCard kanji={symbol} key={index}/>
                )
            } else {
                return (
                    <div className="kanji-card">
                        <h1>Loading...</h1>
                    </div>
                )
            }
            })

    return (
        <div className="Home">
            <header>
                <h1>Kanji Deathmatch</h1>
                <nav>
                    <ul>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/KanjiMain"><li>Main</li></Link>
                    </ul>
                </nav>
            </header>
              <main className="main-display">
                  <div className="search-form">
                    <form onSubmit={handleSubmit} >
                        <input onChange={handleChange} value={searchInfo} type="text" placeholder="Type some stuff..."></input>
                        <button type="submit">Kanji-fy!</button>
                    </form>
                </div>
                <div className="kanjiCardDisplay">
                {kanjiCards}
                </div>
            </main>
                <Routes>
                    <Route path="/kanji" element={<KanjiMain />}/>
                    <Route path="/about" element={<About/>}/> 
                </Routes>
        </div>
    )
}

export default Home;