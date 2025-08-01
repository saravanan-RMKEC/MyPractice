import React from "react";

const IndianPlayers = () => {
  // Odd and Even players using destructuring
  const allPlayers = [
    "Rohit", "Virat", "Rahul", "Jadeja", "Bumrah", "Gill", "Shami", "Pant"
  ];

  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  const [op1, op2, ...restOdd] = oddPlayers;
  const [ep1, ep2, ...restEven] = evenPlayers;

  // Merge T20 and Ranji players using ES6 spread operator
  const T20players = ["Hardik", "Surya", "Ishan"];
  const RanjiTrophyPlayers = ["Pujara", "Karun", "Manoj"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{op1}</li>
        <li>{op2}</li>
        {restOdd.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{ep1}</li>
        <li>{ep2}</li>
        {restEven.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 + Ranji Trophy Players</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
