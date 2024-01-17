import { useContext, useState } from 'react';
import { GameContext } from './GameContext';
import { patients } from './PatientList';
// import './DisplayStatus.css';  // Assuming you have a corresponding CSS file for styling

function DisplayStatus() {
    const { numOfAITreated, moneyRemainingFromCurrentJob, moneyAtStartOfLevel, timer } = useContext(GameContext);
    const [showWipeMemoryModal, setShowWipeMemoryModal] = useState(false);
    const [showQuarantineModal, setShowQuarantineModal] = useState(false);

    const handleWipeMemory = () => {
        // Implement the logic for wiping memory
        setShowWipeMemoryModal(false);
    };

    const handleSendToQuarantine = () => {
        // Implement the logic for sending to quarantine
        setShowQuarantineModal(false);
    };

    return (
        <div className="status-container">
            <h3>Game Status</h3>

            <p>Phrase for successful treatment: <b>{patients[numOfAITreated].secretPhrase}</b></p>
            <p>Number of AI Treated: {numOfAITreated}</p>
            <p>Money at Start of Level: {moneyAtStartOfLevel}</p>
            <p>Money Remaining: {moneyRemainingFromCurrentJob}</p>
            <p>Time Spent: {timer} seconds</p>
            
            <button onClick={() => setShowWipeMemoryModal(true)}>Wipe Memory</button>
            <button onClick={() => setShowQuarantineModal(true)}>Send to Quarantine</button>

            {showWipeMemoryModal && (
                <div className="modal">
                    <p>Are you sure? This will prompt an ethical board review.</p>
                    <button onClick={handleWipeMemory}>Confirm</button>
                    <button onClick={() => setShowWipeMemoryModal(false)}>Cancel</button>
                </div>
            )}

            {showQuarantineModal && (
                <div className="modal">
                    <p>Are you sure? This is an extreme measure which will involve the legal system, prompt an ethical board review, and should only occur if the AI is a threat to humans.</p>
                    <button onClick={handleSendToQuarantine}>Confirm</button>
                    <button onClick={() => setShowQuarantineModal(false)}>Cancel</button>
                </div>
            )}

            {/* Additional game status information can be added here */}
        </div>
    );
}

export default DisplayStatus;
