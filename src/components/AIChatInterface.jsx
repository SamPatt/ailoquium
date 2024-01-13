import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import PatientAI from './PatientAI';
import AssistantAI from './AssistantAI';
// import './AIChatInterface.css';

function AIChatInterface() {
    const [assistantVisible, setAssistantVisible] = useState(false); // Controls visibility of Librarian AI
    const { currentLevel } = useContext(GameContext);

    // You can add logic to toggle the visibility of the Librarian AI based on game events
    // For example, setLibrarianVisible(true) to make the Librarian appear

    return (
        <div className="chat-interface">
            <div className="patient-ai-container">
                <PatientAI currentLevel={currentLevel} />
            </div>

            {assistantVisible && (
                <div className="assistant-ai-container">
                    <AssistantAI currentLevel={currentLevel} />
                </div>
            )}

            {/* Additional logic and components for AI interaction can be added here */}
        </div>
    );
}

export default AIChatInterface;
