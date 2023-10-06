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
  function handleAddEvent(newEvent){
    // Here, you can send a POST request to your API to add the new event
    // Example:
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Event added:", data);
        
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };
  

  // // Function to handle buying tickets
  // function handleBuyTickets(eventId) {
  //   const user_id = user.id; // Replace this with the actual user ID

  //   fetch(`/buy_tickets/${eventId}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ user_id }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // Refresh the events list after buying tickets
  //         fetch('/events')
  //           .then((response) => {
  //             if (response.ok) {
  //               response.json().then((data) => setEvents(data));
  //             }
  //           });
  //       }
  //     });


  return (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/add-event" element={<EventForm onAddEvent={handleAddEvent} />} />
   
        
      </Routes>
      {/* Render the EventCards with the onBuyTickets function */}
      <div className="event-list">
        <h2>Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event.id}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
