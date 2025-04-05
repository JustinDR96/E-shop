import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <h1>Contactez-Nous</h1>
        <p>
          Nous sommes là pour vous aider et répondre à toutes vos questions.
          N&apos;hésitez pas à nous contacter.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Adresse</h3>
            <p>123 Rue de Paris, 75001 Paris, France</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Téléphone</h3>
            <p>+33 (0)1 23 45 67 89</p>
            <p>Du lundi au vendredi, 9h-18h</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>info@eshop.com</p>
            <p>support@eshop.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🌐</div>
            <h3>Réseaux Sociaux</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Twitter
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h2>Envoyez-nous un message</h2>
            <p>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans
              les plus brefs délais.
            </p>
          </div>

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Message envoyé avec succès !</h3>
              <p>
                Merci de nous avoir contactés. Nous vous répondrons dans les
                meilleurs délais.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Nom <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Votre adresse email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Sujet <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="contact-map">
        <h2>Nous trouver</h2>
        <div className="map-container">
          {/* Placeholder pour une carte, dans un vrai site vous utiliseriez Google Maps ou autre */}
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <p>Carte Google Maps serait intégrée ici.</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Questions Fréquentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Quels sont vos délais de livraison ?</h3>
            <p>
              Nos délais de livraison standards sont de 3 à 5 jours ouvrés. Pour
              la livraison express, comptez 24 à 48 heures après validation de
              votre commande.
            </p>
          </div>

          <div className="faq-item">
            <h3>Comment puis-je suivre ma commande ?</h3>
            <p>
              Vous recevrez un email avec un numéro de suivi dès que votre
              commande sera expédiée. Vous pourrez suivre votre colis en temps
              réel dans votre espace client.
            </p>
          </div>

          <div className="faq-item">
            <h3>Quelles sont vos conditions de retour ?</h3>
            <p>
              Vous disposez de 30 jours à compter de la réception de votre
              commande pour effectuer un retour. Les frais de retour sont
              gratuits et nous vous remboursons sous 5 jours ouvrés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
