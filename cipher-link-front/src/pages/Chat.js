import React from 'react'
import './Chat.css'
import Contacts from './Contacts'
import ChatHeader from './Chat/ChatHeader'
import ChatBody from './Chat/ChatBody/ChatBody'
import ChatFooter from './Chat/ChatFooter'

const Chat = ({ messages }) => {
    return (
        <div className='container-chat'>

            <Contacts />

            <div className='container-chat-message'>

                <ChatHeader />

                <ChatBody messages={messages} />

                <ChatFooter />

            </div>
        </div>
    )
}

export default Chat