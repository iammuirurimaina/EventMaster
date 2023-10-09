import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function NavBar({ user, onLogout}) {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }


  return (
    <div id="nav">
        <div className="home">
        <Link to="/" className="homebutton">
          Home
        </Link>
        </div>

          <ul className="links"> 
        
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
                <li>
              
              <Link to="/my-tickets" >
                MyTickets
              </Link>
              </li>
                
                <li>
                <button
                  onClick={handleLogout}
                  
                >
                  Logout
                </button>
                </li>
              </>
            ) : (
              // Display "Login" and "Signup" when the user is not authenticated
              <>
              <li className="login">
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
        
        
      </div>
      
  );
}

export default NavBar;
