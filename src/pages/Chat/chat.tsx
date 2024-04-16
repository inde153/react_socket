import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import styles from './chat.module.css';

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
  const [meChatMessages, setMeChatMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('message', (data: Message) => {
      setMeChatMessages([data]);
      setMessageInput('');
    });

    return () => {
      socket.off();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', messageInput);
  };

  return (
    <div className={styles.container}>
      {isLoggedIn === 'true' ? (
        <>
          <ul>
            {meChatMessages.map((message, index) => (
              <li key={index}>{`${message}`}</li>
            ))}
          </ul>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </>
      ) : (
        <button onClick={() => navigate('/login')}>Go to Login</button>
      )}
    </div>
  );
}

export default Chat;
