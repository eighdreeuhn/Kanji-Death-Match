const KanjiDetails = (props) => {
    
    console.log(props.kanji[0].kanji.video.mp4);

    return(
        <section className="kanji-details">
            <div>
                <h4>English meaning: {props.kanji[0].kanji.meaning.english}</h4>
                <p>Kunyomi reading: {props.kanji[0].kanji.kunyomi.hiragana}</p>
                <p>Onyomi reading: {props.kanji[0].kanji.onyomi.katakana}</p>
                <p>Stroke count: {props.kanji[0].kanji.strokes.count}</p>
                <p>Radical: {props.kanji[0].radical.character}</p>
                <p>Radical meaning: {props.kanji[0].radical.meaning.english}</p>
                <button className="button-1" onClick={props.onClick}>Set Player 1</button>
                <button className="button-2" onClick={props.onClick}>Set Player 2</button>
            </div>
            <video className="strokeVideo" autoPlay name="media">
                <source src={props.kanji[0].kanji.video.mp4 ? props.kanji[0].kanji.video.mp4 : null} type="video/mp4"/>
            </video>
        </section>
    )
}

export default KanjiDetails;