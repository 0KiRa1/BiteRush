import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({})

    const addToCart = (itemId) => {
        if(!cartItem[itemId]) {
            setCartItem((prev)=>({...prev, [itemId]: 1}))
        } else {
            setCartItem((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) => {
        if(cartItem[itemId] > 0) {
            setCartItem((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
        }
    }

    const totalCartAmount = ()=>{
        let total = 0;
        for(const item in cartItem) {
            if(cartItem[item] > 0) {
                let itemInfo = food_list.find((product)=>product._id === item);
                total += itemInfo.price * cartItem[item];
            }
        }
        return total;
    }

    const increaseQuantity = (id) => {
        setCartItem((prev) => ({
          ...prev,
          [id]: (prev[id] || 0) + 1,
        }));
      };
      
    const decreaseQuantity = (id) => {
        setCartItem((prev) => ({
            ...prev,
            [id]: prev[id] > 1 ? prev[id] - 1 : 0,
        }));
    };
    

    const contextVal = {
        food_list,
        cartItem, 
        setCartItem, 
        addToCart,
        removeFromCart,
        totalCartAmount,
        increaseQuantity,
        decreaseQuantity

    }

    return (
        <StoreContext.Provider value={contextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;