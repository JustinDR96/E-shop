import React, { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);
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
          <img src="/headphones.jpg" alt="Headphones" />
          <div className="social-icons">
            <a href="#">
              <span>📷</span>
            </a>
            <a href="#">
              <span>👤</span>
            </a>
            <a href="#">
              <span>🐦</span>
            </a>
          </div>
          <div className="secondary-image">
            <img src="/perfume.jpg" alt="Perfume" />
          </div>
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
        <div className="navigation-arrows">
          <button className="prev">←</button>
          <button className="next">→</button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Shoe Banner */}
      <div className="shoe-banner">
        <div className="banner-content">
          <h2>Latest stylish shoe</h2>
          <p>Men 2020 collection shoe</p>
          <button className="see-all-btn">See all</button>
        </div>
        <div className="banner-image">
          <img src="/shoe.png" alt="Latest Shoe" />
        </div>
      </div>
    </div>
  );
};

export default Home;
