import React from 'react';
import ProfileNavbar from "../components/ProfileNavbar";


function InfoPage() {
    return (<>
        <ProfileNavbar/>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" className="form-control" id="id"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </>);
}

export default InfoPage;