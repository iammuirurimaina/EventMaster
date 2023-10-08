import React, { useState } from 'react';

function EventCard({ event, userId, onBuyTickets }) {
  const [numTickets, setNumTickets] = useState(1); // Number of tickets to purchase, initial value is 1

  const handleNumTicketsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumTickets(value);
    }
  };

  const handleBuyTickets = () => {
    // Send a request to buy tickets
    fetch(`/buy-tickets/${event.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        num_tickets: numTickets,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Handle success message if needed
        // Call the onBuyTickets callback to refresh the MyTickets component
        onBuyTickets();
      })
      .catch(error => {
        console.error('Error buying tickets:', error);

        // Vany(Buying tickets not reflecting on the database)
        // Handle error if needed
      });
  };

  return (
    <div>
      <div className="card">
        <img src={event.image_url} className="card-img-top" alt="Event" />
        <div className="card-body">
          <h3 className="card-title">{event.name}</h3>
          <p className="card-text">Date: {event.date}</p>
          <p className="card-text">Location: {event.location}</p>
          <p className="card-text">Tickets Available: {event.tickets_available}</p>
          <div className="form-group">
            <label htmlFor="numTickets">Number of Tickets:</label>
            <input
              type="number"
              className="form-control"
              id="numTickets"
              value={numTickets}
              onChange={handleNumTicketsChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleBuyTickets}>
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
