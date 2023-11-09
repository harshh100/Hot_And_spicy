import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/Itmreducer"
// import axios from "axios";



const AppContext = createContext();

const API = "http://localhost:8080/api/getItems";


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
};

const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);

    //get data
    const getallitms = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            // console.log("response : " + res);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    useEffect(() => {
        getallitms(API);
    }, []);


    return (
        <AppContext.Provider value={{ ...state, getallitms }} >{children}</AppContext.Provider>
    )
}

//custom hook
const useAppContext = () => {
    return useContext(AppContext);
}


export { AppProvider, useAppContext }
