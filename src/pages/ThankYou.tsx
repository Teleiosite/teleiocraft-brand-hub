import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-6">
          Your message has been sent successfully. We will get back to you shortly.
        </p>
        {/* Assuming you have a home page route */}
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
