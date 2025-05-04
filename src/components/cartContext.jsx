import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(stored);
  }, []);

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    let updated;

    if (existing) {
      updated = cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updated = [...cartItems, { ...product, qty: 1 }];
    }

    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const resetOrder = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    setIsModalOpen(false);
  };
   

  const confirmOrder = () => {
    setIsModalOpen(true);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, resetOrder,confirmOrder,isModalOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
