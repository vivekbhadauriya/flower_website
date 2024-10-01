import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; 
import "../components/AppCss.css"

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          console.log('Cart items:', cartItems);
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.price} Rs x {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {calculateTotal()} Rs</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
