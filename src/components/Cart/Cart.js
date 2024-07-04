import React from 'react';
import { useCart } from '../../context/CartContext';
import '../../components/Cart/Cart.css';
import Header from '../../components/Header/Header'
import emptyCartAnimation from '../../assets/emptyCart.json';
import Lottie from 'react-lottie-player';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getCartTotal } = useCart();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <p>Your cart is empty</p>
          <Lottie loop  animationData={emptyCartAnimation}
            play
            style={{ width: 300, height: 300 }}
          />
        </div>
      ) :(
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
        )}<div>
        <Link to="/"><p>Back to home</p></Link>
        </div>

      </div>
      
    </div>

  );
};

export default Cart;
