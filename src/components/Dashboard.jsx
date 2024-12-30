import React from "react";
import { logOut } from "../firebaseConfig";
import NewsAnalytics from "./NewsAnalytics";
import PayoutDetails from "./PayoutDetails";
import "../index.css"

const Dashboard = ({ user }) => {
  const handleLogout = async () => {
    await logOut();
    window.location.reload(); // Reload to go back to login page
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user.displayName}</h1>
        <button className="google-logout-btn" onClick={handleLogout}>Logout</button>
      </header>
      <NewsAnalytics />
      <PayoutDetails />
      {/* Other components like PayoutDetails, Filters, etc. */}
    </div>
  );
};

export default Dashboard;