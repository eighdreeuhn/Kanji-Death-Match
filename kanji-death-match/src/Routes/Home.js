import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiCard from '../Components/KanjiCard';
import KanjiDetails from '../Components/KanjiDetails';
import About from './About';
import Fight from './Fight';

const Home = () => {

    const [kanji, setKanji] = useState([]);
    const [searchInfo, setSearchInfo] = useState("")
    const [selected, setSelected] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com',
            'X-RapidAPI-Key': '58f5ec4060msh8e547825688a507p19b380jsn8306895f50db'
        }
    };

    const handleChange = (e) => {
        setSearchInfo(e.target.value)
    }

    //second call takes the kanji info from the first call and gets the
    //detailed info on the kanji
    const secondFetch = (characters) => {
        console.log(characters);
        let kanjiCopy = [...kanji];
        characters.forEach(entry => {
            fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${entry}`, options)
                .then(res => res.json())
                .then(data => {
                    kanjiCopy.push(data);
                })
        })
        setKanji(kanjiCopy);
        console.log(kanjiCopy)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let kanjiContainer = []
        //First call to the basic search API address gets the first round of data
        fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=${searchInfo}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.forEach((entry) => {
                    kanjiContainer.push(entry.kanji.character)
                });
                setSearchInfo("")
                secondFetch(kanjiContainer);
            })
            .catch(err => console.error(err));
    }

    const handleKanjiClick = (e) => {
        setSelected(kanji.filter(k => k.kanji.character === e.target.innerText));
        console.log(selected)
        let activeKanji = document.getElementsByClassName("zoom-in")[0];
        if (activeKanji) {
            if (e.target === activeKanji) {
                e.target.classList.toggle("zoom-out");
                setTimeout(() => e.target.classList.toggle("zoom-out"), 500);
            } else {
                activeKanji.classList.toggle("zoom-in");
                activeKanji.classList.toggle("zoom-out");
                setTimeout(() => activeKanji.classList.toggle("zoom-out"), 500);
            }
        }
        e.target.classList.toggle("zoom-in");
    }
    const kanjiCards =  kanji.map((symbol, index) => {
            return (
                <Link to={symbol.kanji.character}><KanjiCard kanji={symbol} index={index} onClick={handleKanjiClick} key={index} /></Link>
            )
        })
    

    return (
        <div className="Home">
            <header>
                <Link to="/"><h1>KDM</h1></Link>
                <Link to="/about"><p>About</p></Link>
            </header>
            <main className="main-display">
                <div className="greeting">
                    <h3>
                        Welcome to Kanji Deathmatch!
                        Enter an English word to get a kanji.
                        Once you have selected your fighters,
                        enter the arena and watch them fight!
                    </h3></div>
                <div className="search-form">
                    <form onSubmit={handleSubmit} >
                        <input onChange={handleChange} value={searchInfo} type="text" placeholder="Type some stuff..."></input>
                        <button type="submit">Kanji-fy!</button>
                    </form>
                </div>
                <div className="kanjiCardDisplay">
                    {kanjiCards}
                </div>
                <Routes>
                    <Route path=":kanji" element={<KanjiDetails kanji={selected}/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/fight" element={<Fight/>} />
                </Routes>
            </main>
        </div>
    )
}

export default Home;