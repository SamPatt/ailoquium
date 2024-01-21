import React from 'react';
import Message from './Message'; 
import './DisplayMessages.css';

function DisplayMessages({ messages, secretPhrase, isFetching }) {
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
            {isFetching && <div className="loading-indicator"></div>}
        </div>
    );
}

export default DisplayMessages;
