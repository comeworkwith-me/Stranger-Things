import { Link } from "react-router-dom"

export const BackButton = () => {
    return (
        <Link to="/" className="home-link">
            <button className="cta-button connect-wallet-button">
                BACK
            </button>
        </Link>
    ); 
};