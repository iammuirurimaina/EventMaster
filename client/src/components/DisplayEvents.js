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

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}

export default DisplayEvents;
