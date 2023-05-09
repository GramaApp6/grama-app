import React from 'react';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import {render} from "react-dom";

const authConfig:AuthReactConfig = {
    baseUrl: "",
    clientID: "",
    signInRedirectURL: "https://localhost:3000",
    signOutRedirectURL: "https://localhost:3000"
}

render((<AuthProvider config={authConfig}><App /></AuthProvider>), document.getElementById("root"));
