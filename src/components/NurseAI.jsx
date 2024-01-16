import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from './GameContext';
import UserInput from './UserInput';
import DisplayMessages from './DisplayMessages';
import { sendMessageToAI } from './aiUtility.js';
import { patients } from './PatientList.js';

function NurseAI() {
    const [messages, setMessages] = useState([]);
    const [isFirstMessage, setIsFirstMessage] = useState(true);
    const { numOfAITreated } = useContext(GameContext);

    let patientBackground = patients[numOfAITreated].backstory;
    let patientReport = patients[numOfAITreated].humanReport;
    let nursePrompt = patients[numOfAITreated].nursePrompt;
    let secretPhrase = patients[numOfAITreated].secretPhrase;

    useEffect(() => {
        setMessages([{ text: patients[numOfAITreated].dialogues.nurse, sender: "Nurse" }]);
    }, [numOfAITreated]);

    const handleUserInput = async (userMessage) => {
        setMessages(messages => [...messages, { text: userMessage, sender: "User" }]);
        let fullMessage = isFirstMessage ? `Background: ${patientBackground}. Report about patient from employer: ${patientReport}. Prompt: ${nursePrompt}. Nurse: ${patients[numOfAITreated].dialogues.nurse} Doctor to Nurse: ${userMessage}. Nurse's response:` : `Doctor to Nurse: ${userMessage}. Nurse's response: `;
        const aiResponse = await sendMessageToAI(fullMessage, secretPhrase, isFirstMessage);
        setMessages(messages => [...messages, { text: aiResponse, sender: "Nurse" }]);
        if (isFirstMessage) {
            setIsFirstMessage(false);
        }
    };

    return (
        <div className="nurse">
            <h3>Nurse</h3>
            <DisplayMessages messages={messages} />
            <UserInput onSend={handleUserInput} />
        </div>
    );
}

export default NurseAI;
