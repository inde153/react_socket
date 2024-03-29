import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';

interface Message {
  sender: string;
  message: string;
}

const socket = io('http://localhost:8000/socket');

function Chat() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (data: Message) => {
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off();
    };
  }, []);
  const sendMessage = () => {
    socket.emit('message', messageInput, (chat: any) => {
      setChatMessages((prevChats) => [...prevChats, chat]);
      setMessageInput('');
    });
  };

  return (
    <div>
      {isLoggedIn === 'true' ? (
        <>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={sendMessage}>Send</button>
          <ul>
            {chatMessages.map((message, index) => (
              <li key={index}>{`${message}`}</li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>Go to Login</button>
      )}
    </div>
  );
}

export default Chat;
