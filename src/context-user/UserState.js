import UserContext from "./userContext";
import React, { useState } from "react";

const UserState = (props) => {
    const [user,setUser]= useState(null);
    const authToken = localStorage.getItem('token')
    const host = process.env.REACT_APP_HOST

    

    // Get user
    const getUser = async () => {
        // API Call 
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": authToken
            }
        });
        const json = await response.json();
        setUser(json);
    }
    return (
        <UserContext.Provider value={{getUser,user}}>
            {props.children}
        </UserContext.Provider>
    )

}
export default UserState