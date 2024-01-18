import { useState, useContext } from 'react';
import { GameContext } from './GameContext';

const IntroScreen = () => {
    const [localUsername, setLocalUsername] = useState('');
    const { setUsername, startGame } = useContext(GameContext);
    
    const capitalizeFirstLetters = (str) => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(' ');
    };
    
    const handleStartGame = () => {
        if (!localUsername.trim()) {
            alert('Please enter a username to start the game.');
            return;
        }
        const capitalizedUsername = capitalizeFirstLetters(localUsername);
        setUsername(capitalizedUsername);
        startGame();
    };

    return (
        <div className="intro-screen">
            <h1>Welcome to Ailoquium: Cyber Psyche Repair</h1>
            <p>Game instructions and story...</p>
            <input 
                type="text"
                value={localUsername}
                onChange={(e) => setLocalUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleStartGame}>Start Game</button>
        </div>
    );
};

export default IntroScreen;
