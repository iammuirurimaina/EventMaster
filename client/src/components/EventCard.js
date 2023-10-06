import React from 'react';

function EventCard({ event, onBuyTickets }) {
  return (
    <div >
      <div className="card">
        <img src={event.image_url} className="card-img-top" alt="Event" />
        <div className="card-body">
          <h3 className="card-title">{event.name}</h3>
          <p className="card-text">Date: {event.date}</p>
          <p className="card-text">Location: {event.location}</p>
          <p className="card-text">Tickets Available: {event.tickets_available}</p>
          <button
            className="btn btn-primary"
            onClick={() => onBuyTickets(event.id)}
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
