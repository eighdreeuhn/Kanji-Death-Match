import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div style={{color: "red", textAlign: "center", marginTop: "25%"}}>
            <h1>四零四　ー　File Not Found</h1>
            <Link to="/"><button>Return To Start Page</button></Link>
        </div>
    )
}

export default Error;