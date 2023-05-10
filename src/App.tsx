import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import React from 'react';
import {useAuthContext} from "@asgardeo/auth-react";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import StatusPage from "./pages/StatusPage";
import Page404 from "./pages/Page404";

function App() {
    const {state} = useAuthContext();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {state.isAuthenticated &&
                    <>
                        <Route path="/home" element={<HomePage/>}/>
                        <Route path="/request" element={<RequestPage/>}/>
                        <Route path="/status" element={<StatusPage/>}/>
                    </>
                }
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
