import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-confirmation");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="order-summary">
          <h2>Récapitulatif de la commande</h2>
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p className="price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
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
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total</h3>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="checkout-form">
          <h2>Informations de livraison</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Nom" required />
              <input type="text" placeholder="Prénom" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Téléphone" required />
            <input type="text" placeholder="Adresse" required />
            <div className="form-group">
              <input type="text" placeholder="Code postal" required />
              <input type="text" placeholder="Ville" required />
            </div>
            <button type="submit" className="checkout-button">
              Valider la commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
