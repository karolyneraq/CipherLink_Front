import React from 'react';
import * as C from './styledComponents'; // Importe os componentes estilizados

const Message = ({ message }) => {
    return (
        <C.Container>
            <C.Content>
                <C.Message>{message.message}</C.Message>
                <C.MessageDate>
                    {new Date(message.date_hour).toLocaleString()} {/* Exibe a data/hora formatada */}
                </C.MessageDate>
            </C.Content>
        </C.Container>
    );
}

export default Message;
