import React, { useState, useEffect } from 'react';
import {useAuthContext} from "@asgardeo/auth-react";

import {Notification} from "../types";
import NotificationDropDownEntry from "./NotificationDropDownEntry.tsx";
import {node_hook_url} from "../utils/constants.ts";

const Notifications = () => {
    const {httpRequest, getBasicUserInfo} = useAuthContext();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    useEffect(() => {
        const fetchNotifications = async () => {
            const user = await getBasicUserInfo()
            if (user.email) {
                const response = await httpRequest({
                    headers: {
                        "Accept": "application/json"
                    },
                    method: "GET",
                    url:`${node_hook_url}/notifications/${user.email}`,
                    attachToken: true
                })
                setNotifications(response.data);
            }
        };
        // Call once immediately
        fetchNotifications();
        
        // Then set up the interval
        const intervalId = setInterval(fetchNotifications, 5000); // Adjust time as needed

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {
                notifications.map((notification, index) => (
                    <NotificationDropDownEntry key={index} notification={notification}/>
                    )
                )
            }
        </>
    )
}
export default Notifications;