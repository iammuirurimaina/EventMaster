import React, { useState, useEffect } from 'react';
import "./Tickets.css"

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = () => {
      // Fetch user's tickets from the backend
      fetch(`/tickets`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch tickets');
          }
        })
        .then((data) => {
          setTickets(data);
        })
        .catch((error) => {
          console.error('Error fetching tickets:', error);
        });
    };

    fetchTickets();
  }, []);

  return (
    <div className="my-tickets">
      <h2 className="mb-4">My Tickets</h2>
      <ul className="list-group">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="list-group-item">
            <p>Event ID: {ticket.eventId}</p>
            <p>Ticket ID: {ticket.id}</p>
            {/* Add more ticket details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTickets;
