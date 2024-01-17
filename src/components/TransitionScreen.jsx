import { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import { patients } from './PatientList'
import { addLevelScore } from '../utilities/scoreUtility'
import './TransitionScreen.css';

const TransitionScreen = () => {
    const { timer, moneyAtStartOfLevel, moneyRemainingFromCurrentJob, proceedToNextPatient, lastPatientMessage, numOfAITreated, username, totalTime, setTotalTime } = useContext(GameContext);
    const [staticMoneyRemaining, setStaticMoneyRemaining] = useState(moneyRemainingFromCurrentJob);
    const [staticTimer, setStaticTimer] = useState(timer);
    const [showNextPatientDetails, setShowNextPatientDetails] = useState(false);

    useEffect(() => {
        // Set the static money remaining value when the component mounts
        setStaticMoneyRemaining(moneyRemainingFromCurrentJob);
        setStaticTimer(timer);
    }, []); // Empty dependency array ensures this runs only once on mount
    const moneyRemaining = staticMoneyRemaining
    const time = staticTimer

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = minutes.toString().padStart(1, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const handleNextPatientDetails = () => {
        addLevelScore(username, numOfAITreated, timer);
        setShowNextPatientDetails(true);
    };

    const nextPatientDetails = patients[numOfAITreated + 1] || {};

    const highlightSecretPhrase = (text, phrase) => {
        if (!phrase) return text;
        const parts = text.split(new RegExp(`(${phrase})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === phrase.toLowerCase() 
                ? <span key={index} className="secretPhrase">{part}</span> 
                : part
        );
    };

    return (
        <div className="transition-screen">
            {!showNextPatientDetails ? (
                <>
                    <h2>Success!</h2>
                    <p className="fadeInScaleUp">{highlightSecretPhrase(patients[numOfAITreated].dialogues.winResponse, lastPatientMessage.secretPhrase)}</p>
                    <p>Treatment time: {formattedMinutes}:{formattedSeconds}</p>
                    <p>Money Earned: <span className="secretPhrase">${moneyRemaining}</span></p>
                    <p>Total Money: <span className="secretPhrase">${moneyAtStartOfLevel}</span></p>
                    <img src="satisfied-customer-image.jpg" alt="Satisfied Customer"/>
                    <button onClick={handleNextPatientDetails}>View Next Patient</button>
                </>
            ) : (
                <>
                    <h2>Next Patient</h2>
                    
                    <p>Name: {nextPatientDetails.name}</p>
                    <p>Backstory: {nextPatientDetails.backstory}</p>
                    <p>Human Report: {nextPatientDetails.humanReport}</p>
                    <p>Evidence: {nextPatientDetails.evidence}</p>
                    <button onClick={proceedToNextPatient}>Start Treatment</button>
                </>
            )}
        </div>
    );
};

export default TransitionScreen;
