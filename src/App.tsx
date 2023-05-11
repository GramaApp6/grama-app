import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useAuthContext} from "@asgardeo/auth-react";
import ProfilePage from './pages/ProfilePage';
import './App.css';

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import SentRequestsPage from "./pages/SentRequestsPage.tsx";
import Page404 from "./pages/Page404";

function App() {
    const {state} = useAuthContext();
    if (state.isLoading) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <h1 className="text-center text-secondary loading">Loading</h1>
            </div>
        );
    }
    return (
        <BrowserRouter>
            <Routes>
                {state.isAuthenticated ?
                    <>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/request" element={<RequestPage/>}/>
                        <Route path="/requests" element={<SentRequestsPage/>}/>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </>
                    :
                    <Route path="/" element={<LandingPage/>}/>
                }
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
