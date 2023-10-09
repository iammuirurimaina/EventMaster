import React from 'react';
import { Link } from "react-router-dom";

function HowToUse() {
  return (
    <div className="how-to-use-container p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
      <p className="text-gray-800 mb-4">
        Welcome to our event platform! Follow these simple steps to get started:
      </p>
      <ol className="list-decimal pl-6 mb-4">
        <li className="text-gray-800 mb-2">Sign up for an account if you are a new user.</li>
        <li className="text-gray-800 mb-2">Browse the available events on the platform.</li>
        <li className="text-gray-800 mb-2">Click on an event to view details and purchase tickets.</li>
        <li className="text-gray-800 mb-2">Enjoy the event!</li>
        <li>
            

        </li>
      </ol>
    </div>
  );
}

export default HowToUse;
