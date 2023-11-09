import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import styled from "styled-components";
import axios from "axios";
import { BiSolidPhoneCall } from "react-icons/bi"
import { FaCartArrowDown } from "react-icons/fa"


function Order_details() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://localhost:8080/api/getOrders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Wrapper>
      <table class="responstable">
        <thead>
          <tr>
            <th>UserName</th>
            <th>ReceiptNo</th>
            <th>Price</th>
            <th>Time</th>
            <th>Order Itms</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        {/* { console.log("map orders : " + JSON.stringify(order.username)) } */}
        {/* <td>{order.cart}</td> */}
        {/* <td>{order.}</td> */}
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{order.username}</td>
              <td>{order.ReceiptNo}</td>
              <td>{order.TotalPrice}</td>
              <td>{order.Take_time}</td>
              <td>
                <p class="d-inline-flex gap-1">
                  <button class="btn btn-primary od_cart" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${index}`} aria-expanded="false" aria-controls={`collapseExample${index}`}>
                    <FaCartArrowDown /> View Cart
                  </button>
                </p>
                <div class="collapse" id={`collapseExample${index}`}>
                  <div class="card card-body">
                    <p><i>Order Time : {order.Ordertime}</i></p>
                    {order.cart.map((citm) => (
                      <p key={citm._id}>
                        <p><b>Itemname :</b> {citm.name},</p>
                        <p><b>price:</b> {citm.price}, </p>
                        <p><b>amount:</b>{citm.amount}, </p>
                        <p><b>itmTotalPrice:</b>{citm.price * citm.amount} <hr /></p>
                      </p>))
                    }
                  </div>
                </div>
              </td>
              {/* <td>{order.userPhone}</td> */}
              <td><button class="bookmarkBtn">
                <span class="IconContainer">
                  <BiSolidPhoneCall />
                </span>
                <p class="text">{order.userPhone}</p>
              </button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper >
  )
}

const Wrapper = styled.section`



.responstable {
  .bookmarkBtn {
  width: 140px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.349);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
}

.IconContainer {
  width: 30px;
  height: 30px;
  background: linear-gradient(to bottom, #FFCC80,rgb(244 159 4));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: 100px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition-duration: .3s;
  font-size: 1.04em;
}

.bookmarkBtn:hover .IconContainer {
  width: 130px;
  border-radius: 40px;
  transition-duration: .3s;
}

.bookmarkBtn:hover .text {
  transform: translate(10px);
  width: 0;
  font-size: 0;
  transition-duration: .3s;
}

.bookmarkBtn:active {
  transform: scale(0.95);
  transition-duration: .3s;
}
    margin: 1em auto;
    width: 85%;
    overflow: hidden;
    background: #FFF;
    color: black;
    border-radius: 10px;
    border: 1px solid #167F92;
  }
  .responstable tr {
    border: 1px solid #D9E4E6;
  }
  .responstable tr:nth-child(even) {
    background-color: #fdeccd75;
  }
  .responstable th {
    display: none;
    border: 1px solid #FFF;
    background-color: #f49f04;
    // color: #FFF;
    padding: 1em;
  }
  .responstable th:first-child {
    display: table-cell;
    text-align: center;
  }
  .responstable th:nth-child(2) {
    display: table-cell;
  }
  .responstable th:nth-child(2) span {
    display: none;
  }
  .responstable th:nth-child(2):after {
    content: attr(data-th);
  }
  @media (min-width: 480px) {
    .responstable th:nth-child(2) span {
      display: block;
    }
    .responstable th:nth-child(2):after {
      display: none;
    }
  }
  .responstable td {
    display: block;
    word-wrap: break-word;
    max-width: 7em;
  }
  .responstable td:first-child {
    display: table-cell;
    text-align: center;
    border: 1px solid #fdeccd;
  }
  @media (min-width: 480px) {
    .responstable td {
      border: 1px solid #fdeccd;
    }
  }
  .responstable th, .responstable td {
    text-align: left;
    margin: .5em 1em;
  }
  @media (min-width: 480px) {
    .responstable th, .responstable td {
      display: table-cell;
      padding: 1em;
    }
  }
  h1 {
    font-family: Verdana;
    font-weight: normal;
    color: #024457;
  }
  h1 span {
    color: #167F92;
  }`;


export default Order_details

