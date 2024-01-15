import React from 'react';
import Message from './Message'; // Import the Message component
// import './DisplayMessages.css'; // For styling the message display

function DisplayMessages({ messages }) {
    return (
        <div className="messages-container">
            {messages.slice(0).reverse().map((message, index) => (
                <Message 
                    key={index} 
                    content={message.text} // Updated to use 'text'
                    author={message.sender} // Updated to use 'sender'
                />
            ))}
        </div>
    );
}

export default DisplayMessages;
