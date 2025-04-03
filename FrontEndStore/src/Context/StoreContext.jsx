import { createContext } from "react";
import { useState,useEffect } from "react";
export const StoreContext = createContext(null);
import { food_list } from "../assets/assets";
const StoreContextProvider =(props)=>{

const url = "http://localhost:4000"
const[cartItems,setCartItems] = useState({});
const[token,setToken] = useState("")
const addToCart=(itemId)=>{
    if(!cartItems[itemId]){
        setCartItems((prev)=>({...prev,[itemId]:1}))
    }else{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
}
const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])
    const contextValue = {
    addToCart,cartItems,removeCart,url,token,setToken,food_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;