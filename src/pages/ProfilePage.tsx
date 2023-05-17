import React, {useEffect, useState} from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import {UserInfo} from "../types";

function ProfilePage(props: { userInfo: UserInfo}) {
    const[picture, setPicture] = useState<string>("/profile.png");

    const validatePicture = async (picture: string) => {
        const res = await fetch(picture);
        const buff = await res.blob();

        return  buff.type.startsWith('image/');
    }

    useEffect(() => {
        validatePicture(props.userInfo.picture).then((res) => {
            if (res) {
                setPicture(props.userInfo.picture);
            }
        });
    }, [props.userInfo]);

    return (
        <>
            <ProfileNavbar/>
            <div className="container mt-5">
                <div className="row justify-content-md-center mb-3">
                    <div className="col-md-auto">
                        <img
                            src={picture}
                            className="rounded-circle my-3"
                            width="200" // set the width to 200 pixels
                            height="200" // set the height to 200 pixels
                        />
                    </div>
                </div>
                <div className="row mt-3 justify-content-md-center my-3">
                    <div className="col-md-auto">
                        <h1>{props.userInfo.name}</h1>
                    </div>
                </div>
                <ul className="list-group text-start ">
                    <li className="list-group-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-muted">Full name </h4>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={props.userInfo.name}
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-muted">Email </h4>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={props.userInfo.email}
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col">
                                <h4 className="text-muted">Role </h4>
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={props.userInfo.role}
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
