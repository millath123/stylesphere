import React from 'react';
import { useCart } from '../../context/CartContext';
import '../../components/Cart/Cart.css';
import Header from '../../components/Header/Header';
import emptyCartAnimation from '../../assets/emptyCart.json';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';
import { IoMdTrash } from "react-icons/io";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getCartTotal } = useCart();

  return (
    <div>
      <Header />
      <div className='cart-container'>
        <div className="cart">
          <h1>YOUR CART</h1>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center' }}>
             
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Lottie
                  loop
                  animationData={emptyCartAnimation}
                  play
                  style={{ width: 400, height:400 }}
                />
              </div>
            </div>
          ) : (
            <>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className='cart-items-details'>
                      <div>
                        <h3>{item.title}</h3>
                        <p>Price: Rs.{item.price}</p>
                      </div>
                      <div className="quantity-actions">
                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                      </div>
                      <div>
                        <button onClick={() => removeFromCart(item.id)}><IoMdTrash /></button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <h3 className="total-price">Total Price: Rs.{getCartTotal().toFixed(2)}</h3>
            </>
          )}
          <Link to="/" className="backtohome">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
