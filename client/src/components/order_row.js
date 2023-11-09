import React from 'react'

function order_row(props) {
    return (
        <tr>
            <td>{props.username}</td>
            <td>{props.ReceiptNo}</td>
            <td>{props.TotalPrice}</td>
            <td>{props.Take_time}</td>
            {/* <td>{order.cart}</td> */}
            {/* <td>{order.}</td> */}
        </tr>
    )
}

export default order_row