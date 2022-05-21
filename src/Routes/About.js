import { Link } from "react-router-dom";

const About = (props) => {
    console.log(props)
    return (
        <div className="About">
            <h1 style={{ color: "rgb(168, 0, 0)", fontSize: "3em" }}>About Kanji Deathmatch:</h1>
            <h2>KDM is Adrian's second project for the General Assembly
                Software Engineering Immersive program. Kanji Deathmatch is the
                marraige of two of Adrian's favorite things: language acquisition, and
                senseless violence. It was created using the "Kanji Alive!" web API and the
                React javascript framework.
            </h2>
            <h1 style={{ color: "rgb(168, 0, 0)", fontSize: "3em" }}>About Adrian:</h1>
            <h2>As you've undoubtedly guessed, Adrian is completely out of his mind.
                Two decades as a chef will do that to you. Adrian likes Tikka Masala, Mexico, and
                obscure electronic music. You can learn more about the stuff he makes at Github.
            </h2>
            <a href="https://github.com/eighdreeuhn" ><img src="https://eighdreeuhn.github.io/GA-SEI-Unit-1-Project/Project-images/github-icon-38988.png" target="blank" alt="Github"/></a><br/><br/>
            <Link to="/home"><button>Return Home</button></Link>
        </div>
    )
}

export default About;