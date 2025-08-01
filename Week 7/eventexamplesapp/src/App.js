import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Increment logic + sayHello
  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const decrementCount = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Counter was incremented 🚀");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleOnPress = () => {
    alert("I was clicked 🎉");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎯 Event Examples App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={decrementCount}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to the React Event App!")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleOnPress}>OnPress Event</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
