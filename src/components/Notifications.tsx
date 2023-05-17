import React, { useState, useEffect } from 'react';
import {useAuthContext} from "@asgardeo/auth-react";

import {Notification} from "../types";
import NotificationDropDownEntry from "./NotificationDropDownEntry.tsx";

const Notifications = () => {
    const {httpRequest, getBasicUserInfo} = useAuthContext();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    // const notifications : Notification[] = [
    //     {
    //         id: 1,
    //         heading: "Heading 1",
    //         description: "Description 1",
    //         time: new Date()
    //     }
    // ]
    useEffect(() => {
        const fetchNotifications = async () => {
            const user = await getBasicUserInfo()
            const response = await httpRequest({
                headers: {
                    "Accept": "application/json"
                },
                method: "GET",
                url: `https://c797a448-6b78-43cc-b089-fcc4e8df8937-dev.e1-us-east-azure.choreoapis.dev/yjoh/nodehook/node-hook-197/1.0.0/notifications/gastro@wso2.com`,
                attachToken: true
            })
            setNotifications(response.data);
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