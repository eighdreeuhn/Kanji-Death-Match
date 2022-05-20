import { useState, useEffect } from 'react';
import kdm_hitSplat from "./kdm_hitSplat.m4a";
import excellent from "./excellent.m4a"

const Fight = (props) => {

    //Assign battle stats to each kanji based on data
    let p1 = props.fighters[0];
    let p2 = props.fighters[1];
    const [fight, setFight] = useState([])
    const [player1Hp, setPlayer1Hp] = useState();
    const [player2Hp, setPlayer2Hp] = useState()
    p1.attackPower = p1.kanji.strokes.count * 10;
    p2.attackPower = p2.kanji.strokes.count * 10;

    useEffect(() => {
        setFight([true])
        setPlayer1Hp(p1.kanji.strokes.count ** 2 * p1.radical.strokes);
        setPlayer2Hp(p2.kanji.strokes.count ** 2 * p2.radical.strokes);
    }, [])

    //Executes when one fighter's hp reaches 0
    const handleWin = (winner) => {
        document.getElementsByClassName("win-audio")[0].play()
        const kanji1 = document.getElementsByClassName("kanji-1")[0];
        const kanji2 = document.getElementsByClassName("kanji-2")[0];
        switch (winner) {
            case 1:
                kanji1.classList.toggle("winner")
                kanji2.classList.toggle("loser")
                document.getElementsByClassName("kanji-1-display")[0].innerText = `${p1.kanji.character} WINS! KANJI-FATALITY!`

                break;
            case 2:
                kanji2.classList.toggle("winner")
                kanji1.classList.toggle("loser")
                document.getElementsByClassName("kanji-2-display")[0].innerText = `${p2.kanji.character} WINS! KANJI-FATALITY!`
                break;
        }
    }

    const handleBattle = () => {
        const kanji1 = document.getElementsByClassName("kanji-1")[0];
        const kanji2 = document.getElementsByClassName("kanji-2")[0];
        let round = 1
        let p1HpCopy = player1Hp;
        let p2HpCopy = player2Hp;
        let interval = setInterval(() => {
            if (p1HpCopy > 0 && p2HpCopy > 0) {
                const rngAttack = Math.floor(Math.random() * p1.attackPower);
                kanji1.className = "kanji-1";
                kanji2.className = "kanji-2";
                switch (round % 2 === 0) {
                    case true:
                        p1HpCopy -= rngAttack;
                        kanji2.classList.toggle("attack");
                        kanji1.classList.toggle("defend");
                        document.getElementsByClassName("kanji-1-display")[0].classList.toggle("hit");
                        setTimeout(() => document.getElementsByClassName("kanji-1-display")[0].classList.toggle("hit"), 500);
                        setTimeout(() => document.getElementsByClassName("kanji-1-display")[0].innerText = "", 500);
                        if (rngAttack === 0) {
                            document.getElementsByClassName("kanji-1-display")[0].innerText = "Miss!"
                        } else {
                            document.getElementsByClassName("kanji-1-display")[0].innerText = rngAttack;
                        }
                        break;
                    case false:
                        p2HpCopy -= rngAttack;
                        kanji1.classList.toggle("attack");
                        kanji2.classList.toggle("defend");
                        document.getElementsByClassName("kanji-2-display")[0].classList.toggle("hit");
                        setTimeout(() => document.getElementsByClassName("kanji-2-display")[0].innerText = "", 500);
                        setTimeout(() => document.getElementsByClassName("kanji-2-display")[0].classList.toggle("hit"), 500);
                        if (rngAttack === 0) {
                            document.getElementsByClassName("kanji-2-display")[0].innerText = "Miss!"
                        } else {
                            document.getElementsByClassName("kanji-2-display")[0].innerText = rngAttack;
                        }
                        break;
                }
                p1HpCopy < 0 ? setPlayer1Hp(0) : setPlayer1Hp(p1HpCopy);
                p2HpCopy < 0 ? setPlayer2Hp(0) : setPlayer2Hp(p2HpCopy);
                round++
                document.getElementsByClassName("fight-audio")[0].play()
            } else {
                clearInterval(interval);
                document.getElementsByClassName("kanji-1-display")[0].innerText = "";
                document.getElementsByClassName("kanji-2-display")[0].innerText = "";
                if (p1HpCopy > 0) {
                    handleWin(1);
                } else {
                    handleWin(2);
                }
            }
        }, 2000);
    }

    const battleStart = () => {
        let i = 4;
        setTimeout(handleBattle, 5000);
        let timer = setInterval(() => {
            const counter = document.getElementsByClassName("countdown")[0];
            i === 4 ? counter.innerText = "Ready?" :
                i > 0 ? counter.innerText = i :
                    i === 0 ? counter.innerText = "Fight!!!" :
                        clearInterval(timer);
            i--
        }, 1000)
    }

    // props.clearKanji([])

    return (
        <div className="Dojo">
            <header className="battleStats">
                <div className="player-1-hp"><h1>{player1Hp}</h1></div>
                <div className="countdown" onClick={battleStart}>Click to Begin</div>
                <div className="player-2-hp"><h1>{player2Hp}</h1></div>
            </header>
            <section className="stage">
                <div className="kanji-1-display">

                </div>
                <div className="kanji-1">
                    <img src={p1.kanji.video.poster} />
                </div>
                <div className="kanji-2-display">

                </div>
                <div className="kanji-2">
                    <img src={p2.kanji.video.poster} alt="kanji" />
                </div>
            </section>
            <audio className="fight-audio">
                <source src={kdm_hitSplat} type="audio/mpeg" />
            </audio>
            <audio className="win-audio">
                <source src={excellent} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Fight;