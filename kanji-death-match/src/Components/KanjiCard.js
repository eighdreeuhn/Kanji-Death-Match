

const KanjiCard = (props) => {
    console.log(props)
    return (
        <div className="kanji-card">
            <h1>{props.kanji.kanji.character}</h1>
            <h2>{props.kanji.kanji.radical}</h2>
        </div>
    )
}

export default KanjiCard;