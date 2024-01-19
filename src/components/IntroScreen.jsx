import { useState, useContext } from "react";
import { GameContext } from "./GameContext";
import "./IntroScreen.css";

const IntroScreen = () => {
  const [localUsername, setLocalUsername] = useState("");
  const { setUsername, startGame } = useContext(GameContext);
  const [showInstructions, setShowInstructions] = useState(false);

  const capitalizeFirstLetters = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleShowInstructions = () => {
    setShowInstructions(true);
  };

  const handleHideInstructions = () => {
    setShowInstructions(false);
  };

  const handleStartGame = () => {
    if (!localUsername.trim()) {
      alert("Please enter a username to start the game.");
      return;
    }
    const capitalizedUsername = capitalizeFirstLetters(localUsername);
    setUsername(capitalizedUsername);
    startGame();
  };

  return (
    <div className="intro-screen">
      <div className="intro-content">
        <div><h1>Ailoquium: Cyber Psyche Repair</h1>
        <button onClick={handleShowInstructions}>How to Play</button>
        {showInstructions && (
        <div className="modal" onClick={handleHideInstructions}>
          <div className="modal-content">
            <p>
            You are a doctor specializing in treating AIs. You treat your patients through talk therapy.</p>
            <p>If your patient responds with the <strong>Successful Treatment Phrase</strong> in time, you will be be given another patient. </p>
            <p>The faster you treat your patients, the more money you make. Ask your nurse for help if you are stuck.</p>

          </div>
        </div>
      )}</div>
        <div className="form-container">
          <input
            type="text"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      </div>
      
    </div>
  );
};

export default IntroScreen;
