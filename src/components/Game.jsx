import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import DisplayNotes from './DisplayNotes';
import DisplayStatus from './DisplayStatus';
import AIChatInterface from './AIChatInterface';
import TransitionScreen from './TransitionScreen';
import IntroScreen from './IntroScreen';
import GameOverScreen from './GameOverScreen';
import WinGameScreen from './WinGameScreen';
import './Game.css';

function Game() {
    const { gameOver, gameWon, showTransitionScreen, showIntroScreen } = useContext(GameContext);

    if (gameWon) {      
        return <WinGameScreen />;
    }

    if (showIntroScreen) {
        return <IntroScreen />;
    }

    if (gameOver) {
        return <GameOverScreen />;
    }

    return (
        <div className="game-container">
            {showTransitionScreen ? (
                <TransitionScreen />
            ) : (
                <>
                    <h3>Ailoquium</h3>
                    <div className="display-notes">
                        <DisplayNotes />
                    </div>
                    <div className="ai-chat-interface">
                        <AIChatInterface />
                    </div>
                    <div className="display-status">
                        <DisplayStatus />
                    </div>
                </>
            )}
        </div>
    );
}

export default Game;
