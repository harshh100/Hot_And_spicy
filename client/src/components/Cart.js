import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";
import Formateprice from '../helper/Formateprice';
import cartlogo from './Img/cart.png'
import Receipt from './Receipt';
import toast from 'react-hot-toast';
import { MdVerified, MdCancel } from "react-icons/md"
// import { saveAs } from 'file-saver';
// import { useReactToPrint } from 'react-to-print';
// import { ReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';
import { useOrderContext } from '../context/Order_context';
import { bookorder } from '../helper/helper'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, total_price } = useCartContext();
  const { userName, userPhone, receiptNo, totime, otpverified, userotp, setuserName, setuserPhone, sendotp, setuserotp, otpverify, settotime, afterorder } = useOrderContext();
  // console.log(cart);

  const [paymentMode, setPaymentMode] = React.useState("offline");

  const navigate = useNavigate();

  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };

  function printDocument() {

    bookorder(userName, userPhone, receiptNo, totime, cart, total_price)
      .then(() => {
        const contentElement = document.getElementById('receipt');

        // console.log("Cartcomponent");
        // console.log(cart);
        // Convert HTML to PDF
        html2pdf().from(contentElement).set({
          margin: [5, -7, 10, 10] // top, right, bottom, left
        }).save('H&S_receipt.pdf');
        afterorder();
        navigate('/');
        return;

      })
  }

  function Verify_frist() {
    return toast.error("You Need To Verify OTP FRIST!!");
  }

  if (cart.length === 0) {
    return (
      <div className="emt_cart">
        <div className="row justify-content-center today_sty_text">
          <div className="col-md-7 text-center heading-section ftco-animate pop-outin">
            <span className="subheading">Your</span>
            <h2 className="mb-4">Yummy Cart Is Empty !!</h2>
            <div>
              <Link to='/menu'>Add Items</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row justify-content-center today_sty_text">
        <div className="col-md-7 text-center heading-section ftco-animate pop-outinf">
          <span className="subheading">Your</span>
          <h2 className="mb-4">Yummy Cart</h2>
        </div>
      </div>
      <div className="cart_data_itm">
        <Wrapper>
          <div className="cart_container">
            <div className="cart_heading grid grid-five-column">
              <p>Item</p>
              <p className="cart-hide">Price</p>
              <p>Quantity</p>
              <p className="cart-hide">Subtotal</p>
              <p>Remove</p>
            </div>
            <hr />

            <div className="cart-item">
              {/* <Scrollbars style={{ height: 600 }} className="cart-item"> */}
              {cart.map((curElem) => {
                return <CartItem key={curElem.name} {...curElem} />;
              })}
              {/* </Scrollbars> */}
            </div>
          </div>
        </Wrapper >
        {/* {console.log("Cart userName : " + userName + ", userPhone : " + userPhone)} */}
        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div className="order-info">
              <div className="final_order">
                <p className='rc_name'>Name : </p>
                <input className="f_inp" id="Username" name="Username" value={userName} onChange={(e) => setuserName(e.target.value)} placeholder="  Enter Name" type="text" />
              </div>
              <div className="final_order">
                <p className='takeover'>Take-Over Time : </p>
                <p>
                  <input type="time" id="timeInput" value={totime} onChange={(e) => settotime(e.target.value)} />
                </p>
              </div>
              <div className="payment_mode">
                <p>Payment Mode:</p>
                <label>
                  <input
                    type="radio"
                    value="offline"
                    checked={paymentMode === "offline"}
                    onChange={() => handlePaymentModeChange("offline")}
                  />
                  At shop
                </label>
                <label>
                  <input
                    type="radio"
                    value="online"
                    checked={paymentMode === "online"}
                    onChange={() => handlePaymentModeChange("online")}
                  />
                  Online
                </label>
              </div>
              <div className="final_order">
                <p>Mobile Number : </p>
                <span id='sp91'>+91</span>
                <input className="f_inp" id="Phone_No" name="Phone_No" value={userPhone} onChange={(e) => setuserPhone(e.target.value)} placeholder="  Enter Phone No" type="tel" maxLength="10" />
                {paymentMode === "offline" && (
                  <button onClick={() => sendotp(userPhone, userName)}> Send OTP</button>
                )}
              </div>
              {paymentMode === "offline" && (
                <div className="final_order">
                  <p className='rc_otp'>OTP : </p>
                  <input className="f_inp" id="OTP" name="OTP" value={userotp} onChange={(e) => setuserotp(e.target.value)} placeholder="  Enter OTP" type="number" />
                  <button onClick={() => otpverify(userPhone, userotp)}> Verify OTP</button>
                </div>
              )}
              <div className="final_order">
                <p>Total Order : </p>
                <p>
                  <Formateprice price={total_price} />
                </p>
              </div>
              {paymentMode === "offline" && (
                <>
                  <div className="final_order">
                    <p>Verified : {otpverified ? <MdVerified className="Verified_icon" /> : <MdCancel className="Notverified_icon" />}</p>
                  </div>
                  <div className="order_warn">
                    <p>Only Verified Person Can Make Order * </p>
                  </div>
                </>
              )}
            </div>
            <hr />

            <div id="btndiv">
              {/* <Link to="/bookorder"> */}
              {/* <button type="submit" id="buttonorder">Order Now</button> */}
              <button className="button" onClick={otpverified ? printDocument : Verify_frist}> Book The Order <img src={cartlogo} alt="icon" id='cart' />
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <Receipt userName={userName} userPhone={userPhone} />
      </div>
    </>
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
  max-height: 460px;
  overflow-y: scroll;
  margin: 25px -60px 25px 110px;
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    display:grid;
    grid-template-columns: repeat(4, 1fr) 0.3fr;
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
      background: none;
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

export default Cart;