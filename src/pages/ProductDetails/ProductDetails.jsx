import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById, fetchProductsByCategory } from "../../services/api";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./ProductDetails.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        // Scroll to top when loading a new product
        window.scrollTo(0, 0);

        // Fetch related products from the same category
        const categoryProducts = await fetchProductsByCategory(data.category);
        // Filter out the current product and limit to 4 items
        const filtered = categoryProducts
          .filter((p) => p.id !== data.id)
          .slice(0, 4);
        setRelatedProducts(filtered);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantityChange = (action) => {
    if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === "increase") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleImageZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!product)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Chargement du produit...</p>
      </div>
    );

  return (
    <div className="product-details-container">
      <div className="product-navigation">
        <Link to="/">Accueil</Link> /<Link to="/products">Produits</Link> /
        <span>{product.category}</span> /
        <span className="current-page">{product.title}</span>
      </div>

      <div className="product-details">
        <div className="product-gallery">
          <div
            className={`product-image ${isZoomed ? "zoomed" : ""}`}
            onClick={handleImageZoom}
          >
            <img src={product.image} alt={product.title} />
            <div className="zoom-hint">
              <span>🔍</span>
              <p>
                {isZoomed ? "Cliquez pour réduire" : "Cliquez pour agrandir"}
              </p>
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="product-badges">
            {product.new && <span className="badge new-badge">Nouveau</span>}
            {product.sale && <span className="badge sale-badge">Solde</span>}
          </div>

          <h1>{product.title}</h1>

          <div className="product-meta">
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < Math.floor(product.rating?.rate || 0)
                        ? "star filled"
                        : "star"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-value">{product.rating?.rate || 0}</span>
              <span className="reviews-count">
                ({product.rating?.count || 0} avis)
              </span>
            </div>
            <div className="product-id">ID: {product.id}</div>
          </div>

          <div className="product-price">
            {product.sale ? (
              <>
                <p className="sale-price">${product.price.toFixed(2)}</p>
                <p className="original-price">
                  ${(product.price * 1.2).toFixed(2)}
                </p>
                <span className="discount-badge">-20%</span>
              </>
            ) : (
              <p>${product.price.toFixed(2)}</p>
            )}
          </div>

          <div className="product-actions">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange("decrease")}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange("increase")}>
                +
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <span className="cart-icon">🛒</span>
              Ajouter au panier
            </button>
            <button className="wishlist-btn">❤️</button>
          </div>

          <div className="product-delivery">
            <div className="delivery-info">
              <span className="icon">🚚</span>
              <div>
                <h4>Livraison gratuite</h4>
                <p>Pour les commandes de plus de 50€</p>
              </div>
            </div>
            <div className="delivery-info">
              <span className="icon">↩️</span>
              <div>
                <h4>Retours faciles</h4>
                <p>30 jours pour changer d'avis</p>
              </div>
            </div>
          </div>

          <div className="product-tabs">
            <div className="tabs-header">
              <button
                className={activeTab === "description" ? "active" : ""}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
              >
                Détails
              </button>
              <button
                className={activeTab === "reviews" ? "active" : ""}
                onClick={() => setActiveTab("reviews")}
              >
                Avis ({product.rating?.count || 0})
              </button>
            </div>

            <div className="tabs-content">
              {activeTab === "description" && (
                <div className="tab-description">
                  <p>{product.description}</p>
                </div>
              )}

              {activeTab === "details" && (
                <div className="tab-details">
                  <table>
                    <tbody>
                      <tr>
                        <td>Catégorie</td>
                        <td>{product.category}</td>
                      </tr>
                      <tr>
                        <td>ID Produit</td>
                        <td>{product.id}</td>
                      </tr>
                      <tr>
                        <td>Note</td>
                        <td>{product.rating?.rate || 0}/5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="tab-reviews">
                  <div className="review-summary">
                    <div className="average-rating">
                      <h3>{product.rating?.rate || 0}</h3>
                      <div className="stars">
                        {[...Array(5)].map((_, index) => (
                          <span
                            key={index}
                            className={
                              index < Math.floor(product.rating?.rate || 0)
                                ? "star filled"
                                : "star"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <p>Basé sur {product.rating?.count || 0} avis</p>
                    </div>
                  </div>
                  <p className="review-message">
                    Connectez-vous pour laisser un avis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section - now with real products */}
      <div className="related-products">
        <h2>Vous pourriez aussi aimer</h2>
        <div className="related-products-grid">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))
          ) : (
            // Fallback to placeholders if no related products are found
            <>
              <div className="related-product-placeholder">
                <div className="placeholder-image"></div>
                <div className="placeholder-text"></div>
                <div className="placeholder-price"></div>
              </div>
              <div className="related-product-placeholder">
                <div className="placeholder-image"></div>
                <div className="placeholder-text"></div>
                <div className="placeholder-price"></div>
              </div>
              <div className="related-product-placeholder">
                <div className="placeholder-image"></div>
                <div className="placeholder-text"></div>
                <div className="placeholder-price"></div>
              </div>
              <div className="related-product-placeholder">
                <div className="placeholder-image"></div>
                <div className="placeholder-text"></div>
                <div className="placeholder-price"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
