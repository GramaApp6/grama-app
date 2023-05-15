import React from 'react';
import ProfileNavbar from "../components/ProfileNavbar";

function AdminHomePage() {
    return (<>
        <ProfileNavbar/>
        <div className="container justify-content-center">
            <div className="d-flex flex-column flex-lg-row p-3 pt-5">
               <a className="btn btn-outline-success m-3" href="/requests">
                    <div className="home-page-btn">
                        <i className="fa fa-bars m-2" style={{fontSize: "4rem"}}></i>
                        <br/>
                        Check Requests
                    </div>
                </a>
                <button className="btn btn-outline-success m-3">
                    <div className="home-page-btn">
                        <i className="fa fa-info-circle m-2" style={{fontSize: "4rem"}}></i>
                        <br/>
                        Help
                    </div>
                </button>
            </div>
        </div>
    </>);
}

export default AdminHomePage;