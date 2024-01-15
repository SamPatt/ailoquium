import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import PatientAI from './PatientAI';
import AssistantAI from './AssistantAI';
// import './AIChatInterface.css';

function AIChatInterface() {
    const { currentLevel } = useContext(GameContext);

    return (
        <div className="chat-interface">
            <div className="patient-ai-container">
                <PatientAI currentLevel={currentLevel} />
            </div>
            <div className="assistant-ai-container">
                <AssistantAI currentLevel={currentLevel} />
            </div>
        </div>
    );
}

export default AIChatInterface;
