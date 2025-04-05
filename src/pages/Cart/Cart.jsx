import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calcul du total et du nombre d'articles
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty-container">
          <div className="cart-empty-icon">🛒</div>
          <h1>Votre panier est vide</h1>
          <p>Vous n'avez pas encore ajouté d'articles à votre panier.</p>
          <Link to="/products" className="continue-shopping-btn">
            Découvrir nos produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Votre Panier</h1>
        <p className="cart-items-count">
          {totalItems} article{totalItems > 1 ? "s" : ""}
        </p>
      </div>

      <div className="cart-container">
        <div className="cart-items-container">
          <div className="cart-items-header">
            <span className="header-product">Produit</span>
            <span className="header-price">Prix</span>
            <span className="header-quantity">Quantité</span>
            <span className="header-total">Total</span>
            <span className="header-action"></span>
          </div>

          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.title} />
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-category">{item.category}</p>
                  </div>
                </div>

                <div className="item-price">{item.price.toFixed(2)} €</div>

                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    aria-label="Réduire la quantité"
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Augmenter la quantité"
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  {(item.price * item.quantity).toFixed(2)} €
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Supprimer du panier"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping">
              ← Continuer mes achats
            </Link>
          </div>
        </div>

        <div className="cart-summary">
          <h2>Récapitulatif</h2>

          <div className="summary-row">
            <span>Sous-total</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>

          <div className="summary-row">
            <span>Frais de livraison</span>
            <span>
              {shipping === 0 ? "Gratuit" : `${shipping.toFixed(2)} €`}
            </span>
          </div>

          {shipping > 0 && (
            <div className="free-shipping-notice">
              Plus que {(100 - subtotal).toFixed(2)} € pour la livraison
              gratuite !
            </div>
          )}

          <div className="summary-total">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Procéder au paiement
          </Link>

          <div className="payment-methods">
            <span>Nous acceptons :</span>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">🏦</span>
              <span className="payment-icon">📱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
