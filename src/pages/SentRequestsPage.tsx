import React, {useEffect, useState} from 'react';

import ProfileNavbar from "../components/ProfileNavbar";

function RequestsPage() {
    const [status, setStatus] = useState("Pending");

    useEffect(() => {
        //TODO: Get status from backend
        setStatus("Approved")
    }, []);

    return (
        <>
            <ProfileNavbar/>
            <div className="d-flex limit-width">
                
            </div>
        </>
    );
}

export default RequestsPage;
