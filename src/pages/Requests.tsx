import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import {useAuthContext} from "@asgardeo/auth-react";
import {url} from "../utils/constants.ts";
import {GramaCertificate} from "../types";

const Requests = (props: { email: string }) => {
    const [divisionId, setDivivsionid] = useState(null);
    const [certificates, setCertificates] = useState<GramaCertificate[]>([]);
    const [loading, setLoading] = useState(true);
    const {httpRequest} = useAuthContext();
    const navigate = useNavigate();
    const getGramaDivisionId = (email: string) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/division_id/" + email,
            attachToken: true
        }).then((data) => {
            console.log(data.data);
            setDivivsionid(data.data);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }
    const getGramaDivisionDetails = (divisionId: number) => {
        httpRequest({
            headers: {
                "Accept": "application/json"
            },
            method: "GET",
            url: url + "/all_certificate/" + divisionId,
            attachToken: true
        }).then((data) => {
            console.log("data", data.data);
            setCertificates(data.data);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }
    useEffect(() => {
        setLoading(true);
        getGramaDivisionId(props.email);
        if (divisionId != null) {
            getGramaDivisionDetails(divisionId);
        }
    }, [divisionId]);

    return (<>
        <ProfileNavbar/>
        <div className="container">
            <div className="text-center mt-2">
                <h3>Grama Certificate Requests</h3>
            </div>
            <table className="table table-hover shadow-lg bg-body rounded-3 text-start">
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
                            console.log("navigating form requests", certificate);
                            navigate(`/request/${certificate.certificateId}`,)
                        }}
                        style={{cursor: 'pointer'}}>
                        <td>{`${certificate.firstName} ${certificate.lastName}`}</td>
                        <td>{certificate.status}</td>
                    </tr>
                ))}
                {
                    certificates.length == 0 && (
                        <div className="text-center p-5" style={{width: "100%"}}>
                            {loading ? <h5 className="loading">Loading</h5> : <h5>No Request Found</h5>}
                        </div>
                    )
                }
                </tbody>
            </table>
        </div>
    </>);
};

export default Requests;