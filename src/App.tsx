import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import React from 'react';
import {useAuthContext} from "@asgardeo/auth-react";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";

function App() {
    const {state} = useAuthContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {state &&
                    <>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/info" element={<InfoPage/>}/>
                    </>
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;
