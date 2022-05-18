import { Link } from 'react-router-dom';

const FightButton = () => {
    return(
        <Link to="/fight">
            <button className="fight-button">FIGHT!!L</button>
        </Link>
    )
}

export default FightButton;