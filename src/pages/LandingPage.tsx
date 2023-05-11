import React from 'react';
import {useAuthContext} from "@asgardeo/auth-react";

import Navbar from "../components/Navbar";
import logo from "../assets/logo.svg";

function LandingPage() {
    const {signIn} = useAuthContext();

    return (<>
        <Navbar/>
        <div className="container bs-primary-bg-subtle justify-content-center align-items-center text-center mt-5">
            <div className="landing-logo">
                <img src={logo} alt="logo" className="img-fluid"/>
            </div>
            <h1>Grama Check</h1>
            <p>Get your documents online</p>
            <div className="d-flex flex-column p-3 show-only-on-mobile">
                <button className="btn btn-outline-success mb-3" onClick={() => signIn()}>
                    Login / Sign Up
                </button>
            </div>
        </div>
    </>);
}

export default LandingPage;