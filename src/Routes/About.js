import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

const About = (props) => {
    console.log(props)
    return (
        <div className="About">
            <h1 style={{ color: "red", fontSize: "3em" }}>About Kanji Deathmatch:</h1>
            <h2>KDM is Adrian's second project for the General Assembly
                Software Engineering Immersive program. Kanji Deathmatch is the
                marraige of two of Adrian's favorite things: language acquisition, and
                sensless violence. It was created using the
                React javascript framework.
            </h2>
            <h1 style={{ color: "red", fontSize: "3em" }}>About Adrian:</h1>
            <h2>As you've undoubtedly guessed, Adrian is completely out of his mind.
                Two decades as a chef will do that to you. Adrian likes Tikka Masala, Mexico, and
                obscure electronic music. You can learn more about the stuff he makes at:

                <a href="https://www.something.something.com" > Adrian's GitHub</a>
            </h2>
            <Link to="/home"><button>Return Home</button></Link>
        </div>
    )
}

export default About;