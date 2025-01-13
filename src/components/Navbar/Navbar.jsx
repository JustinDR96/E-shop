import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">
          <h1>E-shop</h1>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/products">Products</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-icons">
        <div className="search-icon">🔍</div>
        <Link to="/favorites">❤️</Link>
        <Link to="/cart" className="cart-icon">
          🛒{" "}
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
