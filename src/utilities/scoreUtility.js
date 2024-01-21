const baseURL = "https://ailoquium-e592809f13ab.herokuapp.com/api";
// Uncomment the next line for local testing
// const baseURL = "http://localhost:8000/api";

export const addTotalScore = async (username, highestLevel, totalTime, totalMoney) => {
    try {
        const response = await fetch(`${baseURL}/totalscores/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            highest_level: highestLevel,
            total_time: totalTime,
            total_money: totalMoney,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error posting a new score:", error);
    }
};

export const addLevelScore = async (username, level, time) => {
    try {
      const response = await fetch(`${baseURL}/scores/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          level: level,
          time: time,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error posting a new score:", error);
    }
};

export const fetchScores = async () => {
    try {
      const response = await fetch(`${baseURL}/scores/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
};

export const fetchTotalScores = async () => {
    try {
      const response = await fetch(`${baseURL}/totalscores/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
};
