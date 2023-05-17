import React from 'react';
import {GramaCertificate} from "../types";

function SentRequestMinimalCard(props: { details: GramaCertificate }) {
    return (
        <div className="card shadow m-3 hover-transform">
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Status: {props.details.status}</h6>
                <p className="card-text">Reason: {props.details.purpose}</p>
                {
                    props.details.status == "APPROVED" &&
                    <p className="card-text">Certificate ID: <b>{props.details.certificateId}</b></p>
                }
            </div>
        </div>
    );
}

export default SentRequestMinimalCard
