import { useState, useContext } from 'react';
import { GameContext } from './GameContext';
import Leaderboard from './Leaderboard'; 
import { addTotalScore } from '../utilities/scoreUtility'

const GameOverScreen = () => {
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const { numOfAITreated, moneyAtStartOfLevel, username, totalTime } = useContext(GameContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic (e.g., saving the score, fetching leaderboard)
        setShowLeaderboard(true);
        addTotalScore(username, numOfAITreated, totalTime, moneyAtStartOfLevel);
    };

    if (showLeaderboard) {
        return <Leaderboard username={username} />;
    }

    return (
        <div>
            <h1>Game Over</h1>
            <p>Dr. {username}, You treated {numOfAITreated + 1} patients.</p>
            <p>Total Money Earned: {moneyAtStartOfLevel}</p>
            <p>Total treatment time: {totalTime}</p>
            <p>Submit your score to the leaderboard.</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Check Leaderboard</button>
            </form>
        </div>
    );
};

export default GameOverScreen;
