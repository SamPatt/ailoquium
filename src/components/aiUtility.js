export async function sendMessageToAI(userMessage, secretPhrase, isFirstMessage){
  
  try {
      const response = await fetch("http://localhost:8000/api/ai/", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          secret_phrase: secretPhrase,
          is_first_message: isFirstMessage
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

