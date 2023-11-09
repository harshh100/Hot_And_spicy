import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer"
import toast from 'react-hot-toast';
// import axios from "axios";


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("hpCart");
    if (!localCartData || localCartData === "undefined") {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (name, price, stock, amount) => {
        // console.log("amount of " + name + " is : " + amount);
        // alert(name + " added to your Cart !!")
        toast.success(`"${name}" Added In Cart !!`);
        dispatch({ type: "ADD_TO_CART", payload: { name, price, stock, amount } });
    };

    const removeItem = (name) => {
        // console.log(name);
        toast.success(`"${name}" Removed From Cart !!`);
        // toast.success('"' + name + '"' + ' Removed From Cart !!');
        dispatch({ type: "REMOVE_ITEM", payload: name });
    };

    const setDecrease = (name, stock) => {

        dispatch({ type: "DECREASE_ANOUNT", payload: { name, stock } });
    };

    const setIncrease = (name, stock) => {
        // console.log(name);
        // console.log("amount of " + name + " is : " + stock)
        dispatch({ type: "INCREASE_ANOUNT", payload: { name, stock } });
    };

    // to add the data in localStorage
    // get vs set

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });

        const cartHasChanged = JSON.stringify(state.cart) !== localStorage.getItem("hpCart");
        if (cartHasChanged) {
            localStorage.setItem("hpCart", JSON.stringify(state.cart));
        }
    }, [state.cart]);

    return <CartContext.Provider value={{ ...state, addToCart, removeItem, setIncrease, setDecrease }} >{children}</CartContext.Provider>;
};


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }