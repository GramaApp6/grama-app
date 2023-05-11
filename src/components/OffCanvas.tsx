import React from 'react';
import {useAuthContext} from "@asgardeo/auth-react";

function OffCanvas() {
    const {state, signOut} = useAuthContext();
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">{state.displayName}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-center text-center flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
                        </li>
                        <button className="btn btn-outline-success" onClick={()=>signOut()}>Logout</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default OffCanvas;