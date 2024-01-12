import React, { useState } from 'react';
import './UserInput.css';

function UserInput({ onSend }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <form className="user-input-form" onSubmit={handleSubmit}>
            <input
                className="user-input-field"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
            />
            <button className="send-button" type="submit">Send</button>
        </form>
    );
}

export default UserInput;
