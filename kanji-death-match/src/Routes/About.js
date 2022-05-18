import Home from "./Home";
import { Routes, Route, Link} from "react-router-dom";

const About = () => {
    return (
        <div className="About">
            <h1 style={{color: "red", fontSize: "3em"}}>About Kanji Deathmatch:</h1>
            <h2>This app is Adrian's second project for the General Assembly
                 Software Engineering Immersive program. Kanji Deathmatch is the
                 marraige of two of Adrian's favorite things: language acquisition, and
                 sensless violence. It was created using the 
                 React javascript framework.
            </h2>
            <Link to="/home"><button>Return Home</button></Link>
        </div>
    )
}

export default About;