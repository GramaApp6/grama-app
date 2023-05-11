import React from 'react';
import Notifications from "./Notifications.tsx";
import OffCanvas from "./OffCanvas.tsx";

function ProfileNavbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <b>Grama</b>Check
                </a>
                <div className="d-flex">
                    <ul className="list-unstyled me-3">
                        <li className="nav-item">
                            <button className=" navbar-toggler nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <i className="fa fa-bell" style={{fontSize: "2rem"}}></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <Notifications/>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/notifications">
                                        Show all notifications
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <OffCanvas/>
                </div>
            </div>
        </nav>
    );

}

export default ProfileNavbar;
