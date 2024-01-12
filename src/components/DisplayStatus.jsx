import React, { useContext } from 'react';
import { GameContext } from './GameContext';
// import './DisplayStatus.css';  // Assuming you have a corresponding CSS file for styling

function DisplayStatus() {
    const { currentLevel, energyUsed, energyAtStartOfLevel } = useContext(GameContext);

    return (
        <div className="status-container">
            <h3>Game Status</h3>
            <p>Current Level: {currentLevel}</p>
            <p>Start with: {energyAtStartOfLevel}</p>
            <p>Energy Used: {energyUsed}</p>
            {/* You can add more game status information here */}
        </div>
    );
}

export default DisplayStatus;
