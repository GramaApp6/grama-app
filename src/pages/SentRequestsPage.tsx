import React, {useEffect, useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";
import {GramaCertificate} from "../types";
import SentRequestMinimalCard from "../components/SentRequestMinimalCard.tsx";

function SentRequestsPage() {
    const [requests, setRequests] = useState<GramaCertificate[]>([]);

    useEffect(() => {
        //TODO: Get requests from backend
        const data: GramaCertificate[] = [];
        setRequests(data);

    }, []);

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
