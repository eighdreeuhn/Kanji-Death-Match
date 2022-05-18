import { useState } from 'react';
import Header from '../Components/Header';

const Fight = (props) => {

    //Assign battle stats to each kanji based on data
    let p1 = props.fighters[0];
    let p2 = props.fighters[1];
    p1.hp = (p1.kanji.strokes.count * p1.radical.strokes) ** 2;
    p2.hp = (p2.kanji.strokes.count * p2.radical.strokes) ** 2;
    p1.attackPower = p1.hp / 100;
    p2.attackPower = p2.hp / 100;
    let gameClock;
    let round = 1;
    console.log(p1.attackPower, p2.attackPower);

    const handleBattle = () => {
        gameClock = setInterval(() => {
            switch (round % 2 === 0) {
                case true :
                    console.log("p1");
                    break;
                case false :
                    console.log("p2");
                    break;
            }
            round++;
            console.log(round)
        }, 1000)
    }

    setTimeout(handleBattle, 3000)
     
    return (
        <div className="Dojo">
            <headeer className="battleStats">
                <div className="player-1-hp"><h1>{p1.hp}</h1></div>
                <div className="logo"></div>
                <div className="player-2-hp"><h1>{p2.hp}</h1></div>
            </headeer>
            <section className="battle-stats">
                <div></div>
                <div></div>
            </section>
        </div>
    )
}

export default Fight;