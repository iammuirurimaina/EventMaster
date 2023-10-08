import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function NavBar({ user, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const activeStyle = {
    fontWeight: "bold",
    color: "red", // Customize the active link style
  };

  return (
    <div id="Navbar">
      <nav className={`Nav ${isDropdownOpen ? "open" : ""}`}>
        <div id="home">
          <Link to="/" className="nav-link" onClick={closeDropdown}>
            Home
          </Link>
        </div>
        <ul id="links">
          <li>
            <Link
              to="/events"
              className="nav-link"
              style={window.location.pathname === "/events" ? activeStyle : {}}
              onClick={closeDropdown}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              style={window.location.pathname === "/about" ? activeStyle : {}}
              onClick={closeDropdown}
            >
              About
            </Link>
          </li>
          {user ? (
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <span className="nav-link">User Actions</span>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/add-events" onClick={closeDropdown}>
                    EventForm
                  </Link>
                  <button onClick={onLogout}>Logout</button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="nav-link" onClick={closeDropdown}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link" onClick={closeDropdown}>
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
