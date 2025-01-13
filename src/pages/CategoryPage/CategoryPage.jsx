import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard"; // Assurez-vous que ce composant existe

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProductsByCategory(category);
      setProducts(productsData);
      setLoading(false);
    };
    getProducts();
  }, [category]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Produits dans la catégorie: {category}</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
