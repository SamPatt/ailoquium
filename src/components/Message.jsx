import React from 'react';
// import './Message.css';

function Message({ content, author }) {
    return (
        <div className={`message ${author === 'user' ? 'user-message' : 'ai-message'}`}>
            <div className={`message-content ${author === 'user' ? 'user' : 'ai'}`}>
                {content}
            </div>
        </div>
    );
}

export default Message;
