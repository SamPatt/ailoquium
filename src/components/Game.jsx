import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayNotes from './DisplayNotes';
import DisplayStatus from './DisplayStatus';
import AIChatInterface from './AIChatInterface';
import TransitionScreen from './TransitionScreen';
import IntroScreen from './IntroScreen';
import GameOverScreen from './GameOverScreen';

function Game() {
    const { gameOver, showTransitionScreen, showIntroScreen } = useContext(GameContext);

    if (showIntroScreen) {
        return <IntroScreen />;
    }
    if (gameOver) {
        
        return <GameOverScreen />;
    }
    return (
        <div className="game-container">
            <h2>Ailoquium: Cyber Psyche Repair</h2>
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