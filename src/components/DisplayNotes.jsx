import { useState, useEffect, useContext } from 'react';
import { patients } from './PatientList';
import './DisplayNotes.css';
import { GameContext } from './GameContext';


function DisplayNotes() {
    const { numOfAITreated } = useContext(GameContext);
    const patient = patients[numOfAITreated];
    // Placeholder for any map logic or state
    // For example, you might fetch map data from your backend or manage map state

    return (
        <div className="notes-container">
            {/* Render your notes here */}
            <p>Notes Display</p>
            <p>Name: {patient.name}</p>
            <p>Backstory: {patient.backstory}</p>
            <p>Human Report: {patient.humanReport}</p>
            <p>Evidence: {patient.evidence}</p>
        </div>
    );
}

export default DisplayNotes;
