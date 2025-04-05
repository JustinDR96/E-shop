import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Users.css";

function Users() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
    country: "France",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simuler une connexion réussie
    setIsLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simuler une inscription réussie
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="user-page-container">
      <div className="user-page-header">
        <h1>Mon Compte</h1>
        <p>Gérez vos informations personnelles et suivez vos commandes</p>
      </div>

      {isLoggedIn ? (
        <div className="user-dashboard">
          <div className="dashboard-sidebar">
            <div className="user-profile-summary">
              <div className="user-avatar">
                <span>JD</span>
              </div>
              <div className="user-info">
                <h3>Jean Dupont</h3>
                <p>jean.dupont@example.com</p>
              </div>
            </div>

            <div className="dashboard-nav">
              <button
                className={activeTab === "profile" ? "active" : ""}
                onClick={() => setActiveTab("profile")}
              >
                <span className="nav-icon">👤</span>
                Mon Profil
              </button>
              <button
                className={activeTab === "orders" ? "active" : ""}
                onClick={() => setActiveTab("orders")}
              >
                <span className="nav-icon">📦</span>
                Mes Commandes
              </button>
              <button
                className={activeTab === "wishlist" ? "active" : ""}
                onClick={() => setActiveTab("wishlist")}
              >
                <span className="nav-icon">❤️</span>
                Liste de Souhaits
              </button>
              <button
                className={activeTab === "addresses" ? "active" : ""}
                onClick={() => setActiveTab("addresses")}
              >
                <span className="nav-icon">🏠</span>
                Mes Adresses
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                <span className="nav-icon">🚪</span>
                Déconnexion
              </button>
            </div>
          </div>

          <div className="dashboard-content">
            {activeTab === "profile" && (
              <div className="profile-tab">
                <div className="content-header">
                  <h2>Mon Profil</h2>
                  <p>Gérez vos informations personnelles</p>
                </div>

                <form className="profile-form">
                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-field">
                        <label>Prénom</label>
                        <input
                          type="text"
                          name="firstname"
                          value="Jean"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Nom</label>
                        <input
                          type="text"
                          name="lastname"
                          value="Dupont"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          value="jean.dupont@example.com"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Téléphone</label>
                        <input
                          type="tel"
                          name="phone"
                          value="06 12 34 56 78"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-row password-section">
                      <h3>Changer de mot de passe</h3>
                      <div className="form-field">
                        <label>Mot de passe actuel</label>
                        <input
                          type="password"
                          name="currentPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Nouveau mot de passe</label>
                        <input
                          type="password"
                          name="newPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-field">
                        <label>Confirmer le mot de passe</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button type="submit" className="save-button">
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="orders-tab">
                <div className="content-header">
                  <h2>Mes Commandes</h2>
                  <p>
                    Consultez l&apos;historique et le statut de vos commandes
                  </p>
                </div>

                <div className="orders-list">
                  <div className="order-item">
                    <div className="order-header">
                      <div className="order-info">
                        <span className="order-number">Commande #1082</span>
                        <span className="order-date">21 Mars 2023</span>
                      </div>
                      <div className="order-status delivered">Livré</div>
                    </div>
                    <div className="order-products">
                      <div className="order-product">
                        <img
                          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          alt="Product"
                        />
                        <div className="product-info">
                          <h4>Sac à dos avec port USB</h4>
                          <span className="product-quantity">1 x €59.99</span>
                        </div>
                      </div>
                      <div className="order-product">
                        <img
                          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                          alt="Product"
                        />
                        <div className="product-info">
                          <h4>T-shirt blanc premium</h4>
                          <span className="product-quantity">2 x €19.99</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-total">
                      <span>Total: €99.97</span>
                      <button className="order-details-btn">
                        Voir les détails
                      </button>
                    </div>
                  </div>

                  <div className="order-item">
                    <div className="order-header">
                      <div className="order-info">
                        <span className="order-number">Commande #1056</span>
                        <span className="order-date">15 Février 2023</span>
                      </div>
                      <div className="order-status shipped">En transit</div>
                    </div>
                    <div className="order-products">
                      <div className="order-product">
                        <img
                          src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
                          alt="Product"
                        />
                        <div className="product-info">
                          <h4>Veste d&apos;hiver légère</h4>
                          <span className="product-quantity">1 x €109.95</span>
                        </div>
                      </div>
                    </div>
                    <div className="order-total">
                      <span>Total: €109.95</span>
                      <button className="order-details-btn">
                        Voir les détails
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="wishlist-tab">
                <div className="content-header">
                  <h2>Ma Liste de Souhaits</h2>
                  <p>Gérez les produits que vous avez enregistrés</p>
                </div>

                <div className="wishlist-items">
                  <div className="wishlist-grid">
                    <div className="wishlist-product">
                      <div className="product-image">
                        <img
                          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                          alt="Product"
                        />
                        <button className="remove-wishlist">×</button>
                      </div>
                      <div className="product-details">
                        <h3>Veste femme hivers</h3>
                        <p className="product-price">€29.95</p>
                        <button className="add-to-cart-btn">
                          Ajouter au panier
                        </button>
                      </div>
                    </div>

                    <div className="wishlist-product">
                      <div className="product-image">
                        <img
                          src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                          alt="Product"
                        />
                        <button className="remove-wishlist">×</button>
                      </div>
                      <div className="product-details">
                        <h3>Bracelet en or</h3>
                        <p className="product-price">€695.00</p>
                        <button className="add-to-cart-btn">
                          Ajouter au panier
                        </button>
                      </div>
                    </div>

                    <div className="wishlist-product">
                      <div className="product-image">
                        <img
                          src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
                          alt="Product"
                        />
                        <button className="remove-wishlist">×</button>
                      </div>
                      <div className="product-details">
                        <h3>Disque dur externe 2TB</h3>
                        <p className="product-price">€64.99</p>
                        <button className="add-to-cart-btn">
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="addresses-tab">
                <div className="content-header">
                  <h2>Mes Adresses</h2>
                  <p>Gérez vos adresses de livraison et de facturation</p>
                </div>

                <div className="addresses-container">
                  <div className="address-box default">
                    <div className="address-header">
                      <h3>Adresse principale</h3>
                      <span className="default-badge">Par défaut</span>
                    </div>
                    <div className="address-content">
                      <p>Jean Dupont</p>
                      <p>123 Rue de Paris</p>
                      <p>75001 Paris</p>
                      <p>France</p>
                      <p>Téléphone: 06 12 34 56 78</p>
                    </div>
                    <div className="address-actions">
                      <button className="edit-btn">Modifier</button>
                    </div>
                  </div>

                  <div className="address-box">
                    <div className="address-header">
                      <h3>Adresse de travail</h3>
                    </div>
                    <div className="address-content">
                      <p>Jean Dupont</p>
                      <p>45 Avenue des Champs-Élysées</p>
                      <p>75008 Paris</p>
                      <p>France</p>
                      <p>Téléphone: 06 12 34 56 78</p>
                    </div>
                    <div className="address-actions">
                      <button className="edit-btn">Modifier</button>
                      <button className="delete-btn">Supprimer</button>
                      <button className="default-btn">
                        Définir par défaut
                      </button>
                    </div>
                  </div>

                  <div className="address-box add-new">
                    <div className="add-address-content">
                      <span className="add-icon">+</span>
                      <p>Ajouter une nouvelle adresse</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="auth-container">
          <div className="auth-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Connexion
            </button>
            <button
              className={activeTab === "register" ? "active" : ""}
              onClick={() => setActiveTab("register")}
            >
              Inscription
            </button>
          </div>

          <div className="auth-content">
            {activeTab === "login" ? (
              <div className="login-form">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Votre mot de passe"
                      required
                    />
                  </div>
                  <div className="form-options">
                    <div className="remember-me">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Se souvenir de moi</label>
                    </div>
                    <a href="#" className="forgot-password">
                      Mot de passe oublié?
                    </a>
                  </div>
                  <button type="submit" className="auth-button">
                    Se connecter
                  </button>
                </form>
              </div>
            ) : (
              <div className="register-form">
                <form onSubmit={handleRegister}>
                  <div className="form-group form-row">
                    <div className="form-field">
                      <label>Prénom</label>
                      <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>Nom</label>
                      <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Créez un mot de passe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Adresse</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Votre adresse"
                      required
                    />
                  </div>
                  <div className="form-group form-row">
                    <div className="form-field">
                      <label>Ville</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Votre ville"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>Code postal</label>
                      <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        placeholder="Votre code postal"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Pays</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="France">France</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                  <div className="terms-agreement">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      J&apos;accepte les <a href="#">conditions générales</a> et
                      la <a href="#">politique de confidentialité</a>
                    </label>
                  </div>
                  <button type="submit" className="auth-button">
                    Créer un compte
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
