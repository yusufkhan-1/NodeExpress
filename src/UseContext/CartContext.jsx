import React, { createContext, useContext, useState } from 'react';
import './styles.css';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const MAX_ITEMS = 10;

  const addItem = (item) => {
    setCartItems((prevItems) => {
      if (prevItems.length >= MAX_ITEMS) return prevItems;
      return prevItems.includes(item) ? prevItems : [...prevItems, item];
    });
  };

  const removeItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const toggleItem = (item) => {
    cartItems.includes(item) ? removeItem(item) : addItem(item);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, toggleItem, MAX_ITEMS }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
