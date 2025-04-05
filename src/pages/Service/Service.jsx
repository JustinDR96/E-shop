import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service-container">
      <div className="service-hero">
        <h1>Nos Services</h1>
        <p>
          Découvrez comment nous nous engageons à vous offrir la meilleure
          expérience d&apos;achat possible
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <div className="service-icon">
            <span>🚚</span>
          </div>
          <h2>Livraison Rapide</h2>
          <p>
            Livraison gratuite à partir de 50€ d&apos;achat. Livraison express
            disponible pour recevoir votre commande sous 24h.
          </p>
          <ul className="service-features">
            <li>Livraison standard en 3-5 jours ouvrés</li>
            <li>Livraison express disponible (24h-48h)</li>
            <li>Suivi de commande en temps réel</li>
            <li>Frais de port offerts dès 50€ d&apos;achat</li>
          </ul>
          <button className="service-button">En savoir plus</button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>↩️</span>
          </div>
          <h2>Retours Simplifiés</h2>
          <p>
            Retours gratuits sous 30 jours. Nous vous garantissons un
            remboursement rapide et sans complications.
          </p>
          <ul className="service-features">
            <li>Retours gratuits pendant 30 jours</li>
            <li>Échanges possibles en magasin</li>
            <li>Remboursement sous 5 jours ouvrés</li>
            <li>Étiquette de retour prépayée</li>
          </ul>
          <button className="service-button">En savoir plus</button>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <span>🔒</span>
          </div>
          <h2>Paiement Sécurisé</h2>
          <p>
            Paiement 100% sécurisé avec cryptage SSL. Plusieurs options de
            paiement disponibles pour votre confort.
          </p>
          <ul className="service-features">
            <li>Transactions cryptées SSL</li>
            <li>Paiement par carte, PayPal, ou virement</li>
            <li>Paiement en 3 ou 4 fois sans frais</li>
            <li>Protection contre la fraude</li>
          </ul>
          <button className="service-button">En savoir plus</button>
        </div>
      </div>

      <div className="service-faq">
        <h2>Questions Fréquentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Comment suivre ma commande ?</h3>
            <p>
              Une fois votre commande expédiée, vous recevrez un email avec un
              numéro de suivi. Vous pourrez suivre votre colis en temps réel
              dans votre espace client ou en cliquant sur le lien dans
              l&apos;email.
            </p>
          </div>

          <div className="faq-item">
            <h3>Comment effectuer un retour ?</h3>
            <p>
              Pour retourner un article, connectez-vous à votre compte,
              sélectionnez la commande concernée et cliquez sur "Retourner".
              Suivez ensuite les instructions pour imprimer votre étiquette de
              retour prépayée.
            </p>
          </div>

          <div className="faq-item">
            <h3>Quels sont les délais de livraison ?</h3>
            <p>
              Les délais de livraison standard sont de 3 à 5 jours ouvrés. Pour
              la livraison express, comptez 24 à 48 heures après validation de
              votre commande (hors week-ends et jours fériés).
            </p>
          </div>

          <div className="faq-item">
            <h3>Comment contacter le service client ?</h3>
            <p>
              Notre équipe est disponible du lundi au vendredi de 9h à 18h par
              téléphone au 01 23 45 67 89 ou par email à support@eshop.com. Vous
              pouvez également utiliser notre formulaire de contact.
            </p>
          </div>
        </div>
      </div>

      <div className="service-guarantee">
        <div className="guarantee-content">
          <h2>Notre Engagement Qualité</h2>
          <p>
            Nous nous engageons à vous offrir des produits de qualité et un
            service irréprochable. Si vous n&apos;êtes pas satisfait, nous
            ferons tout notre possible pour résoudre le problème.
          </p>
          <ul className="guarantee-features">
            <li>Garantie satisfaction ou remboursé</li>
            <li>Service client réactif et à votre écoute</li>
            <li>Produits soigneusement sélectionnés</li>
            <li>Contrôle qualité rigoureux</li>
          </ul>
        </div>
        <div className="guarantee-image">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt="Garantie qualité"
          />
        </div>
      </div>

      <div className="service-cta">
        <h2>Des Questions ?</h2>
        <p>
          Notre équipe est à votre disposition pour répondre à toutes vos
          questions et vous accompagner dans votre expérience d&apos;achat.
        </p>
        <button className="cta-button">Contactez-nous</button>
      </div>
    </div>
  );
}

export default Service;
