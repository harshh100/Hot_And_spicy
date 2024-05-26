/* api req */
import axios from "axios"
import toast from "react-hot-toast";
// import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = process.env.H_and_S_SERVER_DOMAIN;
// const { userName, userPhone, totime, otpverified } = useOrderContext();
// const { cart, total_price } = useCartContext();



export async function getallitms() {
    try {
        console.log("get all itms" + axios.defaults.baseURL)

        const { data } = await axios.get('api/getItems')
        return data;
    } catch (error) {
        return Promise.reject({ error: "Error To Finding Data" })
    }
}

export async function adminlogin({ username, password }) {
    const toastId = toast.loading('verifing...');
    try {
        // console.log(username)
        if (username) {
            const { data } = await axios.post('http://localhost:8080/api/adminlogin', { username, password })
            // console.log(data);
            const { token } = data;
            // console.log(token);

            if (!token) {
                toast.error("Wrong Credentials", { id: toastId })
                // console.log('Token is invalid:', token);
                // return;
                return Promise.reject({ error: "Error To Login" })
            }
            localStorage.setItem('token', token);
            toast.success("Login Successfully", { id: toastId })
            // return token;
            // const token = data.token;
            // Navigate('/');
            // console.log(token);
            return Promise.resolve();
        } else {
            toast.error("Wrong Credentials", { id: toastId })
            return Promise.reject({ error: "Error To Login" })

        }
    } catch (error) {
        console.error('Error:', error);
        toast.error("Wrong Credentials", { id: toastId })
        // return;S
        return Promise.reject({ error: "Error To Login" })
    }
}


export async function updateItems(response) {
    try {

        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateItems', response, { headers: { "Authorization": `Bearer ${token}` } });

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error: "Couldn't Update Data...!" })
    }
}


export async function bookorder(userName, userPhone, receiptNo, totime, cart, total_price) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format hours and minutes to ensure they have leading zeros if needed
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let CurrentTime = formattedHours + ':' + formattedMinutes;

    // console.log(`Current time: ${formattedHours}:${formattedMinutes}`);
    try {
        console.log("Sending data:", { username: userName, userPhone: userPhone, ReceiptNo: receiptNo, Take_time: totime, cart: cart, TotalPrice: total_price, Ordertime: CurrentTime });
        await axios.post('http://localhost:8080/api/createorder', { username: userName, userPhone: userPhone, ReceiptNo: receiptNo, Take_time: totime, cart: cart, TotalPrice: total_price, Ordertime: CurrentTime })
        toast.success("Your order has been Booked")
        return Promise.resolve()
    } catch (error) {
        // console.log(error)
        toast.error("Error To Create Order");
        return Promise.reject({ error: "Error To Create Order " + error })
    }
}