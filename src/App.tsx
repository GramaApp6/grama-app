import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import StatusPage from "./pages/StatusPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/info" element={<InfoPage/>}/>
                <Route path="/status" element={<StatusPage/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
