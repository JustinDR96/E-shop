import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">E-shop</h3>
          <p className="footer-description">
            Votre destination pour des produits exceptionnels avec un service de
            qualité supérieure.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Liens Rapides</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/products">Tous les produits</Link>
            </li>
            <li>
              <Link to="/category/electronics">Électronique</Link>
            </li>
            <li>
              <Link to="/category/clothing">Vêtements</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li>
              <Link to="/contact">Contactez-nous</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/shipping">Expédition</Link>
            </li>
            <li>
              <Link to="/returns">Retours</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Newsletter</h4>
          <p>Inscrivez-vous pour recevoir nos dernières offres</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Votre e-mail" />
            <button type="submit">S'inscrire</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 E-shop. Tous droits réservés.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Confidentialité</Link>
          <Link to="/terms">Conditions d'utilisation</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
