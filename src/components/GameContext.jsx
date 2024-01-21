import { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [numOfAITreated, setNumOfAITreated] = useState(0);
    const [moneyAtStartOfLevel, setMoneyAtStartOfLevel] = useState(0);
    const [moneyRemainingFromCurrentJob, setMoneyRemainingFromCurrentJob] = useState(180);
    const [isFirstMessage, setIsFirstMessage] = useState(true);
    const [lastPatientMessage, setLastPatientMessage] = useState({});
    const [isFirstNurseMessage, setIsFirstNurseMessage] = useState(true);
    const [showTransitionScreen, setShowTransitionScreen] = useState(false);
    const [showIntroScreen, setShowIntroScreen] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [timer, setTimer] = useState(0);
    const [totalTime, setTotalTime] = useState(0);

    // Timer functionality
    

    useEffect(() => {
        let interval;

        // Start the timer only if the intro screen is not shown and the transition screen is not shown
        if (!showIntroScreen && !showTransitionScreen) {
            interval = setInterval(() => {
                // Timer functionality
                setTimer(currentNum => currentNum + 1);
                setMoneyRemainingFromCurrentJob(prevMoney => {
                    const updatedMoney = prevMoney - 1;
                    if (updatedMoney <= 0) {
                        setGameOver(true);
                        clearInterval(interval);
                    }
                    return updatedMoney;
                });
            }, 1000);
        }
        // Clear interval on component unmount or when the timer should be paused
        return () => clearInterval(interval);
    }, [showIntroScreen, showTransitionScreen]);
    
    const startOver = () => {
        setUsername(''); // Reset username if needed, or keep it based on game design
        setNumOfAITreated(0);
        setMoneyAtStartOfLevel(0);
        setMoneyRemainingFromCurrentJob(180); 
        setIsFirstMessage(true);
        setLastPatientMessage({});
        setIsFirstNurseMessage(true);
        setShowTransitionScreen(false);
        setShowIntroScreen(true);
        setGameOver(false);
        setGameWon(false);
        setTimer(0);
        setTotalTime(0);
    };

    const startGame = () => {
        setShowIntroScreen(false);
    };

    const nextPatient = () => {
        setTotalTime(currentTime => currentTime + timer);
        setMoneyAtStartOfLevel(moneyAtStartOfLevel + moneyRemainingFromCurrentJob);
        setShowTransitionScreen(true); // Show transition screen first
    };
    
    const proceedToNextPatient = () => {
        setTimer(0);
        setIsFirstMessage(true);
        setNumOfAITreated(currentNum => currentNum + 1);
        setMoneyRemainingFromCurrentJob(180);
        setShowTransitionScreen(false); // Hide transition screen after moving to next patient
    };
    

    const value = {
        numOfAITreated,
        setNumOfAITreated,
        moneyAtStartOfLevel,
        setMoneyAtStartOfLevel,
        moneyRemainingFromCurrentJob,
        setMoneyRemainingFromCurrentJob,
        gameOver,
        setGameOver,
        timer,
        showTransitionScreen,
        nextPatient,
        proceedToNextPatient,
        isFirstMessage,
        setIsFirstMessage,
        isFirstNurseMessage,
        setIsFirstNurseMessage,
        lastPatientMessage,
        setLastPatientMessage,
        showIntroScreen,
        startGame,
        username,
        setUsername,
        totalTime,
        setTotalTime,
        startOver,
        gameWon,
        setGameWon,
    };

    if(gameOver && showTransitionScreen){
        setGameOver(false);
    }
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
