import React from 'react';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

// @ts-ignore
const baseUrl = process.env.ASGARDEO_BASE_URL;
// @ts-ignore
const clientID = process.env.ASGARDEO_CLIENT_ID;
// @ts-ignore
const signInRedirectURL = process.env.ASGARDEO_SIGN_IN_REDIRECT_URL;
// @ts-ignore
const signOutRedirectURL = process.env.ASGARDEO_SIGN_OUT_REDIRECT_URL;

const authConfig: AuthReactConfig = {
    baseUrl: baseUrl,
    clientID: clientID,
    signInRedirectURL: signInRedirectURL,
    signOutRedirectURL: signOutRedirectURL,
    scope: [ "openid","profile" ]
}

render((<AuthProvider config={authConfig}><App/></AuthProvider>), document.getElementById("root"));
