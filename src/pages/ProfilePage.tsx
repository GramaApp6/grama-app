import React, { useEffect, useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import { useAuthContext } from "@asgardeo/auth-react";

function ProfilePage() {
  const { getBasicUserInfo } = useAuthContext();
  const [user_attribute, setAttributeList] = useState<Record<string, string>>();

  useEffect(() => {
    getBasicUserInfo()
      .then((response) => {
        setAttributeList(response);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ProfileNavbar />

      <div className="container">
        <div className="row justify-content-md-center mb-3">
          <div className="col-md-auto">
            {user_attribute && (
              <img
                src={user_attribute["picture"]}
                className="rounded-circle"
                width="200" // set the width to 200 pixels
                height="200" // set the height to 200 pixels
              />
            )}
          </div>
        </div>
        <div className="row mt-3 justify-content-md-center">
          <div className="col-md-auto">
            {user_attribute && <h1>{user_attribute["displayName"]}</h1>}
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Full name </h4>
              </div>
              <div className="col">
                {user_attribute && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder={user_attribute["name"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Email </h4>
              </div>
              <div className="col">
                {user_attribute && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder={user_attribute["email"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Role </h4>
              </div>
              <div className="col">
                {user_attribute && (
                  <input
                    type="text"
                    className="form-control"
                    placeholder={user_attribute["groups"]}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                )}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;
