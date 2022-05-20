const KanjiDetails = (props) => {

    let rngExampleIndex = Math.floor(Math.random() * props.kanji[0].examples.length)

    return (
        <section className="kanji-details">
            <video className="strokeVideo" autoPlay width="125">
                <source src={props.kanji[0].kanji.video.mp4 ? props.kanji[0].kanji.video.mp4 : null} type="video/mp4" />
            </video>
            <div>
                <h4>English meaning: {props.kanji[0].kanji.meaning.english}</h4>
                <p>Kunyomi reading: {props.kanji[0].kanji.kunyomi.hiragana}</p>
                <p>Onyomi reading: {props.kanji[0].kanji.onyomi.katakana}</p>
                <p>Stroke count: {props.kanji[0].kanji.strokes.count}</p>
                <p>Radical: {props.kanji[0].radical.character}</p>
                <p>Radical meaning: {props.kanji[0].radical.meaning.english}</p>
                <p>Useage example: {props.kanji[0].examples[rngExampleIndex].japanese}</p>
                <p>Example meaning: {props.kanji[0].examples[rngExampleIndex].meaning.english}</p>
                <audio className="kanjiAudio" autoPlay>
                    <source src={props.kanji[0].examples[rngExampleIndex].audio.mp3} type="audio/mp3" />
                </audio>
                <button className="button-1" name={props.kanji[0].kanji.character} onClick={props.onClick}>Set Player 1</button>
                <button className="button-2" onClick={props.onClick}>Set Player 2</button>
            </div>
        </section>
    )
}

export default KanjiDetails;