import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import Formateprice from '../helper/Formateprice';
// import cartlogo from './Img/cart.png'
import Logo from './Img/h_&_s_black.png'

import React from "react";
import FormatPrice from "../helper/Formateprice";
import { useOrderContext } from "../context/Order_context";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { html2pdf } from "html2pdf.js";
// import html2pdf from 'html2pdf.js';

// import { useCartContext } from "../context/cart_context";
// { userName, userPhone, receiptNo }
const Receipt = () => {
  const { cart, total_price } = useCartContext();
  const { userName, userPhone, receiptNo, totime } = useOrderContext();
  // console.log("userName : " + userName + ", userPhone : " + userPhone);

  return (
    <div id="receipt">
      {/* <button onClick={printDocument}>Generate Receipt</button> */}
      {/* <p>Receipt No : {receiptNo}</p> */}
      <div className="receipt_logo">
        <img id="rc_img" src={Logo} alt="" />
      </div>
      <div className="row justify-content-center today_sty_text">
        <div className="col-md-7 text-center heading-section ftco-animate pop-outinf">
          <span className="subheading">Your</span>
          <h2 className="mb-4">Order Receipt</h2>
        </div>
      </div>
      <div className="cs_info">
        <p>Name : {userName}</p>
        <p>Mobile No : {userPhone}</p>
        <p>Receipt No : {receiptNo}</p>
        <p>Take-Over Time : {totime}</p>
      </div>
      <div className="receipt_data_itm">
        <Wrapper>
          <div className="cart_container">
            <div className="cart_heading grid grid-five-column">
              <p>Item</p>
              <p className="cart-hide">Price</p>
              <p>Quantity</p>
              <p className="cart-hide">Subtotal</p>
            </div>
            <hr />

            <div className="cart-item">
              {/* <Scrollbars style={{ height: 600 }} className="cart-item"> */}
              {cart.map((curElem) => {
                // return <CartItem key={curElem.name} {...curElem} />;
                return (<div className="cart_heading grid grid-five-column" key={curElem.name}>
                  <div className="cart-image--name">
                    <p>{curElem.name}</p>
                  </div>
                  {/* price   */}
                  <div className="cart-hide">
                    <p>
                      <FormatPrice price={curElem.price} />
                    </p>
                  </div>

                  {/* Quantity  */}
                  <div className="amount-style">{curElem.amount}</div>

                  {/* //Subtotal */}
                  <div className="cart-hide">
                    <p>
                      <FormatPrice price={curElem.price * curElem.amount} />
                    </p>
                  </div>
                </div >)

              })}
              {/* </Scrollbars> */}
            </div>
            <hr />
            <div className="order-total--subdata">
              <div className="receipt_order">
                <p>Total Order : </p>
                <p>
                  <Formateprice price={total_price} />
                </p>
              </div>
            </div>
          </div>
        </Wrapper >

      </div>
    </div>
  );
};

const Wrapper = styled.section`

    padding: 1.5rem 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 3px 3px 0px 5px rgb(244 159 4 / 20%);
    width: 85%;
    // margin-left:20px;
    // max-height: 460px;
    // overflow-y: scroll;
    margin: 25px -60px 25px 110px;
    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
    }
  
    .grid-five-column {
      display:grid;
      grid-template-columns: repeat(4, 1fr);
      text-align: center;
      align-items: start;
    }
    .cart-heading {
      text-align: center;
      text-transform: uppercase;
    }
    hr {
      margin-top: 1rem;
    }
    .cart-item {
      padding: 1.2rem 0;
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }
  
    .cart-user--profile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.2rem;
      margin-bottom: 5.4rem;
  
      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }
      h2 {
        font-size: 2.4rem;
      }
    }
    .cart-user--name {
      text-transform: capitalize;
    }
    .cart-image--name {
      /* background-color: red; */
      align-items: center;
      display: grid;
      gap: 1rem;
      // grid-template-columns: 0.4fr 1fr;
      text-transform: capitalize;
      // text-align: left;
      img {
        max-width: 5rem;
        height: 5rem;
        object-fit: contain;
        color: transparent;
      }
  
      .color-div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
  
        .color-style {
          width: 1.4rem;
          height: 1.4rem;
  
          border-radius: 50%;
        }
      }
    }
  
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
  
      .btn-clear {
        background-color: #e74c3c;
      }
    }
  
    .amount-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      font-size:16px;
  
      button {
        border: none;
        color: #f49f04;
        cursor: pointer;
        padding: 2px;
        border-radius: 5px;
      }
  
      .amount-style {
        font-size: 20px;
      }
    }
  
    .remove_icon {
      font-size: 1.6rem;
      color: #f49f04;
      cursor: pointer;
    }
  
    .order-total--amount {
      width: 100%;
      margin: 4.8rem 0;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
  
      .order-total--subdata {
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
      div {
        display: flex;
        gap: 3.2rem;
        justify-content: space-between;
      }
  
      div:last-child {
        background-color: #fafafa;
      }
  
      div p:last-child {
        font-weight: bold;
        color: black;
      }
    }
  
    @media (max-width: black) {
      .grid-five-column {
        grid-template-columns: 1.5fr 1fr 0.5fr;
      }
      .cart-hide {
        display: none;
      }
  
      .cart-two-button {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        gap: 2.2rem;
      }
  
      .order-total--amount {
        width: 100%;
        text-transform: capitalize;
        justify-content: flex-start;
        align-items: flex-start;
  
        .order-total--subdata {
          width: 100%;
          border: 0.1rem solid #f0f0f0;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          padding: 3.2rem;
        }
      }
    }
  `;

// export default Receipt;
export default Receipt;


