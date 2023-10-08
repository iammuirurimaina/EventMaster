import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

function MyTickets({ user }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = () => {
      if (user) {
        // Fetch user's tickets from the backend
        fetch(`/ticket/<int:id>`)
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
      }
    };

    fetchTickets();
  }, [user]);

  return (
    <div className="my-tickets">
      <h2 className="mb-4">My Tickets</h2>
      <ul className="list-group">
        {tickets.map((ticket) => (
          <li key={ticket.id} className="list-group-item">
            <h3>{ticket.event.name}</h3>
            <p>Date: {ticket.event.date}</p>
            <p>Location: {ticket.event.location}</p>
            {/* Add more ticket details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTickets;
