import React from 'react';
import Chat from './pages/Chat';
import messagesData from './data/messages.json';

function App() {
  const messages = messagesData.messages; // Extraia apenas as mensagens

  return (
    <div className="App">
      <Chat messages={messages} />
    </div>
  );
}

export default App;
