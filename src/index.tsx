import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider, AuthReactConfig} from "@asgardeo/auth-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

const authConfig: AuthReactConfig = {
    baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
    clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
    signInRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_IN_REDIRECT_URL,
    signOutRedirectURL: import.meta.env.VITE_ASGARDEO_SIGN_OUT_REDIRECT_URL,
    scope: ["openid", "email", "groups", "profile"],
    resourceServerURLs: [
        "https://c797a448-6b78-43cc-b089-fcc4e8df8937-dev.e1-us-east-azure.choreoapis.dev/yjoh/gramaappbackend/endpoint-9091-6c0/1.0.0",
        "https://c797a448-6b78-43cc-b089-fcc4e8df8937-dev.e1-us-east-azure.choreoapis.dev/yjoh/nodehook/node-hook-197/1.0.0"
    ]
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <AuthProvider config={authConfig}>
        <App/>
    </AuthProvider>
);
