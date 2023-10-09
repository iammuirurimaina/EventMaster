import React from 'react';
import './About.css'; // Custom CSS file

function AboutUs() {
  return (
    <div className="container mt-5 text-dark">
      {/* Bootstrap classes for headings */}
     
      <div className='content'>

      <h1 className="display-4 font-weight-bold">About Us</h1>


      <p className="lead">
        Welcome to Event Master, your ultimate destination for revolutionizing
        the way you discover, purchase, and manage event tickets. At Event
        Master, we understand the challenges that individuals like you face when
        it comes to securing tickets for your favorite events. Our mission is to
        provide a centralized platform that offers a secure and hassle-free
        space for ticket buyers like you to discover, buy, and manage event
        tickets conveniently.
      </p>

      {/* Bootstrap classes for headings */}
      <h2 className="display-5 font-weight-bold">Our Vision</h2>
      <p className="lead">
        Our vision is built on simplifying the event ticketing experience for
        you, the ticket buyer. We believe that attending events should be a
        seamless and enjoyable process right from the moment you decide to
        purchase tickets. Our goal is to transform the event ticketing industry
        by offering an innovative and user-friendly platform that caters
        exclusively to your needs.
      </p>

      {/* Bootstrap classes for headings */}
      {/* <h3 className="font-weight-bold">For Ticket Buyers</h3>
      <ul className="list-unstyled">
        <li>
          <strong>Discover:</strong> Easily find events that match your
          interests, whether it's concerts, sports, theater, or festivals.
        </li>
        <li>
          <strong>Purchase:</strong> Securely buy tickets with just a few
          clicks, eliminating the need for multiple websites and complicated
          processes.
        </li>
        <li>
          <strong>Manage:</strong> Keep all your tickets in one place, making
          it simple to access, transfer, or resell them if plans change.
        </li>
        <li>
          <strong>Stay Informed:</strong> Receive real-time updates, event
          details, and notifications to ensure you never miss an event you're
          excited about.
        </li>
      </ul>

      {/* Bootstrap classes for headings */}
      {/* <h3 className="font-weight-bold">For Ticket Sellers</h3>
      <ul className="list-unstyled">
        <li>
          <strong>Sell Tickets:</strong> List your tickets quickly and easily,
          reaching a vast community of potential buyers.
        </li>
        <li>
          <strong>Set Prices:</strong> Choose your ticket prices and manage
          your listings with full control.
        </li>
        <li>
          <strong>Transfer Tickets:</strong> Seamlessly transfer tickets to
          buyers, ensuring a smooth and secure transaction.
        </li>
        </ul>  */}

      <p className="lead">
        At Event Master, we are dedicated to making the event ticket buying
        process more efficient, convenient, and enjoyable for individuals like
        you. Join us in our mission to create a centralized hub for ticket
        buyers, and experience a new era of event ticketing.
      </p>

      <p className="lead">
        Discover, Purchase, and Manage your event tickets with ease. Welcome to
        Event Master.
      </p>

      </div>
      <div className='image'>
        <img src='https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80' 
        alt="conerct"/>
      </div>
    </div>
  );
}

export default AboutUs;
