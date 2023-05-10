import React from 'react';
import Navbar from "../components/Navbar";
import {useAuthContext} from "@asgardeo/auth-react";
import logo from "../assets/logo.svg";

function LandingPage() {
    const {signIn, state} = useAuthContext();


    const handleSignup = () => {
        console.log("Signup");
    }

    return (<>
        <Navbar/>
        <div className="container bs-primary-bg-subtle justify-content-center align-items-center text-center mt-5">
            <div className="landing-logo">
                <img src={logo} alt="logo" className="img-fluid"/>
            </div>
            <h1>Grama Check</h1>
            <p>Get your documents online</p>
            {state.isAuthenticated &&
                <a className="btn btn-outline-success mb-3 ps-5 pe-5 hide-on-mobile" href="/home">
                    Start <i className="fa fa-long-arrow-right"></i>
                </a>}
            <div className="show-only-on-mobile">
                {
                    state.isAuthenticated ?
                        <div className="d-flex flex-column p-3">
                            <a className="btn btn-outline-success mb-3 ps-5 pe-5" href="/home">
                                Start <i className="fa fa-long-arrow-right"></i>
                            </a>
                            <button className="btn btn-outline-success mb-3" onClick={() => signIn()}>Logout</button>
                        </div>
                        :
                        <div className="d-flex flex-column p-3">
                            <button className="btn btn-outline-success mb-3" onClick={() => signIn()}>Login</button>
                            <button className="btn btn-outline-success mb-3" onClick={handleSignup}>Signup</button>
                        </div>
                }

            </div>
        </div>
    </>);
}

export default LandingPage;