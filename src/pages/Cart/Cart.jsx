import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cart.length === 0)
    return <p className="cart-empty">Votre panier est vide.</p>;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Votre Panier</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </div>
          ))}
        </div>

        <div className="checkout-cart">
          <h2>Total: ${total.toFixed(2)}</h2>
          <Link to="/checkout">
            <button>Procéder au paiement</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
