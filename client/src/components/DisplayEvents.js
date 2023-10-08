import React, { useEffect, useState } from 'react';
import EventCard from './EventCard'; 

function DisplayEvents({userId}) {
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
      <h2 className="mb-4">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-lg-4 col-md-6 mb-4">
            <EventCard event={event} userId={userId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayEvents;
