import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcom to Stock Saver!</h1>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default LandingPage;