const Search = (props) => {
    return (
        <section>
            <div className="greeting">
                <h3>
                    Welcome to Kanji Deathmatch!
                    Enter an English word to get a kanji.
                    Once you have selected your fighters,
                    enter the arena and watch them fight!
                </h3>
            </div>
            {/* <div className="search-form">
                <label>
                    {kanji.length < 10 ? `Build your Kanji Army!` : `Time to fight!`}
                </label>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} value={searchInfo} type="text" placeholder="Type some stuff..."></input>
                    <button type="submit">Kanji-fy!</button>
                </form>
            </div>
            <div className="game-message">
                <h3>Player 1: {player1.kanji ? player1.kanji.character : ""}</h3>
                {player1.kanji && player2.kanji ? <Link to={`${player1.kanji.character}vs${player2.kanji.character}`}><FightButton /></Link> : null}
                <h3>Player 2: {player2.kanji ? player2.kanji.character : ""}</h3>
            </div>
            <div className="kanjiCardDisplay">
                {kanjiCards}
            </div> */}
        </section>
    )
}

export default Search;