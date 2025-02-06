import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const USD_TO_INR = 83; // Conversion rate (update if needed)

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            {/* Convert price to INR */}
            <p>Price: ₹{(item.price * USD_TO_INR).toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && <button className="checkout-btn">Checkout</button>}
    </div>
  );
};

export default Cart;
