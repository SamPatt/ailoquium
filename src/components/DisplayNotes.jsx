import { useState, useEffect, useContext } from 'react';
import { patients } from './PatientList';
import './DisplayNotes.css';
import { GameContext } from './GameContext';


function DisplayNotes() {
    const { numOfAITreated } = useContext(GameContext);
    const patient = patients[numOfAITreated];

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
