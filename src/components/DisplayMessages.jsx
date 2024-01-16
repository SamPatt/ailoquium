import React from 'react';
import Message from './Message'; 
// import './DisplayMessages.css';

function DisplayMessages({ messages, secretPhrase }) {
    return (
        <div className="messages-container">
            {messages.slice(0).reverse().map((message, index) => (
                <Message 
                    key={index} 
                    content={message.text} 
                    author={message.sender}
                    secretPhrase={secretPhrase}
                />
            ))}
        </div>
    );
}

export default DisplayMessages;
