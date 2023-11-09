import React, { Component } from 'react'
import Logo from './Img/is_here.png'
import Imgbur from './Img/burgerimg-nobg.png'
import cart from './Img/cart.png'
import { Link } from "react-router-dom";
import Type_list from './Type_list'
import Services from './Services';
import { useAppContext } from '../context/Itmcontext';


// const today_special = [{ name: 'Masala Maggi', price: 40, ingredient: 'Maggi Noodles, Maggi Masala, Onion, Tomato, Capsicum' }, { name: 'Cheese Chilly Garlic Toast', price: 90, ingredient: 'Bread, Cheese, Chilly, Garlic' }, { name: 'Mexican Grilled', price: 80, ingredient: 'Bread,Mexican Salsa' }]

export default function Home() {

  const { featureProducts } = useAppContext();
  return (
    <>
      <div className="container my-2" id="homediv">
        <div className="fooddiv">
          <Link to="/">
            <img src={Imgbur} alt="foodimage" className="burimg" id="burimg" />
          </Link>
        </div>
        <div id="HomeLogoDiv">
          <div>
            <img src={Logo} alt="" id='logohome' />
          </div>
          <div id="btndiv">
            <Link to="/menu">
              {/* <button type="submit" id="buttonorder">Order Now</button> */}
              <button className="button"> Order Now <img src={cart} alt="icon" id='cart' />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='line_class'>
        <hr />
      </div>
      <div className="row justify-content-center today_sty_text">
        <div className="col-md-7 text-center heading-section ftco-animate pop-outin">
          <span className="subheading">Today's</span>
          <h2 className="mb-4">Special</h2>
        </div>
      </div>
      <div className='today_special'>
        {/* <img src={today_offer} alt="" className="today_offer" /> */}
        <div className="today_special_itm">
          <Type_list types={featureProducts} />
        </div>
      </div >
      <div className='line_class'>
        <hr />
      </div>
      <div className="row justify-content-center sevices_sty_text">
        <div className="col-md-7 text-center heading-section ftco-animate pop-outin">
          <span className="subheading">Our</span>
          <h2 className="mb-4">Services</h2>
        </div>
      </div>
      <Services></Services>


    </>
  )

}

