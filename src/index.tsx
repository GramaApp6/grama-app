import React from 'react';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import {createRoot} from "react-dom/client";

const authConfig: AuthReactConfig = {
    baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
    clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
    signInRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_IN_REDIRECT_URL,
    signOutRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL,
    scope: [ "openid","profile" ]
}

createRoot(document.getElementById("root")).render((<AuthProvider config={authConfig}><App/></AuthProvider>));
