import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
