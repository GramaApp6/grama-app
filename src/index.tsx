import React from 'react';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import {render} from "react-dom";

const authConfig: AuthReactConfig = {
    baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
    clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
    signInRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_IN_REDIRECT_URL,
    signOutRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL,
    scope: ["openid" ,"email" ,"groups" ,"profile"]
}

render((<AuthProvider config={authConfig}><App/></AuthProvider>), document.getElementById("root"));
