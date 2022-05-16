

const KanjiCard = (props) => {
    console.log(props)
    return (
        <div className="kanji-card" onClick={props.onClick}>
            <h1>{props.kanji.kanji.character}</h1>
        </div>
    )
}

export default KanjiCard;