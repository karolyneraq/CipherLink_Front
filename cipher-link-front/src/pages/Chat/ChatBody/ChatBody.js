import React from 'react';
import Message from '../../Messages/Message'; // Importe o componente Message
import * as C from "./styles";

const ChatBody = ({ messages }) => {
    return (
        <C.Container>
            <div>
                {Object.keys(messages).map((key) => (
                    <Message key={messages[key].massage_id} message={messages[key]} />
                ))}
            </div>
        </C.Container>
    );
}

export default ChatBody;
