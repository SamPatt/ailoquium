import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayNotes from './DisplayNotes';
import DisplayStatus from './DisplayStatus';
import AIChatInterface from './AIChatInterface';
import TransitionScreen from './TransitionScreen';

function Game() {
    const { showTransitionScreen } = useContext(GameContext);

    return (
        <div className="game-container">
            <h1>Game Title</h1>
            {showTransitionScreen ? (
                <TransitionScreen />
            ) : (
                <>
                    <DisplayNotes />
                    <AIChatInterface />
                    <DisplayStatus />
                </>
            )}
        </div>
    );
}

export default Game;