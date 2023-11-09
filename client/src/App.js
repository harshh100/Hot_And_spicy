import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Itm_list';
import './App.css';
import Contact from './components/Contact';
import React from 'react';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Unknownurl from './components/Unknownurl';
import Cart from './components/Cart';
import { Toaster } from 'react-hot-toast';
// import Receipt from './components/Receipt';
import Order_details from './components/Order_details';
import Login from './components/Login';
import AdminHome from './components/adminhome';
// import { useAuth } from './context/AuthContext';
// import jwt_decode from 'jwt-decode';
import Protected from './components/Protected';
// import UserLayout from './components/UserLayout';
// import AdminLayout from './components/AdminLayout';

function App() {

  return (
    <>
      <div className='mainapp'>
        <div className="RouterDiv">
          <Router>
            <Navbar />
            <div className='tost_msg'>
              <Toaster position='top-center' reverseOrder={false} />
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/admin/login' element={<Login />} />
              <Route path='/admin/orderdetails' element={<Protected Component={Order_details} />} />
              <Route path='/admin/adminhome' element={<Protected Component={AdminHome} />} />
              {/* <Route path='/admin/home' element={<AdminHome />} /> */}
              <Route path='*' element={<Unknownurl />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </div >
    </>



  );
}
export default App;
