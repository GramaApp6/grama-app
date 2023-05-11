import React, {useState} from "react";
import ProfileNavbar from "../components/ProfileNavbar";

const UserDataPage = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        nic: "123456789",
        address: "123 Main St",
        email: "johndoe@gmail.com",
        policeRecords: [
            {
                date: "2022-05-01",
                description: "Speeding",
            },
            {
                date: "2021-11-15",
                description: "Jaywalking",
            },
        ],
        status: "Pending",
    });

    const handleApprove = () => {
        const updatedUser = {...user, status: "Approved"};
        setUser(updatedUser);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <>
            <ProfileNavbar/>
            <div className="container">
                <div className="text-center">
                    <h1>User Details</h1>
                </div>
                <div className="card text-start">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Name</h6>
                        <h5 className="card-title">{user.name}</h5>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">NIC</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{user.nic}</h6>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                        <p className="card-text">{user.address}</p>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Email</h6>
                        <p className="card-text">{user.email}</p>
                        <button className="btn btn-outline-primary">Check</button>
                        <hr/>
                        <h6 className="card-subtitle mb-2 text-muted">Police Records</h6>
                        {user.policeRecords.map((record, index) => (
                            <div key={index}>
                                <p className="card-text">
                                    {record.date} - {record.description}
                                </p>
                                <button className="btn btn-outline-primary">Check</button>
                            </div>
                        ))}
                        <hr/>
                        <div className="text-center">

                            <form onSubmit={handleSubmit}>
                                {user.status === "Pending" && (
                                <button
                                    className="btn btn-success"
                                    onClick={handleApprove}
                                >
                                    Approve
                                </button>

                            )}
                                {" "}
                                <button className="btn btn-success" type="submit">
                                    Submit
                                </button>
                                {" "}
                                <button className="btn btn-danger" type="button">
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDataPage;
