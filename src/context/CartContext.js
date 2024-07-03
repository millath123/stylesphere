import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);

    case 'INCREMENT_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREMENT_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = product => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = id => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const incrementQuantity = id => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
  };

  const decrementQuantity = id => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
