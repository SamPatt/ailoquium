import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import GuardianAI from './GuardianAI';
import LibrarianAI from './LibrarianAI';
// import './AIChatInterface.css';

function AIChatInterface() {
    const [librarianVisible, setLibrarianVisible] = useState(false); // Controls visibility of Librarian AI
    const { currentLevel } = useContext(GameContext);

    // You can add logic to toggle the visibility of the Librarian AI based on game events
    // For example, setLibrarianVisible(true) to make the Librarian appear

    return (
        <div className="chat-interface">
            <div className="guardian-ai-container">
                <GuardianAI currentLevel={currentLevel} />
            </div>

            {librarianVisible && (
                <div className="librarian-ai-container">
                    <LibrarianAI currentLevel={currentLevel} />
                </div>
            )}

            {/* Additional logic and components for AI interaction can be added here */}
        </div>
    );
}

export default AIChatInterface;
