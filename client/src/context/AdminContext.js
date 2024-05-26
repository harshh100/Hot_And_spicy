import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from "axios"



const AdminContext = createContext();

const AdminProvider = ({ children }) => {


    const [Isadmin, setIsadmin] = useState(false);

    const checkAdmin = async () => {
        const token = localStorage.getItem('token');
        console.log(token);
        const res = await axios.post('http://localhost:8080/api/userauth', {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });


        if (res.data.authenticationStatus === 'authorized') {
            console.log("res" + res.data.authenticationStatus);
            setIsadmin(true);
            return true;
        } else {
            setIsadmin(false);
            return false;
        }
    };

    const Logout = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');
        // Update isAdmin state to false after logout
        setIsadmin(false);
        // Perform any additional logout-related tasks if needed
        // For example, redirecting to the login page
        // history.push('/login');
    };

    return (
        <AdminContext.Provider value={{ Isadmin, setIsadmin, checkAdmin, Logout }}>
            {children}
        </AdminContext.Provider>
    );
};

export { AdminProvider, AdminContext };
