import React from "react";
import FormatPrice from "../helper/Formateprice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ name, price, stock, amount }) => {
    const { removeItem, setIncrease, setDecrease } = useCartContext();

    return (
        <div className="cart_heading grid grid-five-column">
            <div className="cart-image--name">
                <p>{name}</p>
            </div>
            {/* price   */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* Quantity  */}
            <CartAmountToggle
                name={name}
                stock={stock}
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />

            {/* //Subtotal */}
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(name)} />
            </div>
        </div >
    );
};

export default CartItem;