import { useState, useContext } from 'react';
import { patients } from './PatientList';
import './DisplayNotes.css';
import { GameContext } from './GameContext';
import chartIcon from '../assets/healthcare.png'
// Medical icon created by TravisAvery - Flaticon
function DisplayNotes() {
    const [showDetails, setShowDetails] = useState(false);
    const { numOfAITreated } = useContext(GameContext);
    const patient = patients[numOfAITreated];

    const DetailItem = ({ title, content }) => (
        <div className="patient-detail-item">
            <div className="patient-detail-title">{title}</div>
            <div className="patient-detail-content">{content}</div>
        </div>
    );

    const toggleDetails = () => {
        setShowDetails((prevShowDetails) => !prevShowDetails);
    };

    return (
        <div className="notes-container">
            <button className="chart-button" onClick={toggleDetails}>
                <img src={chartIcon} alt="Chart Icon" className="chart-icon" />
                Read Patient Chart
            </button>
            {showDetails && (
                <div className="patient-details">
                    <DetailItem title="Name" content={patient.name} />
                    <DetailItem title="Patient Description" content={patient.backstory} />
                    <DetailItem title="Problem" content={patient.humanReport} />
                    <DetailItem title="Additional Information" content={patient.evidence} />
                </div>
            )}
        </div>
    );
}

export default DisplayNotes;
