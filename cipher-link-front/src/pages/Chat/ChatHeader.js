import React from 'react'
import '../Chat.css'
import { FaUserCircle } from "react-icons/fa";

const ChatHeader = () => {
    return (
        <div className='chat-header-user'>

            <div className='img-user'>
                <FaUserCircle size={'40px'} />
            </div>

            <div className='user-info-chat-bar'>
                <h3>jorgecap</h3>
                <h6>Conectado</h6>
            </div>

        </div>
    )
}

export default ChatHeader