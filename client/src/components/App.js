import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import TicketMaster from '../TicketMaster';
import AboutUs from './AboutUs';
import LoginSignup from './LoginSignup';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div id='body'>
        <NavBar />
        <Routes>
          
          <Route path="/ticket-master" element={<TicketMaster />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login-signup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
