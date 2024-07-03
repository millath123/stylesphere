import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getCartTotal } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Rs.{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-actions">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: Rs.{getCartTotal().toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
