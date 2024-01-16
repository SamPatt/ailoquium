import React from 'react';
import './Message.css';

function Message({ content, author, secretPhrase }) {
    // Function to highlight the secret phrase
    const highlightSecretPhrase = (text, phrase) => {
        if (!phrase) return text;
        const parts = text.split(new RegExp(`(${phrase})`, 'gi'));
        return parts.map((part, index) => 
            part.toLowerCase() === phrase.toLowerCase() 
                ? <span key={index} className="highlight">{part}</span> 
                : part
        );
    };

    return (
        <div className={`message ${author === 'User' ? 'user-message' : 'ai-message'}`}>
            <div className={`message-content ${author === 'User' ? 'user' : 'ai'}`}>
                {highlightSecretPhrase(content, secretPhrase)}
            </div>
        </div>
    );
}

export default Message;
