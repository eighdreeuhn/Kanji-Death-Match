

const KanjiCard = (props) => {
    console.log(props)
    return (
        <div onClick={props.onClick} className="kanji-card">{props.kanji.kanji.character}
        </div>
    )
}

export default KanjiCard;