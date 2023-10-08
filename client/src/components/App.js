// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import EventCard from './EventCard';
import MyTickets from './MyTickets'; 
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import './App.css';
import AboutUs from './AboutUs';
import DisplayEvents from './DisplayEvents';
import Events from './Events';
import EventForm from './EventForm';


// ...

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/check_session')
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
  }, []);

  useEffect(() => {
    fetch('/events')
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => setEvents(data));
        }
      });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }
  function handleSignup(user) {
    setUser(user);
  }

  function handleLogout() {
    navigate('/');
    setUser(null);
  }



  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/add-events" element={<EventForm />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add the About Us route */}
        <Route path="/events" element={<Events />} /> 
   
        
      </Routes>
      
     
    </>
  );
}

export default App;