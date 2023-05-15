import React, {useEffect, useState} from "react";
import ProfileNavbar from "../components/ProfileNavbar";

import {Address, GramaCertificate} from "../types";
import {Status} from "../types/GramaCertificate.ts";
import {getAddressAsString} from "../utils/commonUtils.ts";
import {useParams} from "react-router-dom";

const RequestInfo = () => {
    const {id} = useParams();
    const [request, setRequest] = useState<GramaCertificate>(
        {
            address: {
                houseNumber: "",
                streetName: "",
                suburb: "",
                city: ""
            },
            certificateNumber: "",
            firstName: "",
            gramaDivision: "",
            issuedDate: undefined,
            lastName: "",
            mobileNumber: "",
            nic: "",
            reason: "",
            requestDate: new Date(),
            status: Status.NEW,
            validationStatus: {address: Status.NEW, identity: Status.NEW, police: Status.NEW}
        }
    );

    useEffect(()=>{
        //TODO: fetch data from backend based on requestID
        // setRequest();
    }, [id])
    const handleApprove = () => {
        //TODO:
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <>
            <ProfileNavbar/>
            <div className="container">
                <div className="text-center">
                    <h1>User Details</h1>
                </div>
                <div className="card text-start">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Name</h6>
                        <h5 className="card-title">{request?.firstName + " " + request?.lastName}</h5>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">NIC</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request?.nic}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                        <p className="card-text">{getAddressAsString(request?.address as Address)}</p>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Status</h6>
                        <div>
                            <p className="card-text">
                                Identity - {Status[request.validationStatus.identity]}
                            </p>
                            <button className="btn btn-outline-primary">Check</button>
                        </div>
                        <div>
                            <p className="card-text">
                                 Police - {Status[request.validationStatus.police]}
                            </p>
                            <button className="btn btn-outline-primary">Check</button>
                        </div>
                        <div>
                            <p className="card-text">
                                Address - {Status[request.validationStatus.address]}
                            </p>
                            <button className="btn btn-outline-primary">Check</button>
                        </div>
                        <hr/>
                        <div className="text-center">

                            <form onSubmit={handleSubmit}>
                                {request.status === Status.NEW && (
                                <button
                                    className="btn btn-success"
                                    onClick={handleApprove}
                                >
                                    Approve
                                </button>

                            )}
                                <button className="btn btn-success" type="submit">
                                    Submit
                                </button>
                                <a className="btn btn-danger" href="/requests">
                                    Cancel
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestInfo;
