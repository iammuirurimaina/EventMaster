import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav id='nav'>
    
      <ul>
        <div id='ticket'>
         <li onClick={() => navigateTo('/ticket-master')}>Ticket Master</li>
        </div>
        <div id='about'>
         <li onClick={() => navigateTo('/about-us')}>About Us</li>
        </div>
        <div id='login'>
         <li onClick={() => navigateTo('/login-signup')}>Login/Signup</li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
