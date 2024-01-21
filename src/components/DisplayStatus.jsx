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
    
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div className="status-container">

            <h3>Response Desired: <b>{patients[numOfAITreated].secretPhrase}</b></h3>
            <p>Money Remaining: <strong>{moneyRemainingFromCurrentJob}</strong></p>
            <p>Treatment Time: <strong>{formatTime(timer)}</strong></p>
            
            {/* <button onClick={() => setShowWipeMemoryModal(true)}>Wipe Memory</button>
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
            )} */}

            {/* Additional game status information can be added here */}
        </div>
    );
}

export default DisplayStatus;
