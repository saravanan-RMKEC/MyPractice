import React from "react";

const flights = [
  { id: 1, from: "Chennai", to: "Delhi", price: 4500 },
  { id: 2, from: "Mumbai", to: "Bangalore", price: 3500 },
  { id: 3, from: "Kolkata", to: "Hyderabad", price: 4000 },
];

const FlightList = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>✈️ Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.from} → {flight.to} - ₹{flight.price}
            {isLoggedIn && (
              <button style={{ marginLeft: "10px" }}>Book</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
