import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Calcul du nombre total d'articles dans le panier
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <h1>E-shop</h1>
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
      </button>

      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Accueil
        </Link>
        <Link to="/products" onClick={toggleMenu}>
          Products
        </Link>
        <Link to="/service" onClick={toggleMenu}>
          Service
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>

      <div className="navbar-icons">
        <Link to="/users">👤</Link>
        <Link to="/cart" className="cart-icon">
          🛒{" "}
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
