import toast from 'react-hot-toast';

const orderReducer = (state, action) => {

    switch (action.type) {
        case "SETUSERNAME":
            // console.log("name : " + action.payload)
            return {
                ...state,
                otpverified: false,
                userName: action.payload,
            };

        case "SETTOTIME":
            // console.log("time : " + action.payload)

            const selectedTime = action.payload;
            const selectedHours = parseInt(selectedTime.split(':')[0]);

            if (selectedHours < 10 || selectedHours >= 22) {
                // alert('Please select a time between 10:00 AM and 10:00 PM.');
                toast.error("Please select a time between 10:00 AM and 10:00 PM.")
                return state;

            }

            // setTime(selectedTime);

            return {
                ...state,
                totime: action.payload,
            };

        case "SETOTP":
            // console.log("otp : " + action.payload)
            return {
                ...state,
                userotp: action.payload,
            };

        case "SETUSERPHONE":
            // console.log("monumber : " + action.payload)
            const regex = /^[0-9]+$/;
            const checkphone = regex.test(action.payload) || action.payload === '';
            if (!checkphone) {
                toast.error("Enter Valid Phone Number")
                return { ...state }
            }
            return {
                ...state,
                otpverified: false,
                userPhone: action.payload,
            };

        // case "SETRECEIPTNO":
        //     // function generateRandomSixDigitNumber() {
        //     //     // Generate a random number between 100,000 and 999,999 (inclusive)
        //     //     const min = 100000;
        //     //     const max = 999999;
        //     //     return Math.floor(Math.random() * (max - min + 1)) + min;
        //     // }
        //     // const randomSixDigitNumber = generateRandomSixDigitNumber();
        //     // const rn = randomSixDigitNumber + state.userName;
        //     return {
        //         ...state,
        //         // otpverified:false,
        //         receiptNo: rn,
        //     };

        case "VERIFICATIOIN":

            function generateRandomSixDigitNumber() {
                // Generate a random number between 100,000 and 999,999 (inclusive)
                const min = 100000;
                const max = 999999;
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            const randomSixDigitNumber = generateRandomSixDigitNumber();
            const rn = randomSixDigitNumber + state.userName;
            // console.log("rn: " + rn)
            return {
                ...state,
                // otpverified:false,
                receiptNo: rn,
                otpverified: true,
            };

        case "SET_API_DATA":
            // const featureData = action.payload.filter((curElem) => {
            //     return curElem.featured === true;
            // });
            const featureData = action.payload.reduce((subitms, itm) => {
                subitms.push(...itm.subitms.filter((subitm) => subitm.featured === true));
                return subitms;
            }, []);

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };

        case "AFTERORDER":
            return {
                ...state,
                otpverified: false,
                userotp: "",
                receiptNo: "",
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
}

export default orderReducer;
