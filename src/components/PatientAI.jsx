import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import UserInput from './UserInput';
import DisplayMessages from './DisplayMessages'; // Component to display messages
// import './PatientAI.css';


function PatientAI() {
    const [messages, setMessages] = useState([]); // State to store messages from the Guardian AI
    const { currentLevel } = useContext(GameContext);

    useEffect(() => {
        // Logic to load initial messages or interact with the backend to get Guardian AI's messages
        // Example:
        // setMessages([{ content: "Welcome to level " + currentLevel, author: "PatientAI" }]);
    }, [currentLevel]);

    const handleUserInput = (userMessage) => {
        // Add logic to send user message to the backend and receive a response from the Librarian AI
    };

    // Additional functions or logic for interacting with the Guardian AI

    return (
        <div className="patient-ai">
            <h3>Patient AI</h3>
            <DisplayMessages messages={messages} />
            <UserInput onSend={handleUserInput} />
        </div>
    );
}

export default PatientAI;
