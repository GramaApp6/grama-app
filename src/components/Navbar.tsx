import React, {useEffect} from 'react';
import {useAuthContext} from "@asgardeo/auth-react";

function Navbar() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const {signIn, signOut, state} = useAuthContext();

    useEffect(() => {
        setLoggedIn(state.isAuthenticated);
    }, [state]);

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b>Grama</b>Check</a>
                <div className="d-flex">
                    {loggedIn ?
                        <button className="btn btn-outline-success me-2 hide-on-mobile" onClick={() => signOut()}>
                            Logout
                        </button>
                        :
                        <button className="btn btn-outline-success me-2 hide-on-mobile" onClick={() => signIn()}>
                            Login / Sign Up
                        </button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;