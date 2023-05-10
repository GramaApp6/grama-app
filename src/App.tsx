import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import React from 'react';
import {SecureRoute, useAuthContext} from "@asgardeo/auth-react";
import HomePage from "./pages/HomePage";
import RequestCertificatePage from "./pages/RequestCertificatePage";
import StatusPage from "./pages/StatusPage";

function App() {
    const {signIn, state} = useAuthContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {state.isAuthenticated &&
                    <>
                        <Route path="/home" element={ <HomePage/>}/>
                        <Route path="/request-certificate" element={<RequestCertificatePage/>}/>
                        <Route path="/status" element={<StatusPage/>}/>
                    </>
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;
