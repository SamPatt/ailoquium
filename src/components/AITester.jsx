import React, { useState } from 'react';
import { sendMessageToAI } from './aiUtility.js';

function AITester() {
    const [userMessage, setUserMessage] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    const handleInputChange = (event) => {
        setUserMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        const response = await sendMessageToAI(userMessage);
        setAiResponse(response);
    };

    return (
        <div>
            <input 
                type="text" 
                value={userMessage} 
                onChange={handleInputChange} 
                placeholder="Enter a message for AI" 
            />
            <button onClick={handleSendMessage}>Send to AI</button>
            <p>AI Response: {aiResponse}</p>
        </div>
    );
}

export default AITester;
