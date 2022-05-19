import { Routes, Route, Link, Navigate } from "react-router-dom";

const Intro = () => {

    const buttonHover = (e) => {
        e.target.innerText = "始ろう";
    }

    return(
        
        <div className="Intro-overlay">
            <h1 className="intro-1">KANJI</h1>
            <h1 className="intro-2">DEATHMATCH</h1>
            <h1 className="intro-3">漢字のデスマッチ</h1>
            <Link onMouseOver={buttonHover} to="/home"><button className="intro-4">begin</button></Link>
      </div>
    )

}

export default Intro;