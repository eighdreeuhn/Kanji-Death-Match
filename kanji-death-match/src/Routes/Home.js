import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import KanjiCard from '../Components/KanjiCard';
import KanjiDetails from '../Components/KanjiDetails';
import About from './About';
import Header from '../Components/Header';
import FightButton from '../Components/FightButton';
import Fight from './Fight';


const Home = () => {

    const [kanji, setKanji] = useState([]);
    const [searchInfo, setSearchInfo] = useState("");
    const [selected, setSelected] = useState([]);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);

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
        let kanjiCopy = [...kanji];
        Promise.all(characters.map(entry => {
            return fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${entry}`, options)
                .then(res => res.json())
                .then(data => {
                    kanjiCopy.push(data);
                })
        })).then(() => {
            setKanji(kanjiCopy);
        })
        setSearchInfo("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let kanjiContainer = []
        //First call to the basic search API address gets the first round of data
        fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?kem=${searchInfo}`, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //change to component
                const status = document.getElementsByClassName("status")[0];
                data.length === 0 ? status.innerText = "No such kanji..." : status.innerText = "Kanji located!"
                data.forEach((entry) => {
                    kanjiContainer.push(entry.kanji.character)
                });
                secondFetch(kanjiContainer);
            })
            .catch(err => console.error(err));
    }

    const handleKanjiClick = (e) => {
        let kanjiLink = e.target.parentNode;
        let video = document.getElementsByClassName("strokeVideo");
        let audio = document.getElementsByClassName("kanjiAudio");
        if (!e.target.classList.contains("zoom-in") && audio[0] && video[0]) {
            video[0].load();
            audio[0].load();
            kanjiLink.href = "/home";
        } else {
            kanjiLink.href = `home/${e.target.innerText}`;
        }
        setSelected(kanji.filter(k => k.kanji.character === e.target.innerText));
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

    const handleSetPlayer = (e) => {
        let playerNumber = parseInt(e.target.className.slice(7));
        playerNumber === 1 ? setPlayer1(selected[0]) : setPlayer2(selected[0]);
    }

    const goHome = () => {
        setKanji([]);
        setSelected([]);
        setPlayer1([]);
        setPlayer2([]);
    }

    console.log(kanji)

    let kanjiCards = kanji.map((symbol, index) => {
        if (kanji) {
            return (
                <Link to={`kanji/${symbol.kanji.character}`}><KanjiCard kanji={symbol} index={index} onClick={handleKanjiClick} key={index} /></Link>
            )
        } else {
            return (
                <KanjiCard key={index} >loading...</KanjiCard>
            )
        }
    })

    return (
        <div className="Home">
            <Header onClick={goHome} />
            <main className="main-display">
                <div className="greeting">
                    <h2>Welcome to Kanji Deathmatch!</h2>
                    <h3>
                        Enter an English word to get a kanji.
                        Once you have selected your fighters,
                        enter the arena and watch them fight!
                    </h3>
                </div>
                <div className="search-form">
                    <label>
                        {kanji.length < 10 ? `Build your Kanji Army!` : `Time to fight!`}
                    </label>
                    <form onSubmit={handleSubmit} >
                        <input onChange={handleChange} value={searchInfo} type="text" placeholder="Type some stuff..."></input>
                        <button type="submit">Kanji-fy!</button>
                    </form>
                </div>
                <div className="game-message">
                    <h3>Player 1: {player1.kanji ? player1.kanji.character : ""}</h3>
                    {player1.kanji && player2.kanji ? <Link to={`${player1.kanji.character}vs${player2.kanji.character}`}><FightButton /></Link> : <h3 className="status">...</h3>}
                    <h3>Player 2: {player2.kanji ? player2.kanji.character : ""}</h3>
                </div>
                <div className="kanjiCardDisplay">
                    {kanjiCards}
                </div>
                <Routes>
                    <Route path="/:fight" element={<Fight clearKanji={setKanji} fighters={[player1, player2]} />} />
                    <Route path="/kanji/:kanji" element={<KanjiDetails key={selected} kanji={selected} onClick={handleSetPlayer} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </div>
    )
}

export default Home;