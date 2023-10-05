import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => navigateTo('/ticket-master')}>Ticket Master</li>
        <li onClick={() => navigateTo('/about-us')}>About Us</li>
        <li onClick={() => navigateTo('/login-signup')}>Login/Signup</li>
      </ul>
    </nav>
  );
};

export default NavBar;
