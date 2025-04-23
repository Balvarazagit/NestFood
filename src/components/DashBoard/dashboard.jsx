import './dashboard.css'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User"); // Default name

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Update state if username exists
    }
  }, []);

  const handleOrderClick = () => {
    navigate("/order-tracking");
  };

  const handleUserAccount = () => {
    navigate("/userAccount");
  };

  return (
    <div className="dashboard-container">
      <nav className="breadcrumb">
        <a href="/home">Home</a> &gt; <a href="/home  ">Pages</a> &gt; My Account
      </nav>
      <div className="dashboard-content">
        <aside className="sidebar">
          <button className="sidebar-button active">Dashboard</button>
          <button className="sidebar-button">Orders</button>
          <button className="sidebar-button" onClick={handleOrderClick}>Track Your Order</button>
          <button className="sidebar-button">My Address</button>
          <button className="sidebar-button" onClick={handleUserAccount}>Account details</button>
          <Link className="sidebar-button" to={"/login"}> Logout </Link>
        </aside>
        <main className="main-content">
          <h1>Hello {username}!</h1> {/* Dynamic Username */}
          <p>
            From your account dashboard, you can easily check & view your <br />
            <a href="/orders">recent orders</a>,
            manage your <a href="/addresses">shipping and billing addresses</a>, and 
            <a href="/account-details"> <br />edit your password and account details</a>.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
