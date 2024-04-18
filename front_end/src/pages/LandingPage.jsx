import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Welcom to Stock Saver!</h1>
            <Link type="button" className="btn btn-primary" to="/signin">Sign In</Link>
            <Link type="button" className="btn btn-primary" to="/signup">Sign Up</Link>
        </div>
    )
}

export default LandingPage;