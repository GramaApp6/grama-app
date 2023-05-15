import React, { useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import { redirect } from "react-router-dom";

const Requests = () => {
    const [data, setData] = useState([
        { name: "John Doe", status: "Approved" },
        { name: "Jane Doe", status: "Pending" },
        { name: "Bob Smith", status: "Approved" },
        { name: "Alice Jones", status: "Pending" },
        { name: "David Lee", status: "Approved" },
        { name: "Sarah Brown", status: "Pending" },
        { name: "Michael Davis", status: "Approved" },
        { name: "Emily White", status: "Pending" },
        { name: "Alex Johnson", status: "Approved" },
        { name: "Olivia Green", status: "Pending" },
    ]);

    return (<>
        <ProfileNavbar />
        <div className="container">
            <div className="text-center  mt-1 mb-5">
                <h1>Requests</h1>
            </div>
            <table className="table table-hover shadow-lg p-3 mb-5 bg-body rounded">
                <thead>
                    <tr  className="my-5">
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      
                    </tr>
                </thead>
                

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="mt-3">
                            <td>{row.name}</td>
                            <td>{row.status}</td>
                            <td>
                                {row.status === "Pending" && (
                                    <a href={"/request/" + index} className="btn btn-outline-success">Approve Now</a>
                                )}
                            </td>
                           
                            
                        </tr >
                       
                      
                    ))}
                    
                </tbody>
            </table>
        </div>
    </>);
};

export default Requests;