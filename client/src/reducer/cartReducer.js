const cartReducer = (state, action) => {
    // console.log(action.type);
    if (action.type === "ADD_TO_CART") {
        let { name, price, stock, amount } = action.payload;
        // console.log(state.cart);
        const existingItemIndex = state.cart.findIndex(itm => itm.name === name);

        if (existingItemIndex !== -1) {
            // If the item already exists, increment the amount
            // console.log("normal : " + state.cart[existingItemIndex].amount)
            // console.log("addToCart was called from:");
            // console.trace();
            state.cart[existingItemIndex].amount += 1;

            // console.log("++ : " + state.cart[existingItemIndex].amount)
            return {
                ...state,
                cart: [...state.cart],
            }
        } else {

            let cartProduct = {
                name: name,
                price: price,
                stock: stock,
                amount: amount,
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }

    if (action.type === "REMOVE_ITEM") {
        // console.log(action.type);
        let updatedCart = state.cart.filter(
            (curItem) => curItem.name !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "INCREASE_ANOUNT") {
        // console.log(action.payload);
        let { name, stock } = action.payload;
        let t_cart = state.cart;
        // console.log("state : " + JSON.stringify(state.cart));
        // console.log("Cart" + JSON.stringify(t_cart[0]) + "\n" + "name : " + name);
        const updatedCart = t_cart.map(item => {
            if (item.name === name) {

                // let new_amount = 1;
                return {
                    ...item,
                    amount: item.amount < stock ? item.amount + 1 : stock,
                    // amount: item.amount + 1,
                };
            }
            return item;
        });

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "DECREASE_ANOUNT") {
        // console.log(action.type);
        let { name, stock } = action.payload;
        let t_cart = state.cart;
        // console.log("state : " + JSON.stringify(state.cart));
        // console.log("Cart" + JSON.stringify(t_cart[0]) + "\n" + "name : " + name);
        const updatedCart = t_cart.map(item => {
            if (item.name === name) {
                return {
                    ...item,
                    amount: item.amount > 1 ? item.amount - 1 : 1,
                    // amount: item.amount - 1,
                };
            }
            return item;
        });

        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CART_TOTAL_ITEM") {
        // console.log(action.type);
        let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
            let { amount } = curElem;

            initialVal = initialVal + amount;
            return initialVal;
        }, 0);

        return {
            ...state,
            total_item: updatedItemVal,
        };
    }

    if (action.type === "CART_TOTAL_PRICE") {
        let total_price = state.cart.reduce((initialVal, curElem) => {
            let { price, amount } = curElem;

            initialVal = initialVal + price * amount;
            // 25000 + 0 = 25000
            // 10199 + 25000 = 121

            return initialVal;
        }, 0);

        return {
            ...state,
            total_price,
        };
    }

    if (action.type === "setuserName") {
        // console.log(action.type);
        const { name } = action.payload;
        return {
            ...state,
            userName: name,
        };
    }

    if (action.type === "SETUSERPHONE") {
        // console.log(action.type);
        const { phone } = action.payload;
        return {
            ...state,
            userPhone: phone,
        };
    }

    // if (action.type === "SENDOTP") {
    //     // console.log(action.type);
    //     const { status } = action.payload;
    //     return {
    //         ...state,
    //         verified: false,
    //     };
    // }



    return state;
}

export default cartReducer;