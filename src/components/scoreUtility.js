export const addTotalScore = async (username, highestLevel, totalTime, totalMoney ) => {
    try {
        const response = await fetch("http://localhost:8000/api/totalscores/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            highestLevel: highestLevel,
            totalTime: totalTime,
            totalMoney: totalMoney,
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
      const response = await fetch("http://localhost:8000/api/scores/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
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