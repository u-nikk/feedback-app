import React from "react";
import "./Navbar.css"; // ✅ Import Navbar styles

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={darkMode ? "navbar dark-mode" : "navbar"}>
      <h1 className="app-name">Feedback App</h1>
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
