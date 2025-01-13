import React, { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [randomProduct, setRandomProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
      const randomIndex = Math.floor(Math.random() * productsData.length);
      setRandomProduct(productsData[randomIndex]);
    };

    const getCategories = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    };

    getProducts();
    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Get the best product
            <br />
            at your home
          </h1>
          <div className="search-container">
            <input type="text" placeholder="Search your favorite product" />
            <span className="search-icon">🔍</span>
          </div>
        </div>
        <div className="hero-image">
          {randomProduct && (
            <img src={randomProduct.image} alt={randomProduct.title} />
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="categories-section">
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
          <li
            className={`see-all ${selectedCategory === null ? "active" : ""}`}
            onClick={() => handleCategoryClick(null)}
          >
            See all
          </li>
        </ul>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
