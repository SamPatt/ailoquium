import { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import { fetchScores, fetchTotalScores } from '../utilities/scoreUtility';

const Leaderboard = ({ username }) => {
    const [scores, setScores] = useState([]);
    const [totalScores, setTotalScores] = useState([]);
    const { startOver } = useContext(GameContext); 

    useEffect(() => {
        const getScores = async () => {
            const scoreData = await fetchScores();
            setScores(scoreData);
        };

        const getTotalScores = async () => {
            const totalScoreData = await fetchTotalScores();
            setTotalScores(totalScoreData);
        };

        getScores();
        getTotalScores();
    }, []);

    const handleStartNewGame = () => {
        startOver();
    }

    return (
        <div>
            <h1>Leaderboard</h1>
            <p>Welcome, {username}</p>
            <h2>Score Leaderboard</h2>
            <ul>
                {scores.map(score => (
                    <li key={score.id}>{score.username} - Level: {score.level}, Time: {score.time}</li>
                ))}
            </ul>
            <h2>Total Scores</h2>
            <ul>
                {totalScores.map(totalScore => (
                    <li key={totalScore.id}>{totalScore.username} - Highest Level: {totalScore.highest_level}, Total Time: {totalScore.total_time}, Total Money: {totalScore.total_money}</li>
                ))}
            </ul>
            <button onClick={handleStartNewGame}>Start New Game</button>
        </div>
    );
};

export default Leaderboard;
