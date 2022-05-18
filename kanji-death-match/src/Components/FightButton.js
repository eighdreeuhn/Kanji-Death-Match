import { Link } from 'react-router-dom';

const FightButton = (props) => {
    console.log(props)
    return(
        // <Link to="/fight">
            <button className="fight-button">FIGHT!!!</button>
        // </Link>
    )
}

export default FightButton;