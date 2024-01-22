import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        try {
            const decoded = jwt_decode(token);
            // console.log(JSON.stringify(decoded));
            if (decoded.role !== "admin") {
                navigate('/admin/login');
            }
        } catch (error) {
            console.error('Invalid token:', error);
            localStorage.removeItem('token');
            navigate('/admin/login');
        }
    }, []);

    return (
        <div><Component /></div>
    )
}

export default Protected