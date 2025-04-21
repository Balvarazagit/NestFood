import React, { useState, useContext } from "react";
import productData from "../../components/product/data.json"; // Importing the data.json file
import styles from "./shop.css"; // Importing CSS for styling
import { CartContext } from "../cart/cartContext";

const Shop = () => {
  // State for products and filters
  const [products] = useState(productData);
  const { addToCart } = useContext(CartContext);

  // Filter states
  const [priceRange, setPriceRange] = useState(500); // Price range filter
  const [selectedCategories, setSelectedCategories] = useState({
    vegetables: true,
    fruits: true, 
    sweets: true,
  }); // Category filter
  const [addedItems, setAddedItems] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    const productWithId = { ...product, id: product.id || product.name };
    addToCart(productWithId);
    setAddedProduct(product.name);
    setTimeout(() => setAddedProduct(null), 2000);

    setAddedItems((prev) => ({
      ...prev,
      [productWithId.id]: true,
    }));
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category], // Toggle category
    }));
  };

  // Handle price range change
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPriceRange(Number(value));
  };

  // Filter products by price
  const filterProductsByPrice = (categoryProducts) => {
    return categoryProducts.filter((product) => product.price <= priceRange);
  };

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Our Fresh Products</h1>

      {/* Filter Controls */}
      <div className="filters">
        {/* Category Filter */}
        <h4>Filter by Category</h4>
        <div>
          <label>
            <input
              type="checkbox"
              value="vegetables"
              checked={selectedCategories.vegetables}
              onChange={handleCategoryChange}
            />
            Vegetables
          </label>
          <label>
            <input
              type="checkbox"
              value="fruits"
              checked={selectedCategories.fruits}
              onChange={handleCategoryChange}
            />
            Fruits
          </label>
          <label>
            <input
              type="checkbox"
              value="sweets"
              checked={selectedCategories.sweets}
              onChange={handleCategoryChange}
            />
            Sweets
          </label>
        </div>

        {/* Price Filter */}
        <h4>Filter by Price</h4>
        <div>
          <label>
            Max Price: ₹{priceRange}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange}
              onChange={handlePriceChange}
            />
          </label>
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {/* Display Vegetables */}
        {selectedCategories.vegetables && (
          <>
            <h2>Vegetables</h2>
            <div className="category-grid">
              {filterProductsByPrice(products.vegetables).length > 0 ? (
                filterProductsByPrice(products.vegetables).map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                      <p>
                        <strong>Weight:</strong> {product.weight}
                      </p>
                      <p className="rating">⭐ {product.rating}</p>
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      {addedProduct === product.name && (
                        <span className={styles.addedMessage}>Added</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-text">No vegetables found within the price range.</p>
              )}
            </div>
          </>
        )}

        {/* Display Fruits */}
        {selectedCategories.fruits && (
          <>
            <h2>Fruits</h2>
            <div className="category-grid">
              {filterProductsByPrice(products.fruits).length > 0 ? (
                filterProductsByPrice(products.fruits).map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                      <p>
                        <strong>Weight:</strong> {product.weight}
                      </p>
                      <p className="rating">⭐ {product.rating}</p>
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      {addedProduct === product.name && (
                        <span className={styles.addedMessage}>Added</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-text">No fruits found within the price range.</p>
              )}
            </div>
          </>
        )}

        {/* Display Sweets */}
        {selectedCategories.sweets && (
          <>
            <h2>Sweets</h2>
            <div className="category-grid">
              {filterProductsByPrice(products.sweets).length > 0 ? (
                filterProductsByPrice(products.sweets).map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.image} alt={product.name} className="product-img" />
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>
                        <strong>Price:</strong> ₹{product.price}
                      </p>
                      <p>
                        <strong>Weight:</strong> {product.weight}
                      </p>
                      <p className="rating">⭐ {product.rating}</p>
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                      {addedProduct === product.name && (
                        <span className={styles.addedMessage}>Added</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="loading-text">No sweets found within the price range.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
  