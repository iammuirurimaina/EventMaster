import React from 'react';
/**/

function EventCard({ event }) {
  return (
    <li key={event.id}>
      {/* Display event information */}
      <img src={event.image_url} alt="Event"></img>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </li>
  );
}

export default EventCard;
