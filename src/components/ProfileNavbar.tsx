import { React, useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Image } from "react-bootstrap";

function ProfileNavbar() {
  const { getBasicUserInfo } = useAuthContext();
  const [user_attribute, setAttributeList] = useState([]);

  useEffect(() => {
    getBasicUserInfo()
      .then((response) => {
        setAttributeList(response);
        console.log(response);
      })
      .catch((error) => {
        //console.error(error);
      });
  }, []);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/profile"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src={user_attribute["picture"]}
            roundedCircle
            width={50}
            height={50}
          />

          <p
            style={{
              marginLeft: "10px",
              fontSize: "24px",
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
            }}
          >
            {user_attribute["displayName"]}
          </p>
        </a>

        <div>
          <ul className="me-auto mb-2 mb-lg-0 list-unstyled">
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-bell" style={{ fontSize: "2rem" }}></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
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
