import { Routes, Route, Link, Navigate } from "react-router-dom";

const Intro = () => {

    return(
        <div className="intro-overlay">
        <h1 className="intro-1">KANJI</h1>
        <h1 className="intro-2">DEATHMATCH</h1>
        <h1 className="intro-3">漢字のデスマッチ</h1>
        <Link to="/home"><button className="intro-4">始まろう！</button></Link>
      </div>
    )
}

export default Intro;