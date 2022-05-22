import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header onClick={props.onClick}>
            <Link to="/"><h1>漢字死交戦</h1></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/home" onClick={props.onClick}><p>Home</p></Link>
        </header>
    )
}

export default Header;