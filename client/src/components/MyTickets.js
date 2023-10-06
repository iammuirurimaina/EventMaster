import React, { useState, useEffect } from 'react';

function MyTickets({ user }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch user's tickets from the backend
      fetch(`/api/users/${user.id}/tickets`)
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
  }, [user]);

  return (
    <div className="my-tickets">
      <h2>My Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
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