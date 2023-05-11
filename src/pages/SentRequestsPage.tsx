import React, {useEffect, useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";
import {GramaCertificate} from "../types";
import {Status} from "../types/GramaCertificate.ts";
import SentRequestMinimalCard from "../components/SentRequestMinimalCard.tsx";

function SentRequestsPage() {
    const [requests, setRequests] = useState<GramaCertificate[]>([]);

    useEffect(() => {
        //TODO: Get requests from backend
        const data: GramaCertificate[] = [
            {
                reason: "Reason 1",
                status: Status.NEW,
                requestDate: new Date("2021-08-01"),
                validationStatus:{
                    address: Status.PASSED,
                    police: Status.PASSED,
                    identity: Status.NEW
                }
            },
            {
                reason: "Reason 2",
                status: Status.PASSED,
                certificateNumber: "123456788",
                issuedDate: new Date("2022-10-01"),
                requestDate: new Date("2022-09-01"),
                validationStatus:{
                    address: Status.PASSED,
                    police: Status.PASSED,
                    identity: Status.NEW
                }
            },
            {
                reason: "Reason 3",
                status: Status.FAILED,
                requestDate: new Date("2023-04-07"),
                validationStatus:{
                    address: Status.PASSED,
                    police: Status.PASSED,
                    identity: Status.NEW
                }
            }
        ];
        setRequests(data);

    }, []);

    return (
        <>
            <ProfileNavbar/>
            <div className="d-flex limit-width flex-column">
                {
                    requests.map((request: GramaCertificate, index:number) => (
                        <SentRequestMinimalCard key={index} details={request} />
                    ))
                }
            </div>
        </>
    );
}

export default SentRequestsPage;
