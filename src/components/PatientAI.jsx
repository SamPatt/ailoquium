import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import UserInput from './UserInput';
import DisplayMessages from './DisplayMessages'; // Component to display messages
import { sendMessageToAI } from './aiUtility.js'; // Import the utility function

// import './PatientAI.css';

function PatientAI() {
    const [messages, setMessages] = useState([]); // State to store messages from and to the AI
    const { numOfAITreated } = useContext(GameContext);

    useEffect(() => {
        // Logic to load initial messages or interact with the backend to get AI's initial messages
        // Example:
        setMessages([{ text: "Patient " + numOfAITreated, sender: "PatientAI" }]);
    }, [numOfAITreated]);

    const handleUserInput = async (userMessage) => {
        // Send the user's message to the AI and receive a response
        setMessages(messages => [...messages, { text: userMessage, sender: "User" }]);
        const aiResponse = await sendMessageToAI("Doctor to patient: " + userMessage);
        setMessages(messages => [...messages, { text: aiResponse, sender: "PatientAI" }]);
    };

    // Additional functions or logic for interacting with the AI

    return (
        <div className="patient-ai">
            <h3>Patient AI</h3>
            <DisplayMessages messages={messages} />
            <UserInput onSend={handleUserInput} />
        </div>
    );
}

export default PatientAI;
