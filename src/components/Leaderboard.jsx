import { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import { fetchScores, fetchTotalScores } from '../utilities/scoreUtility';
import { patients } from './PatientList';
import './Leaderboard.css';

const Leaderboard = ({ username }) => {
    const [scores, setScores] = useState([]);
    const [totalScores, setTotalScores] = useState([]);
    const { startOver } = useContext(GameContext);

    useEffect(() => {
        const getScores = async () => {
            const scoreData = await fetchScores();
        
            // Group scores by level
            const scoresByLevel = scoreData.reduce((acc, score) => {
                if (!acc[score.level]) {
                    acc[score.level] = [];
                }
                acc[score.level].push(score);
                return acc;
            }, {});
        
            // Find the lowest time for each level
            const lowestScores = Object.values(scoresByLevel).map(scores => {
                return scores.reduce((lowest, current) => {
                    return (lowest.time < current.time) ? lowest : current;
                });
            });
        
            // Optionally sort the levels if needed
            const sortedLowestScores = lowestScores.sort((a, b) => a.level - b.level);
        
            setScores(sortedLowestScores);
        };

        const getTotalScores = async () => {
            const totalScoreData = await fetchTotalScores();
            const sortedTotalScores = totalScoreData
                .sort((a, b) => b.total_money - a.total_money) // Sort by total money, highest first
                .slice(0, 5); // Get top 5
            setTotalScores(sortedTotalScores);
        };

        getScores();
        getTotalScores();
    }, []);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    const isCurrentUser = (entryUsername) => {
        return entryUsername === username;
    };

    const handleStartNewGame = () => {
        startOver();
    };

    return (
        <div className='leaderboard-container'>
            <h1>Leaderboard</h1>
            <h2>Fastest Times</h2>
            <ul>
                {scores.map(score => (
                    <li key={score.id} className={isCurrentUser(score.username) ? 'highlight' : ''}>
                       <strong>{patients[score.level].name}</strong> - {score.username} - {formatTime(score.time)}
                    </li>
                ))}
            </ul>
            <h2>Highest Earnings</h2>
            <ul>
                {totalScores.map(totalScore => (
                    <li key={totalScore.id} className={isCurrentUser(totalScore.username) ? 'highlight' : ''}>
                        {totalScore.username} - Treated {totalScore.highest_level+ 1}, earned ${totalScore.total_money}
                    </li>
                ))}
            </ul>
            <button onClick={handleStartNewGame}>Start New Game</button>
        </div>
    );
};

export default Leaderboard;
