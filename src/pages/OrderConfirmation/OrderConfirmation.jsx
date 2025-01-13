import React, { useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCart([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [setCart]);

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1>Commande Confirmée !</h1>
        <p>Votre colis est en cours de préparation</p>

        <div className="delivery-animation">
          <div className="package">📦</div>
        </div>

        <div className="confirmation-details">
          <h2>Merci pour votre commande !</h2>
          <p>Vous recevrez bientôt un email de confirmation</p>
          <p className="estimated-delivery">
            Livraison estimée :{" "}
            {new Date(Date.now() + 432000000).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
