export async function sendMessageToAI(userMessage){
    try {
      const response = await fetch("http://localhost:8000/api/ai/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          example_flag: true, // or false, depending on your logic
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      return(data.response)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

