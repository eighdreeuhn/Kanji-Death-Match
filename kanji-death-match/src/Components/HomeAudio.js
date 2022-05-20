import Dpm from ".//Detroit_People_Mover.mp3"


const HomeAudio = (props) => {
    return(
        <audio autoPlay className="intro-audio">
            <source src={Dpm} type="audio/mpeg" />
        </audio>
    )
}

export default HomeAudio;