import { useState, useContext, useEffect } from 'react';
import { GameContext } from './GameContext';
import Leaderboard from './Leaderboard'; 
import { addTotalScore } from '../utilities/scoreUtility'
import './WinGameScreen.css';

const WinGameScreen = () => {
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const { numOfAITreated, moneyAtStartOfLevel, username, totalTime } = useContext(GameContext);
    
    useEffect(() => {
        addTotalScore(username, numOfAITreated, moneyAtStartOfLevel, totalTime);
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();        
        setShowLeaderboard(true);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    if (showLeaderboard) {
        return <Leaderboard username={username} />;
    }

    return (
        <div className="win-screen">
            <h1>You win!</h1>
            <p>Dr. {username}, you treated {numOfAITreated + 1} patients.</p>
            <p>Total Money Earned: <strong>${moneyAtStartOfLevel}</strong></p>
            <p>Total treatment time: <strong>{formatTime(totalTime)}</strong></p>
            <p>Submit your score to the leaderboard.</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Check Leaderboard</button>
            </form>
        </div>
    );
};

export default WinGameScreen;
