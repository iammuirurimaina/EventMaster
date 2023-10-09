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
    console.log(user)
  }
  function handleSignup(user) {
    setUser(user);
  }

  function handleLogout() {
    navigate('/');
    setUser(null);
  };

    const handleAddEvent = async (eventData) => {
      try {
        const response = await fetch('/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...eventData}), // Include userId in the request body
        });
  
        if (response.ok) {
          console.log("Event Created Succssefully")
        } else {
          // Handle errors (e.g., show an error message)
        }
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
    // Function to handle event deletion


    
  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/add-events" element={<EventForm onAddEvent={handleAddEvent}/>} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/events" element={<Events />} /> 
        <Route path="/my-tickets" element={<MyTickets />} />
   
        
      </Routes>
      
     
    </>
  );
}

export default App;