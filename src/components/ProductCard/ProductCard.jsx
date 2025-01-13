import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        {product.sale && <span className="sale-tag">Sale</span>}
        {product.new && <span className="new-tag">New</span>}
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
