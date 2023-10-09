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
    <div className="nav">
        <div className="home">
        <Link to="/" className="homebutton">
          Home
        </Link>
        </div>

          
        
           
        <Link to="/events" className="link">
              Events
            </Link>
            
            
            <Link to="/about" className="link">
              About
            </Link>
            
            
            {user ? (
              // Display "My Tickets" and "Logout" when the user is authenticated
              <>
              
              
                <Link to="/add-events" className="link" >
                  EventForm
                </Link>
              
              
              
              <Link to="/my-tickets" className="link">
                MyTickets
              </Link>
              
                
                
                <button className="link"
                  onClick={handleLogout}
                  
                >
                  Logout
                </button>
                
              </>
            ) : (
              // Display "Login" and "Signup" when the user is not authenticated
              <>
              
                <Link to="/login" className="link" >
                  Login
                </Link>
                
                
                <Link to="/signup" className="link" >
                  Signup
                </Link>
                
              </>
            )}
            

        
         
          
            
        
        
      </div>
      
  );
}

export default NavBar;
