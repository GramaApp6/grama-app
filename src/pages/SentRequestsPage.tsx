import React, {useEffect, useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";
import {GramaCertificate} from "../types";
import SentRequestMinimalCard from "../components/SentRequestMinimalCard.tsx";
import {useAuthContext} from "@asgardeo/auth-react";
import {url} from "../utils/constants.ts";
import {warningToast} from "../utils/toasts.ts";

function SentRequestsPage() {
    const [requests, setRequests] = useState<GramaCertificate[]>([]);
    const {state, httpRequest} = useAuthContext();

    useEffect(() => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/requested_grama_certificates/"+state.email,
            attachToken: true
        }).then((data) => {
            console.log(data);
            setRequests(data.data);
        }).catch((err) => {
            console.log(err);
            warningToast("Failed to fetch requests");
        })
    }, [state]);

    return (
        <>
            <ProfileNavbar/>
            <div className="d-flex limit-width flex-column">
                {
                    requests.length != 0 ?
                    requests.map((request: GramaCertificate, index: number) => (
                        <SentRequestMinimalCard key={index} details={request}/>
                    ))
                        :
                        <h6 className="text-secondary">
                            No Requests Found
                        </h6>
                }
            </div>
        </>
    );
}

export default SentRequestsPage;
