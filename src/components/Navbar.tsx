import React, {useEffect} from 'react';
import userSession from "../stores/userSession";

interface NavbarProps {
    handleLogin: () => void;
    handleSignup: () => void;
}

function Navbar(props: NavbarProps) {
    const [loggedIn, setLoggedIn] = React.useState(false);

    useEffect(() => {
        setLoggedIn(userSession.isLoggedIn);
    }, [loggedIn]);

    const handleLogout = () => {
        userSession.logout();
        setLoggedIn(false);
    };

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b>Grama</b>Check</a>
                <form className="d-flex">
                    {loggedIn ?
                        <button className="btn btn-outline-success me-2" onClick={handleLogout}>Logout</button>
                        :
                        <div className="hide-on-mobile">
                            <button className="btn btn-outline-success me-2" onClick={props.handleLogin}>Login</button>
                            <button className="btn btn-outline-success me-2" onClick={props.handleSignup}>
                                Signup
                            </button>
                        </div>
                    }
                </form>
            </div>
        </nav>
    );
}

export default Navbar;