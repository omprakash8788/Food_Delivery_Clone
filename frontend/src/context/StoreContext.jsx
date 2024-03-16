// here we can create one context
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null);
// now we create StoreContext Provider function
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // add functionality add to cart and remove to cart

  // AddToCart logic
  const addToCart = (itemId) => {
    // first we will check if the user is adding the product first time in the cart
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // RemoveToCart logic
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //CartTotal logic
  const getTotalCartAmount = () => {
    let totalAmout = 0;
    for (const item in cartItems) {
      if (cartItems[item]>0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmout += itemInfo.price * cartItems[item];
      }
    }
    return totalAmout;
  };

  // useEffect(()=>{
  //   console.log(cartItems);

  // },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
