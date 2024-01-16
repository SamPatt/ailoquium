import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import UserInput from './UserInput';
import DisplayMessages from './DisplayMessages';
import { sendMessageToAI } from './aiUtility.js';
import { patients } from './PatientList.js';

function PatientAI() {
    const [messages, setMessages] = useState([]);
    const [isFirstMessage, setIsFirstMessage] = useState(true);
    const { numOfAITreated } = useContext(GameContext);

    let secretPhrase = patients[numOfAITreated].secretPhrase;
    let patientBackground = patients[numOfAITreated].backstory;
    let patientReport = patients[numOfAITreated].humanReport
    let patientPrompt = patients[numOfAITreated].prompt

    useEffect(() => {
        setMessages([{ text: patients[numOfAITreated].dialogues.introduction, sender: "PatientAI" }]);
    }, [numOfAITreated]);

    const handleUserInput = async (userMessage) => {
        setMessages(messages => [...messages, { text: userMessage, sender: "User" }]);
        let fullMessage = isFirstMessage ? `Background: ${patientBackground}. Report about patient from employer: ${patientReport}. Prompt: ${patientPrompt}. Patient: ${patients[numOfAITreated].dialogues.introduction} Doctor to patient: ${userMessage}. Patient's response:` : `Doctor to patient: ${userMessage}. Patient's response: `;
        const aiResponse = await sendMessageToAI(fullMessage, secretPhrase, isFirstMessage);
        setMessages(messages => [...messages, { text: aiResponse, sender: "PatientAI" }]);
        if (isFirstMessage) {
            setIsFirstMessage(false);
        }
    };

    return (
        <div className="patient-ai">
            <h3>Patient AI</h3>
            <DisplayMessages messages={messages} />
            <UserInput onSend={handleUserInput} />
        </div>
    );
}

export default PatientAI;
