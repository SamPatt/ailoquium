export async function sendMessageToAI(userMessage, secretPhrase, isFirstMessage, role, nextPatient){
  try {
      const response = await fetch("https://ailoquium-e592809f13ab.herokuapp.com/api/ai/", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          secret_phrase: secretPhrase,
          is_first_message: isFirstMessage,
          role: role
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);

      if (data.role === 'patient' && data.success){
        nextPatient()
      }

      return(data.response)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }

