import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [energyAtStartOfLevel, setEnergyAtStartOfLevel] = useState(10000);  // Example initial energy
    const [energyUsed, setEnergyUsed] = useState(0);



    const value = {
        currentLevel,
        setCurrentLevel,
        energyAtStartOfLevel,
        setEnergyAtStartOfLevel,
        energyUsed,
        setEnergyUsed,

    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
