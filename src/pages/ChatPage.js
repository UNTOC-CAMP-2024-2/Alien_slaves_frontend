import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../components/Navbar';

const socket = io('http://localhost:4000', {
  transports: ['websocket', 'polling'],
});

// 스타일 객체
const styles = {
  container: {
    width: '100%',
    maxWidth: '480px',
    margin: '0 auto',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    margin: 0,
    backgroundColor: '#9CE3D4',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  chatLog: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  messageContainer: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'flex-end',
  },
  myMessageContainer: {
    justifyContent: 'flex-end',
  },
  otherMessageContainer: {
    justifyContent: 'flex-start',
  },
  message: {
    padding: '10px 15px',
    borderRadius: '20px',
    maxWidth: '70%',
    wordBreak: 'break-word',
    lineHeight: '1.4',
  },
  myMessage: {
    backgroundColor: '#9CE3D4',
    color: '#fff',
    textAlign: 'right',
  },
  otherMessage: {
    backgroundColor: '#f1f1f1',
    color: '#333',
    textAlign: 'left',
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#9CE3D4',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const email = Cookies.get('email') || 'guest@example.com'; // 기본 이메일 설정
  const currentRoomId = Cookies.get('chatRoomId') || '1'; // 기본 방 설정

  useEffect(() => {
    // 방 참여 및 초기 메시지 가져오기
    const initializeChat = async () => {
      try {
        await axios.post('http://localhost:4000/api/v1/chat/join-room', {
          chatRoomId: currentRoomId,
          email,
          userId: email,
        });

        socket.emit('join_room', { chatRoomId: currentRoomId, email });

        const { data } = await axios.get(
          `http://localhost:4000/api/v1/chat/room-messages/${currentRoomId}`
        );
        setMessages(
          data.map((msg) => ({
            sender: msg.email === email ? 'me' : 'other',
            text: msg.message,
            email: msg.email,
          }))
        );
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };

    initializeChat();

    // 메시지 수신 이벤트 설정
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: data.email === email ? 'me' : 'other',
          text: data.message,
          email: data.email,
        },
      ]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, [currentRoomId, email]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      chatRoomId: currentRoomId,
      email,
      message: inputValue,
    };

    socket.emit('send_message', newMessage);
    setInputValue('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>밥 친구</h2>
      <div style={styles.chatLog}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.messageContainer,
              ...(msg.sender === 'me'
                ? styles.myMessageContainer
                : styles.otherMessageContainer),
            }}
          >
            <div
              style={{
                ...styles.message,
                ...(msg.sender === 'me' ? styles.myMessage : styles.otherMessage),
              }}
            >
              <p>
                <strong>{msg.email}</strong>
              </p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button style={styles.sendButton} onClick={handleSendMessage}>
          전송
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default ChatPage;
