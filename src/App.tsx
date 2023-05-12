import React, {useEffect, useState} from "react";
import {BrowserRouter, redirect, Route, Routes} from "react-router-dom";
import {BasicUserInfo, useAuthContext} from "@asgardeo/auth-react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import SentRequestsPage from "./pages/SentRequestsPage.tsx";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage.tsx";
import Page500 from "./pages/Page500.tsx";
import {UserInfo} from "./types";
import AdminPage from "./pages/AdminPage";
import UserDataPage from "./pages/UserDataPage";
import AdminHomePage from "./pages/AdminHomePage";

function App() {
    const {state, getBasicUserInfo} = useAuthContext();
    const [basicUserInfo, setBasicUserInfo] =
        useState<UserInfo>({email: "", name: "", picture: "", role: ""});

    const getRole = (basicUserInfo: BasicUserInfo) =>{
        if (basicUserInfo.groups && basicUserInfo.groups.includes("admin")) {
            return "admin";
        }
        return "user";
    }

    useEffect(() => {
        if (state.isAuthenticated) {
            getBasicUserInfo()
                .then((response: BasicUserInfo) => {
                    const userInfo: UserInfo = {
                        email: response.email === undefined ? "N/A" : response.email,
                        name: response.name,
                        picture: response.picture,
                        role: getRole(response)
                    };
                    setBasicUserInfo(userInfo);
                    console.log(userInfo);
                })
                .catch((error) => {
                    console.error(error);
                    redirect("/error");
                });
        }
    }, [state]);

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
                {state.isAuthenticated ? (
                    <>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/request" element={<RequestPage/>}/>
                        <Route path="/requests" element={<SentRequestsPage/>}/>
                        <Route path="/profile" element={<ProfilePage userInfo={basicUserInfo}/>}/>
                        <Route path="/admin" element={<AdminPage/>}/>
                        <Route path="/userdata" element={<UserDataPage/>}/>
                        <Route path="/adminhome" element={<AdminHomePage/>}/>
                    </>
                ) : (
                    <Route path="/" element={<LandingPage/>}/>
                )}
                <Route path="/error" element={<Page500/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;