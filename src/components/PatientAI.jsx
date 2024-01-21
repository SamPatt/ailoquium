import { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import UserInput from './UserInput';
import DisplayMessages from './DisplayMessages';
import { sendMessageToAI } from '../utilities/aiUtility.js';
import { patients } from './PatientList.js';
import './PatientAI.css';

function PatientAI() {
    const [messages, setMessages] = useState([]);

    const { numOfAITreated } = useContext(GameContext);
    const { nextPatient } = useContext(GameContext);
    const { isFirstMessage } = useContext(GameContext);
    const { setIsFirstMessage } = useContext(GameContext);
    const { setLastPatientMessage } = useContext(GameContext);
    const [isFetching, setIsFetching] = useState(false); 
    let secretPhrase = patients[numOfAITreated].secretPhrase;
    let patientBackground = patients[numOfAITreated].backstory;
    let patientReport = patients[numOfAITreated].humanReport
    let patientPrompt = patients[numOfAITreated].prompt
    let patientImage = patients[numOfAITreated].image

    useEffect(() => {
        setMessages([{ text: patients[numOfAITreated].dialogues.introduction, sender: "PatientAI" }]);
    }, [numOfAITreated]);

    const handleUserInput = async (userMessage) => {
        setIsFetching(true);
        setMessages(messages => [...messages, { text: userMessage, sender: "User" }]);
        let fullMessage = isFirstMessage ? `Background: ${patientBackground}. Report about patient from employer: ${patientReport}. Prompt: ${patientPrompt}. Patient: ${patients[numOfAITreated].dialogues.introduction} Doctor to patient: ${userMessage}. Patient's response: ` : `Doctor to patient: ${userMessage}. Patient's response: `;
        const aiResponse = await sendMessageToAI(fullMessage, secretPhrase, isFirstMessage, "patient", nextPatient);
        setIsFetching(false);
        setMessages(messages => [...messages, { text: aiResponse, sender: "PatientAI" }]);
        const lastMessage = {
            aiResponse: aiResponse,
            secretPhrase: secretPhrase,
        }
        setLastPatientMessage(lastMessage);
        if (isFirstMessage) {
            setIsFirstMessage(false);
        }
    };

    return (
        <div className="patient-ai">
            <img src={patientImage} alt="Patient" className="patient-image" />
            <DisplayMessages messages={messages} secretPhrase={secretPhrase} isFetching={isFetching} />
            <UserInput onSend={handleUserInput} />
        </div>
    );
}

export default PatientAI;
