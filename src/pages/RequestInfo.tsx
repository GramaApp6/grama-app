import React, {useState} from "react";
import {useLocation} from "react-router-dom";

import {GramaCertificate} from "../types";
import {Status} from "../types/GramaCertificate.ts";
import ProfileNavbar from "../components/ProfileNavbar";
import {url} from "../utils/constants";
import {useAuthContext} from "@asgardeo/auth-react";

const RequestInfo = () => {
    const[Addressdata,setAddress]=useState<GramaCertificate[]>([]);
    const[PoliceData,setPolice]=useState<GramaCertificate[]>([]);
    const [isIdentityChecked, setIsIdentityChecked] = useState(false);
    const [isPoliceChecked, setIsPoliceChecked] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAddressChecked, setIsAddressChecked] = useState(false);
    const location = useLocation();
    const {httpRequest} = useAuthContext();
    const [request, setRequest] = useState<GramaCertificate>(
        location.state
    );
    const getIdentityCheck = (certificationId: string) => {
        console.log("certificationId", certificationId);
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId+"?verifyType=ID",
            attachToken: true
        }).then((data) => {
            console.log(data.data);
            setRequest(data.data)
            //setID(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const getAddressCheck = (certificationId: string) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId+"?verifyType=ADDRESS",
            attachToken: true
        }).then((data) => {
            console.log(data.data);
            setRequest(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const getPoliceCheck = (certificationId: string) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId+"?verifyType=POLICE",
            attachToken: true
        }).then((data) => {
            console.log(data.data);
            setRequest(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleCheckIdentity = () => {
        // TODO: Perform identity check
        setIsIdentityChecked(true);
    };

    const handleCheckPolice = () => {
        // TODO: Perform police check
        setIsPoliceChecked(true);
    };

    const handleCheckAddress = () => {
        // TODO: Handle form submission
        setIsAddressChecked(true);
    };
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <>
            <ProfileNavbar/>
            <div className="container">
                <div className="text-center mt-1 mb-4">
                    <h1>User Details</h1>
                </div>
                <div className="card text-start shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h6 className="card-text">Name:</h6>
                        <h6 className="card-subtitle text-muted">{request.firstName + " " + request.lastName}</h6>

                        <hr className="hr-success"/>

                        <h6 className="card-text">NIC:</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request.NIC}</h6>
                        <hr className="hr-success"/>

                        <h6 className="card-text">Address:</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request.address.houseNo}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request.address.streetName}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request.address.suburb}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{request.address.city}</h6>
                        <hr className="hr-success"/>


                        <h6 className="card-text">
                            Check Identity:
                        </h6>
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className="card-subtitle mb-2 text-muted  my-auto">{request.validationStatus.identity}</h6>
                            <button className="btn btn-outline-primary inline ms-5" onClick={() => getIdentityCheck(request.certificateId)}>Check
                            </button>
                        </div>

                        <h6 className="card-text">
                            Check Police:
                        </h6>
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className="card-subtitle mb-2 text-muted  my-auto">{request.validationStatus.police}</h6>

                            <button className="btn btn-outline-primary inline ms-5" onClick={() => getPoliceCheck(request.certificateId)}>Check
                            </button>
                        </div>

                        <h6 className="card-text ">
                            Check Address:
                        </h6>
                        <div className="d-flex justify-content-between mb-3">
                            <h6 className="card-subtitle mb-2 text-muted  my-auto">{request.validationStatus.address}</h6>

                            <button className="btn btn-outline-primary  ms-5"
                                    onClick={() => getAddressCheck(request.certificateId)}
                            >Check
                            </button>
                        </div>
                        <hr className="hr-success"/>

                        <div className="d-flex justify-content-between">
                            <h6 className="card-text my-auto">Set Status:</h6>

                            <div className="dropdown">
                                <a className="btn btn-outline-primary dropdown-toggle" href="#" role="button"
                                   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="text-center mt-5 ">
                            <form onSubmit={handleSubmit} className="d-grid gap-2">
                                {request.validationStatus.status === Status.PASSED && (
                                    <button
                                        className="btn btn-lg btn-success"
                                        onClick={handleSubmit}
                                        disabled={isSubmitted}
                                    >
                                        Submit
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestInfo;
