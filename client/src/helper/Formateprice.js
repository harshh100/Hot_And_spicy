import React from 'react'

function Formateprice({ price }) {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(price / 1);
}

export default Formateprice