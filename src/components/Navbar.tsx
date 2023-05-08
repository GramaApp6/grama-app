import React, {useEffect} from 'react';

interface NavbarProps {
    handleLogin: () => void;
    handleSignup: () => void;
}

function Navbar(props: NavbarProps) {
    const [loggedIn, setLoggedIn] = React.useState(false);

    useEffect(() => {
        // TODO: Check if user is logged in
    }, [loggedIn]);

    const handleLogout = () => {
        // TODO: Logout user
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
