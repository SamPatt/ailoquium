export const addTotalScore = async (username, highestLevel, totalTime, totalMoney ) => {
    try {
        const response = await fetch("https://ailoquium-e592809f13ab.herokuapp.com/api/totalscores/", {
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

export const addLevelScore = async (username, level, time ) => {
    try {
      const response = await fetch("https://ailoquium-e592809f13ab.herokuapp.com/api/scores/", {
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
      const response = await fetch("https://ailoquium-e592809f13ab.herokuapp.com/api/scores/");
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
      const response = await fetch("https://ailoquium-e592809f13ab.herokuapp.com/api/totalscores/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching scores:", error);
    }
  }