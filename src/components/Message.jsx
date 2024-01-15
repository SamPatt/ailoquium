import React from 'react';
// import './Message.css';

function Message({ content, author }) {
    return (
        <div className={`message ${author === 'User' ? 'user-message' : 'ai-message'}`}>
            <div className={`message-content ${author === 'User' ? 'user' : 'ai'}`}>
                {content}
            </div>
        </div>
    );
}

export default Message;
