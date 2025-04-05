import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import Users from "./pages/Users/Users";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
