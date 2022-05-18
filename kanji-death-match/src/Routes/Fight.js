import { useState, useEffect } from 'react';

const Fight = (props) => {

    console.log("Props: ", props)
    //Assign battle stats to each kanji based on data
    let p1 = props.fighters[0];
    let p2 = props.fighters[1];
    const [fight, setFight] = useState([])
    const [player1Hp, setPlayer1Hp] = useState();
    const [player2Hp, setPlayer2Hp] = useState()
    p1.attackPower = p1.kanji.strokes.count * 5;
    p2.attackPower = p2.kanji.strokes.count * 5;
    console.log(p1.attackPower, p2.attackPower);

    useEffect(() => {
        setFight([true])
          setPlayer1Hp(p1.kanji.strokes.count * p1.radical.strokes + 200);
          setPlayer2Hp(p2.kanji.strokes.count * p2.radical.strokes + 200);
      }, [])
    
    const handleWin = () => {
        console.log("Win");
    }
    
    const handleBattle = () => {
        console.log("round 1")
        let round = 1
        console.log(player1Hp, player2Hp)
        let p1HpCopy = player1Hp;
        let p2HpCopy = player2Hp;
        let interval = setInterval(() => {
          if (p1HpCopy > 0 && p2HpCopy > 0) {
            const rngAttack = Math.floor(Math.random() * p1.attackPower)
            round % 2 === 0 ? p1HpCopy -= rngAttack : p2HpCopy -= rngAttack;
            p1HpCopy < 0 ? setPlayer1Hp(0) : setPlayer1Hp(p1HpCopy);
            p2HpCopy < 0 ? setPlayer2Hp(0) : setPlayer2Hp(p2HpCopy);
            round++
            } else {
                clearInterval(interval);
                if (p1HpCopy === 0) {
                    handleWin(1);
                } else {
                    handleWin(2);
                }
            }
        }, 1000);
    }

    return (
        <div className="Dojo">
            <header className="battleStats">
                <div className="player-1-hp"><h1>{player1Hp}</h1></div>
                <button className="start" onClick={() => setTimeout(handleBattle, 1000)}>FIGHT!!!</button>
                <div className="player-2-hp"><h1>{player2Hp}</h1></div>
            </header>
            <section className="stage">
                <div className="kanji-1">
                    <img src={p1.kanji.video.poster} />
                </div>
                <div className="kanji-2">
                    <img src={p2.kanji.video.poster}/>
                </div>
            </section>
        </div>
    )
}

export default Fight;