import { Link } from "react-router-dom";
import sensei_21145 from "./sensei_21145.mp3"

const Intro = () => {

    const buttonHover = (e) => {
        e.target.innerText = "始ろう";
        document.getElementsByClassName("intro-audio")[0].volume = 0.5;
        document.getElementsByClassName("intro-audio")[0].play();
    }

    return (

        <div className="Intro-overlay">
            <h1 className="intro-1">KANJI</h1>
            <h1 className="intro-2">DEATHMATCH</h1>
            <h1 className="intro-3">漢字のデスマッチ</h1>
            <Link onMouseOver={buttonHover} to="/home"><button className="intro-4">begin</button></Link>
            <audio loop className="intro-audio">
                <source volume={.2} src={sensei_21145} type="audio/mpeg" />
            </audio>
        </div>
    )

}

export default Intro;