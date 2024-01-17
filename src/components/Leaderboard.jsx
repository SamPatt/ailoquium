import React, { useState, useEffect } from 'react';
import { fetchScores, fetchTotalScores } from './scoreUtility';

const Leaderboard = ({ username }) => {
    const [scores, setScores] = useState([]);
    const [totalScores, setTotalScores] = useState([]);

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
        </div>
    );
};

export default Leaderboard;
