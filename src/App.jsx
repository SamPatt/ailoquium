import React from 'react';
import { GameProvider } from './components/GameContext';
import Game from './components/Game';

function App() {
    return (
        <GameProvider>
            <Game />
        </GameProvider>
    );
}

export default App;