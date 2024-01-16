import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [numOfAITreated, setNumOfAITreated] = useState(1);
    const [moneyAtStartOfLevel, setMoneyAtStartOfLevel] = useState(0); // Example initial money
    const [moneyRemainingFromCurrentJob, setMoneyRemainingFromCurrentJob] = useState(280);
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

    // Reset the timer for each new AI treated
    const resetTimer = () => {
        setTimer(0);
        setMoneyAtStartOfLevel(moneyRemainingFromCurrentJob);
        setMoneyRemainingFromCurrentJob(300)
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
        resetTimer,
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
