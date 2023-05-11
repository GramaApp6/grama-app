import React from 'react';

import {Notification} from "../types";
import NotificationDropDownEntry from "./NotificationDropDownEntry.tsx";

const Notifications = () => {
    const notifications : Notification[] = [
        {
            id: 1,
            heading: "Heading 1",
            description: "Description 1",
            time: new Date()
        }
    ]
    return (
        <>
            {
                notifications.map((notification) => (
                    <NotificationDropDownEntry key={notification.id} notification={notification}/>
                    )
                )
            }
        </>
    )
}
export default Notifications;