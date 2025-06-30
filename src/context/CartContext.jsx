import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists
        ? prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const clearCart = () => setCartItems([]);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity}}
    >
      {children}
    </CartContext.Provider>
  );
};
