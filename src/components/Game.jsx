import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayMap from './DisplayMap';
import DisplayStatus from './DisplayStatus';
import AIChatInterface from './AIChatInterface';

function Game() {
    const { currentLevel, energyUsed, energyAtStartOfLevel } = useContext(GameContext);

    // Additional game logic or functions can be added here

    return (
        <div className="game-container">
            <h1>Game Title</h1>
            

            {/* Display the game map */}
            <DisplayMap />

            {/* AI Chat Interface */}
            <AIChatInterface />

            <DisplayStatus />
            {/* Additional game components can be added here */}
        </div>
    );
}

export default Game;
