import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/cart/cartContext"; // ✅ Import CartProvider

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./Page/Home/index.jsx";
import About from "./Page/About/about.jsx";
import Contact from "./Page/Contact/contact.jsx";
import Listing from "./components/listing/listing.jsx";
import NotFound from "./components/Not found/notFound.jsx";
import Register from "./Page/Account/Register/register.jsx";
import Login from "./Page/Account/login/login.jsx";
import DashBoard from "./components/DashBoard/dashboard.jsx";
import Deals from "./components/deals/deals.jsx";
import UserAccount from "./Page/Account/userAccount/user.jsx";
import Cart from "./components/cart/cart.jsx";
import PaymentPage from "./components/paymentPage/PaymentPage.jsx";
import Address from "./components/address/address.jsx";
import OrderPage from "./components/orderTracking/order.jsx";
import ProductDetail from "./Page/Detail/detail.jsx";
import Shop from "./components/Shop/shop.jsx";
import TermsConditions from "./Page/Terms&Condition/T&C.jsx";
import Privacy from "./Page/PrivacyPolicy/Privacy.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider> {/* ✅ Wrap the entire app with CartProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/shop/:categoryName" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/userAccount" element={<UserAccount />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order-tracking" element={<OrderPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/term&conditions" element={<TermsConditions />}/>
          <Route path="/privacy_policy" element={<Privacy />}/>
          {/* <Route path="/product/" element={<ProductDetail/>}/> */}
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
