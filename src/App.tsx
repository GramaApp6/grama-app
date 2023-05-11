import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import SentRequestsPage from "./pages/SentRequestsPage.tsx";
import Page404 from "./pages/Page404";

function App() {
  const { state, getBasicUserInfo } = useAuthContext();
  if (state.isLoading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h1 className="text-center text-secondary loading">Loading</h1>
      </div>
    );
  }

  const [display_name, setDisplayName] = useState(String);
  const [picture, setPicture] = useState(String);
  const [full_name, setFullName] = useState(String);
  const [role, setRole] = useState(String);
  const [email, setEmail] = useState(String);

  useEffect(() => {
    getBasicUserInfo()
      .then((response : Record<string, string>) => {
        setDisplayName(response["displayName"]);
        setPicture(response["picture"]);
        setFullName(response["name"]);
        setRole(response["groups"]);
        setEmail(response["email"]);

        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {state.isAuthenticated ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/requests" element={<SentRequestsPage />} />
            <Route path="/profile" element={<ProfilePage email={email} role={role} full_name={full_name} picture={picture} display_name={display_name} />} />

          </>
        ) : (
          <Route path="/" element={<LandingPage />} />
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
