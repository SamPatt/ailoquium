import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [numOfAITreated, setNumOfAITreated] = useState(0);
    const [moneyAtStartOfLevel, setMoneyAtStartOfLevel] = useState(0); // Example initial money
    const [moneyRemainingFromCurrentJob, setMoneyRemainingFromCurrentJob] = useState(280);
    const [isFirstMessage, setIsFirstMessage] = useState(true);
    const [lastPatientMessage, setLastPatientMessage] = useState({});
    const [isFirstNurseMessage, setIsFirstNurseMessage] = useState(true);
    const [showTransitionScreen, setShowTransitionScreen] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(0);

    // Timer functionality
    useEffect(() => {
        const interval = setInterval(() => {
            // Decrease money over time and check for game over condition
            setMoneyRemainingFromCurrentJob((prevMoney) => {
                const updatedMoney = prevMoney - 1;
                if (updatedMoney <= 0) {
                    clearInterval(interval);
                    setGameOver(true);
                }
                return updatedMoney;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const nextPatient = () => {
        setShowTransitionScreen(true); // Show transition screen first
        setMoneyAtStartOfLevel(moneyRemainingFromCurrentJob);
    };
    
    const proceedToNextPatient = () => {
        setTimer(0);
        setIsFirstMessage(true);
        setNumOfAITreated(currentNum => currentNum + 1);
        setMoneyAtStartOfLevel(moneyRemainingFromCurrentJob);
        setMoneyRemainingFromCurrentJob(300);
        setShowTransitionScreen(false); // Hide transition screen after moving to next patient
    };
    

    const value = {
        numOfAITreated,
        setNumOfAITreated,
        moneyAtStartOfLevel,
        setMoneyAtStartOfLevel,
        moneyRemainingFromCurrentJob,
        setMoneyRemainingFromCurrentJob,
        gameOver,
        timer,
        showTransitionScreen,
        nextPatient,
        proceedToNextPatient,
        isFirstMessage,
        setIsFirstMessage,
        isFirstNurseMessage,
        setIsFirstNurseMessage,
        lastPatientMessage,
        setLastPatientMessage,
    };

    if(gameOver){
        return <div>Game Over</div>
    }
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
