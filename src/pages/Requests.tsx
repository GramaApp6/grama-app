import React, {useState} from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import {redirect} from "react-router-dom";

const Requests = () => {
    const [data, setData] = useState([
        {name: "John Doe", status: "Approved"},
        {name: "Jane Doe", status: "Pending"},
        {name: "Bob Smith", status: "Approved"},
        {name: "Alice Jones", status: "Pending"},
        {name: "David Lee", status: "Approved"},
        {name: "Sarah Brown", status: "Pending"},
        {name: "Michael Davis", status: "Approved"},
        {name: "Emily White", status: "Pending"},
        {name: "Alex Johnson", status: "Approved"},
        {name: "Olivia Green", status: "Pending"},
    ]);

    return (<>
        <ProfileNavbar/>
        <div className="container">
            <div className="text-center">
                <h1>Requests</h1>
            </div>
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.name}</td>
                        <td>{row.status}</td>
                        <td>
                            {row.status === "Pending" && (
                                <a href={"/request/"+index} className="btn btn-outline-success">Approve Now</a>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>);
};

export default Requests;