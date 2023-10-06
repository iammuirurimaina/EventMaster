import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 ml-4">
          About
        </Link>
        {/*
          Add a link to the "Add Event" route here
        */}
        <Link to="/add-event" className="text-white hover:text-gray-300 ml-4">
          Add Event
        </Link>
        <Link to="/login" className="text-white hover:text-gray-300 ml-4">
          Login
        </Link>
        <Link to="/signup" className="text-white hover:text-gray-300 ml-4">
          Signup
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
