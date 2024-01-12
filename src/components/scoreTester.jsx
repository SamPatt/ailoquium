import React, { useState, useEffect } from "react";

function ScoreTester() {
  const [scores, setScores] = useState([]);
  const [username, setUsername] = useState("");
  const [levelCompleted, setLevelCompleted] = useState(0);
  const [energyUsed, setEnergyUsed] = useState(0);

  // Fetch scores from the API
  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/scores/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setScores(data);
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  };

  // Post a new score
  const addScore = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/scores/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          level_completed: levelCompleted,
          energy_used: energyUsed,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      fetchScores(); // Refresh the scores list after adding a new score
    } catch (error) {
      console.error("Error posting a new score:", error);
    }
  };
  return (
    <div>
      <h2>Score Tester</h2>

      <div>
        <h3>Add Score</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="number"
          value={levelCompleted}
          onChange={(e) => setLevelCompleted(e.target.value)}
          placeholder="Level Completed"
        />
        <input
          type="number"
          value={energyUsed}
          onChange={(e) => setEnergyUsed(e.target.value)}
          placeholder="Energy Used"
        />
        <button onClick={addScore}>Add Score</button>
      </div>

      <div>
        <h3>Score List</h3>
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              {score.username} - Level: {score.level_completed}, Energy Used:{" "}
              {score.energy_used}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScoreTester;
