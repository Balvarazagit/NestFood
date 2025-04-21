import { useContext } from "react";
import { CartContext } from "./cartContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div className="cartPage">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="emptyCart">Your cart is empty. Start shopping now!</p>
      ) : (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <li key={product.id} className="cartItem">
                <img src={product.image} alt={product.title} className="productImage" />
                <div className="productDetails">
                  <h4>{product.title}</h4>
                  <p>₹{product.price.toFixed(2)}</p>
                  <div className="quantityControl">
                    <IconButton color="primary" onClick={() => decreaseQuantity(product.id)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span>{product.quantity}</span>
                    <IconButton color="primary" onClick={() => increaseQuantity(product.id)}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </div>
                  <IconButton color="error" onClick={() => removeFromCart(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </li>
            ))}
          </ul>
          <div className="cartTotal">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
          </div>
          <Button variant="contained" color="primary" onClick={() => navigate("/payment")}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
