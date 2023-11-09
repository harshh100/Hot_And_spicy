import React, { useContext } from 'react';
import { useName } from '../context/Itmcontext';


const Footer = () => {
    // const { name } = useName();
    return (
        <footer className="footer">
            <div className="con">
                <hr />
                <div className="row">
                    <div className="footer-col">
                        <h4>H & S</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Payment Options</h4>
                        <ul>
                            <li><a href="#">Gpay</a></li>
                            <li><a href="#">Phonepe</a></li>
                            <li><a href="#">paytm</a></li>
                            <li><a href="#">UPI</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Buy</h4>
                        <ul>
                            <li><a href="#">Pizza</a></li>
                            <li><a href="#">Maggi</a></li>
                            <li><a href="#">Garlic Toast</a></li>
                            <li><a href="#">Bread</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Open Hours</h4>
                        <ul className='open_time'>
                            <li><a href="#"><span>Monday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Tuesday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Wednesday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Thursday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Friday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Saturday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                            <li><a href="#"><span>Sunday : </span><span className='day_time'>9:00 - 24:00</span></a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <p className="text-center">© Hot & Spicy 2023</p>
        </footer>
        // <footer>
        //     <hr />
        //     <p className="text-center">© Hot & Spicy 2023</p>
        // </footer>
    );
};

export default Footer;
