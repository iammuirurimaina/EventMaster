import React, { useState } from 'react';

function EventForm({ onAddEvent }) {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    tickets_available: 0,
    image_url: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddEvent function to add the event to the database
    onAddEvent(eventData);
    // Clear the form fields
    setEventData({
      name: '',
      date: '',
      location: '',
      tickets_available: 0,
      image_url: '',
      category: '',
    });
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tickets Available:</label>
          <input
            type="number"
            name="tickets_available"
            value={eventData.tickets_available}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image_url"
            value={eventData.image_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={eventData.category}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default EventForm;
