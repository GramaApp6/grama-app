import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {GramaCertificate} from "../types";
import {url} from "../utils/constants";
import {useAuthContext} from "@asgardeo/auth-react";
import InputField from "../components/form/InputField.tsx";
import InputWithButton from "../components/form/InputWithButton.tsx";
import {errorToast, infoToast} from "../utils/toasts.ts";
import ProfileNavbar from "../components/ProfileNavbar.tsx";

const RequestInfo = () => {
    const {requestId} = useParams();
    const {httpRequest} = useAuthContext();
    const [request, setRequest] = useState<GramaCertificate>({
        NIC: "",
        address: {
            houseNo: "",
            city: "",
            suburb: "",
            streetName: "",
        },
        certificateId: "",
        divisionId: 0,
        email: "",
        firstName: "",
        gramaDivision: 0,
        issuedDate: new Date(),
        lastName: "",
        mobileNo: "",
        purpose: "",
        requestDate: new Date(),
        status: "",
        validationStatus: {address: "NEW", identity: "NEW", police: "NEW"}
    });
    const [areButtonsEnabled, setAreButtonsEnabled] = useState(false);
    useEffect(() => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/certificate/" + requestId,
            attachToken: true
        })
            .then((data) => {
                console.log("request before fetching", request);
                const response: GramaCertificate = data.data;
                console.log("data", response);
                setRequest(response);
            })
            .catch((err) => {
                console.log(err);
            });

        if (
            request.validationStatus.address !== "NEW" &&
            request.validationStatus.identity !== "NEW" &&
            request.validationStatus.police !== "NEW"
        ) {
            setAreButtonsEnabled(true);
        } else {
            setAreButtonsEnabled(false);
        }
    }, [requestId, request.validationStatus.address, request.validationStatus.identity, request.validationStatus.police]);

    const getIdentityCheck = (certificationId: string) => {
        infoToast("Checking identity ...");
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId + "?verifyType=ID",
            attachToken: true
        }).then((data) => {
            if (data.status != 200) {
                errorToast("Request failed");
                return
            }
            const response: GramaCertificate = data.data;
            console.log(response);
            setRequest(response);
        }).catch((err) => {
            console.log(err);
            errorToast("Server error");
        })
    }
    const getAddressCheck = (certificationId: string) => {
        infoToast("checking address validity ...")
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId + "?verifyType=ADDRESS",
            attachToken: true
        }).then((data) => {
            if (data.status != 200) {
                errorToast("Request failed");
                return
            }
            const response: GramaCertificate = data.data;
            console.log(response);
            setRequest(response);
        }).catch((err) => {
            console.log(err);
            errorToast("Server error");
        })
    }
    const getPoliceCheck = (certificationId: string) => {
        infoToast("Checking police report ...")
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/verify/" + certificationId + "?verifyType=POLICE",
            attachToken: true
        }).then((data) => {
            if (data.status != 200) {
                errorToast("Request failed");
                return
            }
            const response: GramaCertificate = data.data;
            console.log(response);
            setRequest(response);
        }).catch((err) => {
            console.log(err);
            errorToast("Server error");
        })
    }

    const handleApprove = () => {
        infoToast("Approving request ...");
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "PUT",
            url: url + "/status",
            data: {
                ... request,
                "status" : "APPROVED"
            },
            attachToken: true
        }).then((data) => {
            if (data.status != 200) {
                errorToast("Request failed");
                return
            }
            const response: GramaCertificate = data.data;
            console.log(response);
            setRequest(response);
        }).catch((err) => {
            console.log(err);
            errorToast("Server error");
        })
    }

    const handleReject = () => {
        infoToast("Rejecting request ...");
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "PUT",
            url: url + "/status",
            data: {
                ... request,
                "status" : "REJECT"
            },
            attachToken: true
        }).then((data) => {
            if (data.status != 200) {
                errorToast("Request failed");
                return
            }
            const response: GramaCertificate = data.data;
            console.log(response);
            setRequest(response);
        }).catch((err) => {
            console.log(err);
            errorToast("Server error");
        })
    }

    console.log("request after update", request);
    return (
        <>
            <ProfileNavbar/>
            <div className="container mt-5">
                <div className="card text-start shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-header text-center">
                        <h3>Request Information</h3>
                    </div>
                    <div className="card-body">
                        <InputField label="First Name: " id="firstName" type="text" disabled={true}
                                    default={request.firstName}/>
                        <InputField label="last Name: " id="lastName" type="text" disabled={true}
                                    default={request.lastName}/>
                        <InputField label="NIC: " id="nic" type="text" disabled={true}
                                    default={request.NIC}/>
                        <fieldset className="p-3 text-start mb-3">
                            <legend className="fs-5">Address</legend>
                            <InputField label="House Number" id="houseNumber" type="text" disabled={true}
                                        default={request.address.houseNo}/>
                            <InputField label="Street Name" id="streetName" type="text" disabled={true}
                                        default={request.address.streetName}/>
                            <InputField label="Suburb Area" id="suburb" type="text" disabled={true}
                                        default={request.address.suburb}/>
                            <InputField label="City" id="city" type="text" disabled={true}
                                        default={request.address.city}/>
                        </fieldset>
                        <InputWithButton label={"Check Identity"} value={request.validationStatus.identity}
                                         disabled={true}
                                         disableButton={request.validationStatus.identity != "NEW"}
                                         id={"identity"} onClick={() => getIdentityCheck(request.certificateId)}/>
                        <InputWithButton label={"Check Police Report"}
                                         value={request.validationStatus.police}
                                         disabled={true}
                                         disableButton={request.validationStatus.police != "NEW"}
                                         id={"police"} onClick={() => getPoliceCheck(request.certificateId)}/>
                        <InputWithButton label={"Check Address"} value={request.validationStatus.address}
                                         disabled={true}
                                         disableButton={request.validationStatus.address != "NEW"}
                                         id={"address"} onClick={() => getAddressCheck(request.certificateId)}/>
                    </div>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <button className="btn btn-success w-100" disabled={!areButtonsEnabled} onClick={handleApprove}>
                                    <i className="fa fa-check me-3"></i>APPROVE
                                </button>
                            </div>
                            <div className="col-md-6 mb-3">
                                <button className="btn btn-danger w-100" disabled={!areButtonsEnabled} onClick={handleReject}>
                                    <i className="fa fa-times me-3"></i>REJECT
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default RequestInfo;
