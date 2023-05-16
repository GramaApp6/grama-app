import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import {useAuthContext} from "@asgardeo/auth-react";
import {url} from "../utils/constants.ts";
import {GramaCertificate} from "../types";

const Requests = (props: { email: string }) => {
    const [divisionid, setID] = useState(null);
    const [certificates, setCertificates] = useState<GramaCertificate[]>([]);
    const {httpRequest} = useAuthContext();
    const navigate = useNavigate();
    const getGramaDivisionId = (email) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/division_id/" + email,
            attachToken: true
        }).then((data) => {
            console.log(data.data);
            setID(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const getGramaDivisionDetails = (divisionid) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/all_certificate/" + divisionid,
            attachToken: true
        }).then((data) => {
            console.log("data", data.data);
            setCertificates(data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getGramaDivisionId(props.email);
        if (divisionid != null) {
            getGramaDivisionDetails(divisionid);
        }

    }, [divisionid]);

    return (<>
        <ProfileNavbar/>
        <div className="container">
            <div className="text-center  mt-1 mb-5">
                <h1>Requests</h1>
            </div>
            <table className="table table-hover shadow-lg p-3 mb-5 bg-body rounded text-start">
                <thead>
                <tr className="my-5">
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {certificates.map((certificate, index) => (
                    <tr key={index} className="mt-3"
                        onClick={() => {
                            console.log(certificate);
                            navigate(`/request/${certificate.certificateId}`,  {
                                state: certificate
                            })
                        }}
                        style={{cursor: 'pointer'}}>
                        <td>{`${certificate.firstName} ${certificate.lastName}`}</td>
                        <td>{certificate.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>);
};

export default Requests;