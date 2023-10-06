// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, onLogout }) {
  return (
    <div className="bg-black p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text red hover:text-gray-300 ml-4">
          About
        </Link>
        {user ? (
          // Display "Logout" when the user is authenticated
          <button
            onClick={onLogout}
            className="text-white hover:text-gray-300 ml-4"
          >
            Logout
          </button>
        ) : (
          // Display "Login" and "Signup" when the user is not authenticated
          <>
            <Link to="/login" className="text-red hover:text-gray-300 ml-4">
              Login
            </Link>
            <Link to="/signup" className="text-red hover:text-gray-300 ml-4">
              Signup
            </Link>
       
          </>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
