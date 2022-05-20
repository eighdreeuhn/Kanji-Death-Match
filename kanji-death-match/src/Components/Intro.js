import { Link } from "react-router-dom";
import Dpm from ".//Detroit_People_Mover.mp3"

const Intro = () => {

    const buttonHover = (e) => {
        e.target.innerText = "始ろう";
        document.getElementsByClassName("intro-audio")[0].play()
    }

    return (

        <div className="Intro-overlay">
            <h1 className="intro-1">KANJI</h1>
            <h1 className="intro-2">DEATHMATCH</h1>
            <h1 className="intro-3">漢字のデスマッチ</h1>
            <Link onMouseOver={buttonHover} to="/home"><button className="intro-4">begin</button></Link>
            <audio loop className="intro-audio">
                <source src={Dpm} type="audio/mpeg" />
            </audio>
        </div>
    )

}

export default Intro;