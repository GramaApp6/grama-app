import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";


function ProfilePage(props: any) {
  
  

  return (
    <>
      <ProfileNavbar />

      <div className="container">
        <div className="row justify-content-md-center mb-3">
          <div className="col-md-auto">

              <img
                src={props.picture}
                className="rounded-circle"
                width="200" // set the width to 200 pixels
                height="200" // set the height to 200 pixels
              />
          
          </div>
        </div>
        <div className="row mt-3 justify-content-md-center">
          <div className="col-md-auto">
            <h1>{props.display_name}</h1>
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Full name </h4>
              </div>
              <div className="col">
               
                  <input
                    type="text"
                    className="form-control"
                    placeholder={props.full_name}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
             
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Email </h4>
              </div>
              <div className="col">
              
                  <input
                    type="text"
                    className="form-control"
                    placeholder={props.email}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row">
              <div className="col">
                <h4 className="text-muted">Role </h4>
              </div>
              <div className="col">
               
                  <input
                    type="text"
                    className="form-control"
                    placeholder={props.role}
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
              
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;
