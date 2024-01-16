import React, { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import PatientAI from './PatientAI';
import NurseAI from './NurseAI';
// import './AIChatInterface.css';

function AIChatInterface() {
    const { currentLevel } = useContext(GameContext);

    return (
        <div className="chat-interface">
            <div className="patient-ai-container">
                <PatientAI currentLevel={currentLevel} />
            </div>
            <div className="nurse-ai-container">
                <NurseAI currentLevel={currentLevel} />
            </div>
        </div>
    );
}

export default AIChatInterface;
