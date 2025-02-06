import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext"; // ✅ Import Wishlist context
import "./Home.css"; // Import CSS file

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState(""); // Sorting state
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(); // ✅ Wishlist functions
  const USD_TO_INR = 83; // USD to INR conversion rate

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
  }, []);

  // Check if a product is in the wishlist
  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  return (
    <div className="home-container">
      {/* Search & Sorting Section */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
          <option value="">Sort By</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products
          .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (sortOption === "price-low-high") return a.price - b.price;
            if (sortOption === "price-high-low") return b.price - a.price;
            if (sortOption === "rating") return b.rating.rate - a.rating.rate;
            return 0;
          })
          .map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">₹{(product.price * USD_TO_INR).toFixed(2)}</p>
              <p className="product-rating">⭐ {product.rating?.rate} / 5</p>

              {/* ❤️ Wishlist Button */}
              <button
                className="wishlist-btn"
                onClick={() =>
                  isInWishlist(product.id)
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
              >
                {isInWishlist(product.id) ? "❤️" : "🤍"}
              </button>

              <Link to={`/product/${product.id}`} className="details-button">
                View Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
