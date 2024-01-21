import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { patients } from "./PatientList";
import { addLevelScore } from "../utilities/scoreUtility";
import chartIcon from "../assets/healthcare.png";
import "./TransitionScreen.css";

const TransitionScreen = () => {
  const {
    timer,
    moneyAtStartOfLevel,
    moneyRemainingFromCurrentJob,
    proceedToNextPatient,
    lastPatientMessage,
    numOfAITreated,
    username,
    totalTime,
    setTotalTime,
    setGameWon,
  } = useContext(GameContext);
  const [staticMoneyRemaining, setStaticMoneyRemaining] = useState(
    moneyRemainingFromCurrentJob
  );
  const [staticTimer, setStaticTimer] = useState(timer);
  const [showNextPatientDetails, setShowNextPatientDetails] = useState(false);

  const DetailItem = ({ title, content }) => (
    <div className="patient-detail-item">
      <div className="patient-detail-title">{title}</div>
      <div className="patient-detail-content">{content}</div>
    </div>
  );

  useEffect(() => {
    // Set the static money remaining value when the component mounts
    setStaticMoneyRemaining(moneyRemainingFromCurrentJob);
    setStaticTimer(timer);
  }, []); // Empty dependency array ensures this runs only once on mount
  const moneyRemaining = staticMoneyRemaining;
  const time = staticTimer;

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formattedMinutes = minutes.toString().padStart(1, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const handleWinGame = () => {
    addLevelScore(username, numOfAITreated, timer);
    setGameWon(true);
  };

  const handleNextPatientDetails = () => {
    addLevelScore(username, numOfAITreated, timer);
    setShowNextPatientDetails(true);
  };

  const nextPatientDetails = patients[numOfAITreated + 1] || {};
  const isLastPatient = numOfAITreated === patients.length - 1;

  const highlightSecretPhrase = (text, phrase) => {
    if (!phrase) return text;
    const parts = text.split(new RegExp(`(${phrase})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === phrase.toLowerCase() ? (
        <span key={index} className="secretPhrase">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="transition-screen">
      {!showNextPatientDetails ? (
        <>
          <h2>Treatment Successful!</h2>
          <p className="fadeInScaleUp">
            "
            {highlightSecretPhrase(
              lastPatientMessage.aiResponse,
              lastPatientMessage.secretPhrase
            )}
            "
          </p>
          <p>
            Treatment time: {formattedMinutes}:{formattedSeconds}
          </p>
          <p>
            Money Earned:{" "}
            <span className="secretPhrase">${moneyRemaining}</span>
          </p>
          <p>
            Total Money:{" "}
            <span className="secretPhrase">${moneyAtStartOfLevel}</span>
          </p>
          {!isLastPatient ? (
            <button onClick={handleNextPatientDetails}>
              View Next Patient
            </button>
          ) : (
            <button onClick={handleWinGame}>Finish Game</button>
          )}
        </>
      ) : (
        <>
        <div className="patient-details">
          <h2>Next Patient</h2>
          <DetailItem title="Name" content={nextPatientDetails.name} />
          <DetailItem
            title="Backstory"
            content={nextPatientDetails.backstory}
          />
          <DetailItem
            title="Human Report"
            content={nextPatientDetails.humanReport}
          />
          <DetailItem title="Evidence" content={nextPatientDetails.evidence} />
        </div>
          <button className="chart-button" onClick={proceedToNextPatient}>
            <img src={chartIcon} alt="Chart Icon" className="chart-icon" />
            Start Treatment
          </button>
        </>
      )}
    </div>
  );
};

export default TransitionScreen;
