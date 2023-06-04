import React from 'react';
import {Notification} from "../types";

function NotificationDropDownEntry(props: { notification: Notification }) {
    return (
        <li className="dropdown-item">
            <div className="ps-1 pe-1" style={{minWidth: "40vw"}}>
                <p>{props.notification.message}</p>
            </div>
        </li>
    );
}

export default NotificationDropDownEntry;