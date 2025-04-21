import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/cart/cartContext";
import { toast } from "react-toastify";
import "./detail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const allProducts = [
          ...data.vegetables,
          ...data.fruits,
          ...data.sweets,
        ];

        const decodedId = decodeURIComponent(id);
        const foundProduct = allProducts.find(
          (item) =>
            String(item.id || item.name).toLowerCase() === decodedId.toLowerCase()
        );

        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div>Loading or Product not found...</div>;
  }

  return (
    <div className="productDetail">
      <div className="productDetailHeader">
        <img className="productImage" src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
      </div>
      <div className="productDetailInfo">
        <p className="productDescription">
          {product.description || "No description available."}
        </p>
        <p>
          <strong>Price:</strong> ₹{product.price.toFixed(2)}
        </p>
        <p>
          <strong>Category:</strong> {product.category || "N/A"}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating} / 5
        </p>
        <p>
          <strong>Weight:</strong> {product.weight || "N/A"}
        </p>
        <button className="addToCartButton" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
