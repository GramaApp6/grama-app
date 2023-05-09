import React from 'react';
import logo from '../logo.svg';
import Navbar from "../components/Navbar";
// @ts-ignore
import Logo from "../logo.svg";

function LandingPage() {
    const handleLogin = () => {
        console.log("Login");
    }

    const handleSignup = () => {
        console.log("Signup");
    }

    return (<>
        <Navbar handleLogin={handleLogin} handleSignup={handleSignup}/>
        <div className="container bs-primary-bg-subtle justify-content-center align-items-center text-center mt-5">
            <div className="landing-logo">
                <Logo/>
            </div>
            <h1>Grama Check</h1>
            <p>Get your documents online</p>
            <div className="show-only-on-mobile">
                <div className="d-flex flex-column p-3">
                    <button className="btn btn-outline-success mb-3" onClick={handleLogin}>Login</button>
                    <button className="btn btn-outline-success mb-3" onClick={handleSignup}>Signup</button>
                </div>
            </div>
        </div>
    </>);
}

export default LandingPage;