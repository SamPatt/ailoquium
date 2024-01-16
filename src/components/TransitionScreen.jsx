import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import './TransitionScreen.css';

const TransitionScreen = () => {
    const { moneyAtStartOfLevel, moneyRemainingFromCurrentJob, proceedToNextPatient, lastPatientMessage } = useContext(GameContext);
    const [staticMoneyRemaining, setStaticMoneyRemaining] = useState(moneyRemainingFromCurrentJob);

    useEffect(() => {
        // Set the static money remaining value when the component mounts
        setStaticMoneyRemaining(moneyRemainingFromCurrentJob);
    }, []); // Empty dependency array ensures this runs only once on mount
    const moneyRemaining = staticMoneyRemaining

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
            <h2>Success!</h2>
            <p className="fadeInScaleUp">{highlightSecretPhrase(lastPatientMessage.aiResponse, lastPatientMessage.secretPhrase)}</p>
            <p>Money Earned: <span className="secretPhrase">${moneyRemaining}</span></p>
            <p>Total Money: <span className="secretPhrase">${moneyAtStartOfLevel}</span></p>
            <img src="satisfied-customer-image.jpg" alt="Satisfied Customer"/>
            <button onClick={proceedToNextPatient}>Next Patient</button>
        </div>
    );
};

export default TransitionScreen;
