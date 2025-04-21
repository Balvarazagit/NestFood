import { useState } from "react";
import "./home.css";
import Slider from ".//slider/slider.jsx";
import CategorizeSlider from "../../components/CategorizeSlider/catSlider.jsx";
import Banners from "../../components/banner/banner.jsx";
import Product from "../../components/product/product.jsx";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // State to track the selected category

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the category when clicked
  };

  return (
    <>
      <Slider />
      <CategorizeSlider />
      <Banners />

      <section className="homeProductsSection">
        <div className="container-fluid">
          <div className="homeProducts d-flex align-items-center mb-4">
            <h3 className="text-edge hd mb-0">Popular Products</h3>
            <ul className="d-flex homeProductsLink">
              <li>
                <a
                  className={selectedCategory === "All" ? "text-green" : ""}
                  href="#"
                  onClick={() => handleCategoryChange("All")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={selectedCategory === "Fruits" ? "text-green" : ""}
                  href="/shop"
                  onClick={() => handleCategoryChange("Fruits")}
                >
                  Fruits
                </a>
              </li>
              <li>
                <a
                  className={selectedCategory === "Vegetables" ? "text-green" : ""}
                  href="/shop"
                  onClick={() => handleCategoryChange("Vegetables")}
                >
                  Vegetables
                </a>
              </li>
              <li>
                <a
                  className={selectedCategory === "Sweets" ? "text-green" : ""}
                  href="/shop"
                  onClick={() => handleCategoryChange("Sweets")}
                >
                  Sweets
                </a>
              </li>
            </ul>
          </div>

          {/* Pass the selectedCategory to the Product component */}
          <div className="productContainer">
            <div className="product-1">
              <Product selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
