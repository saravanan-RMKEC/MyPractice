import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "KL Rahul", score: 45 },
    { name: "Shreyas Iyer", score: 67 },
    { name: "Hardik Pandya", score: 73 },
    { name: "Jasprit Bumrah", score: 59 },
    { name: "Ravindra Jadeja", score: 78 },
    { name: "Mohammed Shami", score: 32 },
    { name: "Suryakumar Yadav", score: 80 },
    { name: "Shubman Gill", score: 65 },
    { name: "Ishan Kishan", score: 50 },
  ];

  // Filter players with score below 70 using arrow function
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
