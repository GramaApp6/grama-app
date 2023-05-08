import React from 'react';
function ProfileNavbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <i className="fa fa-user-circle" style={{fontSize: "3rem"}}></i>
                </a>
                <div>
                    <ul className="me-auto mb-2 mb-lg-0 list-unstyled">
                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                <i className="fa fa-bell" style={{fontSize: "2rem"}}></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/notifications">Notifications</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li className="text-center">
                                    <button className="btn btn-outline-success">Login</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default ProfileNavbar;
