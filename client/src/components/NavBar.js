import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
import "./Navbar.css"

function NavBar({ user, onLogout }) {
  return (
    <div id="Navbar">
      <nav class="Nav">
        <div id="home">
        <Link to="/" className="text-red hover:text-gray-300">
          Home
        </Link>
        </div>
        <ul id="links"> 
        <li>
        <Link to="/events" >
          Events
        </Link>
        </li>
        <li>
        <Link to="/about" >
          About
        </Link>
        </li>
        
        {user ? (
          // Display "My Tickets" and "Logout" when the user is authenticated
          <>
            <li>
          
            <Link to="/add-events" >
              EventForm
            </Link>
            </li>
            {/* <li>
          
          <Link to="/my-tickets" >
            MyTickets
          </Link>
          </li> */}
            
            <li>
            <button
              onClick={onLogout}
              
            >
              Logout
            </button>
            </li>
          </>
        ) : (
          // Display "Login" and "Signup" when the user is not authenticated
          <>
          <li>
            <Link to="/login" >
              Login
            </Link>
            </li>
            <li>
            <Link to="/signup" >
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
