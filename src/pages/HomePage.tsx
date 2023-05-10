import React from 'react';
import ProfileNavbar from "../components/ProfileNavbar";

function HomePage() {
    return (<>
        <ProfileNavbar/>
        <div className="container justify-content-center">
            <div className="d-flex flex-column flex-lg-row p-3 pt-5">
                <a className="btn btn-outline-success m-3" href="/request">
                    <div className="home-page-btn">
                        <i className="fa fa-certificate m-2" style={{fontSize: "4rem"}}></i>
                        <br/>
                        Apply for Grama Cert
                    </div>
                </a>
                <a className="btn btn-outline-success m-3" href="/status">
                    <div className="home-page-btn">
                        <i className="fa fa-check-circle m-2" style={{fontSize: "4rem"}}></i>
                        <br/>
                        Check Status
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

export default HomePage;