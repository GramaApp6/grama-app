import React from 'react';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

const authConfig: AuthReactConfig = {
    baseUrl: "https://api.asgardeo.io/t/ishad",
    clientID: "4ht_tR9KQdry5ylCEcS8yMK7zeca",
    signInRedirectURL: "http://localhost:3000",
    signOutRedirectURL: "http://localhost:3000",
    scope: [ "openid","profile" ]
}

render((<AuthProvider config={authConfig}><App/></AuthProvider>), document.getElementById("root"));
