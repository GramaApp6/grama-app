import React, {useEffect, useState} from "react";
import {BrowserRouter, redirect, Route, Routes, useParams} from "react-router-dom";
import {BasicUserInfo, useAuthContext} from "@asgardeo/auth-react";
import "./App.css";

import {UserInfo} from "./types";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import SentRequestsPage from "./pages/SentRequestsPage";
import Page404 from "./pages/Page404";
import ProfilePage from "./pages/ProfilePage";
import Page500 from "./pages/Page500";
import Requests from "./pages/Requests.tsx";
import RequestInfo from "./pages/RequestInfo.tsx";
import AdminHomePage from "./pages/AdminHomePage";
import {ToastContainer} from "react-toastify";
import Loading from "./components/Loading.tsx";

function App() {
    const {state, getBasicUserInfo} = useAuthContext();
    const [basicUserInfo, setBasicUserInfo] =
        useState<UserInfo>({email: "", name: "", picture: "", role: ""});

    const getRole = (basicUserInfo: BasicUserInfo) => {
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
                })
                .catch((error) => {
                    console.error(error);
                    redirect("/error");
                });
        }
    }, [state]);

    if (state.isLoading) {
        return (
            <Loading/>
        );
    }
    return (<>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                theme="colored"
                newestOnTop
                closeOnClick
                rtl={false}
                draggable={false}
            />
            <BrowserRouter>
                <Routes>
                    {state.isAuthenticated ? (
                        basicUserInfo.role === "admin" ? (
                            <>
                                <Route path="/" element={<AdminHomePage/>}/>
                                <Route path="/requests" element={<Requests email={basicUserInfo.email}/>}/>
                                <Route path="/request/:requestId" element={<RequestInfo/>}/>
                                <Route path="/profile" element={<ProfilePage userInfo={basicUserInfo}/>}/>
                            </>
                        ) : (
                            <>
                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/request" element={<RequestPage/>}/>
                                <Route path="/requests" element={<SentRequestsPage/>}/>
                                <Route path="/profile" element={<ProfilePage userInfo={basicUserInfo}/>}/>
                            </>
                        )
                    ) : (
                        <Route path="/" element={<LandingPage/>}/>
                    )}
                    <Route path="/error" element={<Page500/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;