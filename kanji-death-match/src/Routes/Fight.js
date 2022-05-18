import { useState, useEffect } from 'react';

const Fight = (props) => {
console.log(props)
    //Assign battle stats to each kanji based on data

    let p1 = props.fighters[0];
    let p2 = props.fighters[1];
    const [player1Hp, setPlayer1Hp] = useState();
    const [player2Hp, setPlayer2Hp] = useState()
    // const [fight, setFight] = useState([]);

    p1.attackPower = p1.kanji.strokes.count * 5;
    p2.attackPower = p2.kanji.strokes.count * 5;
    let gameClock;
    console.log(p1.attackPower, p2.attackPower);
    
    const handleBattle = () => {
        console.log("here");
        let round = 1
        let rngAttack;
        let p1HpCopy;
        let p2HpCopy;
        gameClock = setInterval(() => {
            if (round === 1) {
                console.log(p1.kanji.strokes.count * p1.radical.strokes + 2000)
                console.log(p2.kanji.strokes.count * p2.radical.strokes + 2000)
                setPlayer1Hp(p1.kanji.strokes.count * p1.radical.strokes + 2000);
                setPlayer2Hp(p2.kanji.strokes.count * p2.radical.strokes + 2000);
                p1HpCopy = player1Hp;
                p2HpCopy = player2Hp;
            }
            console.log("HP status:", p1HpCopy, p2HpCopy)
            if (player1Hp > 0 && player2Hp > 0) {
                switch (round % 2 === 0) {
                    case true :
                        rngAttack = Math.floor(Math.random() * p1.attackPower);
                        p2HpCopy -= rngAttack;
                        setPlayer2Hp(p2HpCopy);
                        console.log(`p1 attacks for: ${rngAttack} damage!`, player2Hp);
                        break;
                    case false :
                        rngAttack = Math.floor(Math.random() * p2.attackPower);
                        p1HpCopy -= rngAttack;
                        setPlayer1Hp(p1HpCopy);
                        console.log(`p2 attacks for: ${rngAttack} damage!`, player1Hp);
                        break;
                }
                round++;
                console.log(round)
            } else {
                clearInterval(gameClock);
                // player1Hp <= 0 ? setPlayer1Hp(0) : setPlayer2Hp(0)
            }
        }, 3000)
    }

    // setTimeout(handleBattle, 3000)
     
    return (
        <div className="Dojo">
            <header className="battleStats">
                <div className="player-1-hp"><h1>{player1Hp}</h1></div>
                <button className="start" onClick={() => setTimeout(handleBattle, 1000)}>FIGHT!!!</button>
                <div className="player-2-hp"><h1>{player2Hp}</h1></div>
            </header>
            <section className="battle-stats">
                <div></div>
                <div></div>
            </section>
        </div>
    )
}

export default Fight;