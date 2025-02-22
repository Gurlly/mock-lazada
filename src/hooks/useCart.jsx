
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (newItem) => {
      console.log(cartItems)
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    };

    const clearCart = () => setCartItems([]);
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};