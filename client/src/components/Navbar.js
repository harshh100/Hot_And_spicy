import React from 'react'
import Logo from './Img/h_&_s_black.png'
import { Link } from "react-router-dom";
import cart_img from './Img/cart.png';
import { useCartContext } from "../context/cart_context";


export default function Navbar() {

    const { total_item } = useCartContext();
    // console.log(total_item);
    // let no_itms = cart.length;
    return (
        <>
            <nav className='Navmain'>
                <div className='nav_center'>
                    <ul className='List'>
                        <li className='navitom'>
                            <Link to="/" className='fontco'>Home</Link>
                        </li >
                        <li className='navitom'>
                            <Link to="/about" className='fontco'>AboutUs</Link>
                        </li>
                        <li className='navitom'>
                            <Link to="/admin/login">
                                <img src={Logo} alt="Logo" className='logonav' />
                            </Link>
                        </li>

                        <li className='navitom'>
                            <Link to="/menu" className='fontco'>Menu</Link>
                        </li>
                        <li className='navitom'>
                            <Link to="/cart" className='cart-trolley--link fontco'>
                                <img src={cart_img} alt="Cart" className='cart-trolley cart_img' />
                                {/* <FiShoppingCart className="cart-trolley" /> */}
                                <span className="cart-total--item"> {total_item} </span>
                            </Link>
                        </li>
                    </ul >
                </div >

            </nav >
        </>
    )
}

