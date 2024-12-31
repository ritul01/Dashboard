import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons from react-icons

const App = () => {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="App">
      <header style={headerStyles}>
        <h1>Dashboard Application</h1>
        <button onClick={toggleDarkMode} style={iconButtonStyles}>
          {isDarkMode ? <FaSun style={iconStyles} /> : <FaMoon style={iconStyles} />}
        </button>
      </header>
      {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
    </div>
  );
};

// Inline styles for quick customization
const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: isDarkMode => (isDarkMode ? "#1e1e1e" : "#4285f4"),
  color: "white",
};

const iconButtonStyles = {
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1.5rem",
};

const iconStyles = {
  color: "white",
};

export default App;
