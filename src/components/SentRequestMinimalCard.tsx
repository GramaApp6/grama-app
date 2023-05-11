import React from 'react';
import {GramaCertificate} from "../types";
import {Status} from "../types/GramaCertificate.ts";

function SentRequestMinimalCard(props: {details: GramaCertificate}) {
    return (
        <div className="card shadow m-3">
            <div className="card-header">
                <p className="card-title">Requested Date: {props.details.requestDate.toDateString()}</p>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Status: {Status[props.details.status]}</h6>
                <p className="card-text">Reason: {props.details.reason}</p>
            </div>
        </div>
    );
}

export default SentRequestMinimalCard