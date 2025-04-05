import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          {product.sale && <span className="sale-tag">Sale</span>}
          {product.new && <span className="new-tag">New</span>}
        </div>
        <div className="product-info">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <div
            className="add-to-cart"
            onClick={handleAddToCart}
            title="Add to cart"
          >
            +
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
