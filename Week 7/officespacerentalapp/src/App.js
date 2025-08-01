import React from "react";
import "./App.css";

function App() {
  // Heading JSX Element
  const heading = <h1>🏢 Office Space Rental App</h1>;

  // Single office object (can also be used for display)
  const office1 = {
    name: "Corporate Heights",
    rent: 45000,
    address: "MG Road, Bengaluru",
    image: "https://via.placeholder.com/300x200?text=Office+1"
  };

  // List of office spaces
  const officeList = [
    {
      name: "Sky Tower",
      rent: 55000,
      address: "Anna Nagar, Chennai",
      image: "https://via.placeholder.com/300x200?text=Office+2"
    },
    {
      name: "Tech Park",
      rent: 70000,
      address: "Hinjewadi, Pune",
      image: "https://via.placeholder.com/300x200?text=Office+3"
    },
    {
      name: "Business Bay",
      rent: 62000,
      address: "Gachibowli, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Office+4"
    },
    {
      name: "Innovation Hub",
      rent: 40000,
      address: "Whitefield, Bengaluru",
      image: "https://via.placeholder.com/300x200?text=Office+5"
    }
  ];

  return (
    <div className="App">
      {heading}

      <div className="office-list">
        {officeList.map((office, index) => (
          <div key={index} className="office-card">
            <img src={office.image} alt={office.name} />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p
              className="rent"
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rent: ₹{office.rent}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
