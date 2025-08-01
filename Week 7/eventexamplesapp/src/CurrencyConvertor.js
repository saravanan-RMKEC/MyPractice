import React, { useState } from "react";

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming 1 Euro = 90 INR for example
    const rate = 90;
    const converted = (parseFloat(rupees) / rate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>💱 Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter INR"
          value={rupees}
          onChange={handleChange}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <h3>💶 {rupees} INR = {euro} Euro</h3>
      )}
    </div>
  );
};

export default CurrencyConvertor;
