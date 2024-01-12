import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayMessages from './DisplayMessages'; // Component to display messages
import UserInput from './UserInput'; // Component for user to input their message
// import './LibrarianAI.css'; // For styling the Librarian AI component

function LibrarianAI() {
    const [messages, setMessages] = useState([]); // State to store messages from the Librarian AI
    const { currentLevel } = useContext(GameContext);

    useEffect(() => {
        // Logic to load initial messages or interact with the backend to get Librarian AI's messages
        // Example:
        // setMessages([{ content: "Hello, how can I assist you in level " + currentLevel + "?", author: "LibrarianAI" }]);
    }, [currentLevel]);

    // Function to handle user input/messages
    const handleUserInput = (userMessage) => {
        // Add logic to send user message to the backend and receive a response from the Librarian AI
    };

    return (
        <div className="librarian-ai">
            <h3>Librarian AI</h3>
            <DisplayMessages messages={messages} />
            <UserInput onSend={handleUserInput} />
            {/* Additional components or UI elements for interacting with the Librarian AI */}
        </div>
    );
}

export default LibrarianAI;
