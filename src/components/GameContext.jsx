import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [numOfAITreated, setNumOfAITreated] = useState(0);
    const [moneyAtStartOfLevel, setMoneyAtStartOfLevel] = useState(0);
    const [moneyRemainingFromCurrentJob, setMoneyRemainingFromCurrentJob] = useState(30);
    const [isFirstMessage, setIsFirstMessage] = useState(true);
    const [lastPatientMessage, setLastPatientMessage] = useState({});
    const [isFirstNurseMessage, setIsFirstNurseMessage] = useState(true);
    const [showTransitionScreen, setShowTransitionScreen] = useState(false);
    const [showIntroScreen, setShowIntroScreen] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [timer, setTimer] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    // Timer functionality
    

    useEffect(() => {
        const interval = setInterval(() => {
            // Decrease money over time and check for game over condition
            setTimer(currentNum => currentNum + 1);
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
    }, [numOfAITreated]);

    // useEffect(() => {
    //     console.log(`Total Time Updated: ${totalTime}`);
    // }, [totalTime]);
    

    const startGame = () => {
        setShowIntroScreen(false);
    };

    const nextPatient = () => {
        setTotalTime(currentTime => currentTime + timer);
        console.log(totalTime);
        setShowTransitionScreen(true); // Show transition screen first
        setMoneyAtStartOfLevel(moneyRemainingFromCurrentJob);
    };
    
    const proceedToNextPatient = () => {
        setTimer(0);
        setIsFirstMessage(true);
        setNumOfAITreated(currentNum => currentNum + 1);
        setMoneyAtStartOfLevel(moneyRemainingFromCurrentJob);
        setMoneyRemainingFromCurrentJob(30);
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
        showIntroScreen,
        startGame,
        username,
        setUsername,
    };

    if(gameOver && showTransitionScreen){
        setGameOver(false);
    }
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
