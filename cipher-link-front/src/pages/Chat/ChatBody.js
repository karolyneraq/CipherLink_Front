import React from 'react';
import '../Chat.css';

const ChatBody = ({ messages }) => {
    return (
        <div className='container-chat-content'>
            <div>
                {Object.keys(messages).map((key) => (
                    <div key={messages[key].massage_id} className='messages-container'>
                        <p><strong>{messages[key].user}</strong>: {messages[key].message}</p>
                        <p><small>{messages[key].date_hour}</small></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatBody;
