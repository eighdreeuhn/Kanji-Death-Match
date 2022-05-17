const KanjiDetails = (props) => {
    
    console.log(props.kanji[0].kanji.video.mp4);

    return(
        <section>
            <div className="kanji-details">
                <h4>English meaning: {props.kanji[0].kanji.meaning.english}</h4>
                <p>Kunyomi reading: {props.kanji[0].kanji.kunyomi.hiragana}</p>
                <video className="strokeVideo" autoPlay onLoad={props.onLoad} name="media">
                    <source src={props.kanji[0].kanji.video.mp4} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default KanjiDetails;