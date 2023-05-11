import React, { useState } from "react";
import ProfileNavbar from "../components/ProfileNavbar";

const AdminPage = () => {
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

  const handleApproveNow = (index: number) => {
    const newData = [...data];
    newData[index].status = "Approved";
    setData(newData);
  };

  return (<>
  <ProfileNavbar/>
    <div className="container">
        <div className="text-center">
            <h1>Requests</h1>
        </div>
        <Table striped bordered hover>
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
                  <button onClick={() => handleApproveNow(index)}>Approve Now</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </>);
};

export default AdminPage;

import Table from "react-bootstrap/Table";