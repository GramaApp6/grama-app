import React from 'react';
import ProfileNavbar from "../components/ProfileNavbar";

function HomePage() {
    return (<>
        <ProfileNavbar/>
        <div className="container">
            <div className="d-flex flex-column p-3 pt-5">
                <button className="btn btn-outline-success mb-3">Apply for Grama Cert</button>
                <button className="btn btn-outline-success mb-3">Check Status</button>
                <button className="btn btn-outline-success mb-3">Help</button>
            </div>
        </div>
        </>);
}

export default HomePage;
