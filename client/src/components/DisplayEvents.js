import React, { useEffect, useState } from 'react';
import EventCard from './EventCard'; 

function DisplayEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);



  const handleBuyTickets = async (eventId) => {
    try {
      
      const response = await fetch('/api/assign_ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event_id: eventId }),
      });

      if (response.ok) {
        // Ticket purchase successful, update the events state
        const updatedEvents = events.map((event) => {
          if (event.id === eventId) {
            
            event.tickets_available -= 1;
          }
          return event;
        });

        setEvents(updatedEvents);
      } else {
        
        console.error('Error purchasing tickets:', response.statusText);
      }
    } catch (error) {
      console.error('Error purchasing tickets:', error);
    }
  };

  return (
    <div className="event-list">
      <h2 className="mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-lg-4 col-md-6 mb-4">
            <EventCard event={event}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayEvents;
