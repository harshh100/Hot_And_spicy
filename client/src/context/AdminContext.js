import React, { createContext, useState } from 'react';
import jwt_decode from 'jwt-decode';


const AdminContext = createContext();

const AdminProvider = ({ children }) => {

    const [Isadmin, setIsadmin] = useState(false);

    const checkAdmin = () => {
        const token = localStorage.getItem('token');
        const decoded = token ? jwt_decode(token) : { role: 'harsh' };
        if (decoded.role === 'admin') {
            setIsadmin(true);
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
