import React, {useEffect, useState} from 'react';
import ProfileNavbar from "../components/ProfileNavbar";
import {Card} from 'react-bootstrap';

function StatusPage() {
    const [status, setStatus] = useState("Pending");

    useEffect(() => {
        //TODO: Get status from backend
        setStatus("Approved")
    }, []);

    return (
        <>
            <ProfileNavbar/>
            <div className="d-flex justify-content-center">
                <Card className="my-5 p-4 shadow" style={{maxWidth: '500px'}}>
                    <h1 className="text-center">Status Check</h1>
                    <hr/>
                    <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
                        <h2 className="text-center">{status}</h2>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default StatusPage;
