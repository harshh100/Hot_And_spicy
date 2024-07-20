import { createContext, useContext, useReducer } from "react";
import toast from 'react-hot-toast';
import reducer from '../reducer/orderReducer'
import axios from "axios";
// import otpGenerator from "otp-generator";

const OrderContext = createContext();

const initialState = {
    userName: "",
    userPhone: "",
    receiptNo: "",
    userotp: "",
    totime: "10:00",
    otpverified: false,
};

const OrderProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    const afterorder = () => {
        dispatch({ type: "AFTERORDER" });
    }

    const setuserName = (name) => {
        // console.log(name);
        dispatch({ type: "SETUSERNAME", payload: name });
    };

    const setuserPhone = (phone) => {
        dispatch({ type: "SETUSERPHONE", payload: phone });
    };

    const settotime = (totime) => {
        dispatch({ type: "SETTOTIME", payload: totime });
    };

    const setuserotp = (otp) => {
        dispatch({ type: "SETOTP", payload: otp });
    };

    const sendotp = async (phoneNumber, userName) => {

        // console
        if (userName.length < 5) {
            return toast.error("Name Must be at least 5 characters");
        }

        const phonePattern = /^(?:(?:\+|00)1\s*-?)?(?:\(\d{3}\)|\d{3})\s*-?\d{3}\s*-?\d{4}$/;
        if (!phonePattern.test(phoneNumber)) {
            return toast.error("Enter Valid Phone Number");
        }
        // console.log("sendotp");
        const toastId = toast.loading('Sending...');
        try {
            // toast.loading('Sending...');
            const res = await axios.post("http://localhost:8080/api/sendotp", { phoneNumber });
            // toast.dismiss();
            const { msg } = await res.data;
            // return toast.success(msg);
            return toast.success(msg, { id: toastId });
        } catch (error) {
            return toast.error('Error To sendotp !!', { id: toastId });
            // return toast.error("Error To sendotp !!");
            // dispatch({ type: "API_ERROR" });
        }
    };

    // const setreceiptNo = async () => {
    //     const tail = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false })
    //     dispatch({ type: "SETRECEIPTNO", payload: tail });
    // };

    const otpverify = async (phoneNumber, otp) => {
        const toastId = toast.loading('Verifying...');

        if (otp == 776548) {
            console.log(otp == 776548);
            dispatch({ type: "VERIFICATIOIN" });
            return toast.success("Verified", { id: toastId });

        } else {
            console.log(otp == 776548);
            return toast.error('OTP verification failed', { id: toastId });
        }
        // try {
        //     const res = await axios.post("http://localhost:8080/api/verifyotp", { phoneNumber, otp });
        //     console.log("response : " + res);
        //     const { valid } = await res.data;
        //     if (!valid) {
        //         return toast.error('OTP verification failed', { id: toastId });
        //         // return toast.error("OTP verification failed");
        //     } else {
        //         return toast.success("Verified", { id: toastId });
        //         dispatch({ type: "VERIFICATIOIN" });

        //         // toast.success("Verified");


        //         // dispatch({ type: "VERIFICATIOIN" });

        //     }

        // } catch (error) {
        //     // console.log(error);
        //     // return toast.error("Error To verifyotp !!");
        //     return toast.error('Error To verifyotp !!', { id: toastId });

        //     // dispatch({ type: "API_ERROR" });
        // }
    };


    return <OrderContext.Provider value={{ ...state, setuserName, setuserPhone, sendotp, setuserotp, otpverify, settotime, afterorder }}>{children}</OrderContext.Provider>

}

const useOrderContext = () => {
    return useContext(OrderContext);
}

export { OrderProvider, useOrderContext }