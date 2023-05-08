import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import userSession from "./stores/userSession";
import {observer} from "mobx-react-lite";

interface RouteEntry {
    path: string;
    element: React.ReactNode;
}

function App() {
    const [routes, setRoutes] = useState<RouteEntry[]>([]);

    useEffect(() => {
        if (userSession.isLoggedIn) {
            setRoutes([
                //TODO: Add authorized routes here
            ]);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}>
                    <Route index element={<LandingPage/>}/>
                </Route>
                {routes.map((route, index) =>
                    <Route key={index} path={route.path} element={route.element}/>)
                }
            </Routes>
        </BrowserRouter>
    );
}

export default observer(App);
