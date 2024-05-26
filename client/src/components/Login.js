import React, { useEffect, useState, useContext } from 'react'
import styled from "styled-components";
import { adminlogin } from "../helper/helper";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Img/h_&_s_black.png'
import { AdminContext } from '../context/AdminContext';



function Login() {

    const [adminname, setadminname] = useState('');
    const [adminpassword, setadminpassword] = useState('');
    const navigate = useNavigate();

    const { setIsadmin, checkAdmin, Isadmin } = useContext(AdminContext);


    // const handleLogin = async () => {
    //     const token = await adminlogin({ username: adminname, password: adminpassword });
    //     if (token) {
    //         localStorage.setItem('token', token);
    //         navigate('/admin/adminhome');
    //     }
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         const decoded = jwt_decode(token);
    //         // console.log(decoded);
    //         if (decoded.role === "admin") {
    //             navigate('/admin/orderdetails');
    //         }
    //     }
    // }, []);

    useEffect(() => {
        const validate = async () => {
            await checkAdmin();
            console.log("Isadmin in login: " + Isadmin);
            if (Isadmin) {
                navigate('/admin/orderdetails');
            } else {
                navigate('/admin/login');
            }
        };
        validate();
    }, [Isadmin, checkAdmin, navigate]);

    return (
        <Wrapper>
            <div className="con">
                <center>
                    <div className="imgcon">
                        <img src={Logo} alt="logo" className="logo" />
                    </div>
                </center>

                <div className="login_container">
                    <div className="con-itm">
                        <label htmlFor="uname"><b>UserName</b></label>
                        <input type="text" placeholder="Enter UserName" value={adminname} onChange={(e) => setadminname(e.target.value)} name="username" className="inp" required />
                    </div>
                    <div className="con-itm">
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value={adminpassword} onChange={(e) => setadminpassword(e.target.value)} name="password" className="inp" required />
                    </div>
                    <center>
                        <div className="con-itm1">
                            <button type="submit" onClick={() => adminlogin({ username: adminname, password: adminpassword }).then(function () { setIsadmin(true); navigate('/admin/orderdetails') })}>Login</button>
                        </div>
                    </center>
                </div>
            </div>
        </Wrapper>)
}

const Wrapper = styled.section`        
.con {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
}

.logo {
    width: 300px;
    margin: 10px auto;
}

.login_container {
    margin: 10px auto;
    padding: 20px;
    width: 38%;
    background-color: #ffffff;
}

.imgcon {
    margin: 50px 0px;
    margin-bottom: 0px;
}

.con input {
    border-style: solid;
    border-color: #b3b3b3;
    border-width: 1px;

}

.inp {
    width: 100%;
    padding: 12px 12px;
    text-decoration: none;
}

.con button {
    width: 100%;
    background-color: #f19f04;
    border-radius: 30px;
    color: #ffffff;
    padding: 10px 12px;
    cursor: pointer;
}

.con-itm {
    display: block;
    margin: 10px;
}

.ex-link {
    margin: 20px;

}

.con a {
    text-decoration: none;
    color: black;
}

.con-itm1 a {
    color: white;
}`;


export default Login