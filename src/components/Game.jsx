import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayNotes from './DisplayNotes';
import DisplayStatus from './DisplayStatus';
import AIChatInterface from './AIChatInterface';

function Game() {
    const { currentLevel, energyUsed, energyAtStartOfLevel } = useContext(GameContext);

    // Additional game logic or functions can be added here

    return (
        <div className="game-container">
            <h1>Game Title</h1>
            

            {/* Display the game map */}
            <DisplayNotes />

            {/* AI Chat Interface */}
            <AIChatInterface />

            <DisplayStatus />
            {/* Additional game components can be added here */}
        </div>
    );
}

export default Game;
