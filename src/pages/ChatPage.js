import React, { useState } from 'react';
import Navbar from '../components/Navbar';

/**
 * 기본적인 채팅 페이지 예시.
 * 실제 서버와의 연동(소켓/HTTP 등)은 생략하고, 단순히 로컬 상태로만 메시지를 관리합니다.
 */

const styles = {
  container: {
    width: '100%',
    maxWidth: '480px',
    margin: '0 auto',
    height: '895px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: 0,
    backgroundColor: '#9CE3D4',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '18px',
    fontWeight: '600',
  },
  chatLog: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
  },
  message: {
    display: 'inline-block',
    padding: '8px 12px',
    marginBottom: '10px',
    borderRadius: '16px',
    maxWidth: '70%',
    wordWrap: 'break-word',
    clear: 'both',
  },
  myMessage: {
    backgroundColor: '#9CE3D4',
    color: '#fff',
    float: 'right',
    textAlign: 'right',
    marginRight: '5px',
  },
  otherMessage: {
    backgroundColor: '#fff',
    color: '#333',
    float: 'left',
    textAlign: 'left',
    marginLeft: '5px',
    border: '1px solid #ddd',
  },
  text: {
    margin: 0,
    lineHeight: '1.4',
  },
  inputContainer: {
    display: 'flex',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '15px',
    border: 'none',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#9CE3D4',
    border: 'none',
    color: '#fff',
    fontWeight: '600',
    fontSize: '15px',
    padding: '10px 15px',
    cursor: 'pointer',
  },
};

const ChatPage = () => {
  // messages: [{ sender: 'me' or 'other', text: '문자열' }, ...]
  const [messages, setMessages] = useState([
    { sender: 'other', text: '안녕하세요! 채팅 테스트입니다.' },
    { sender: 'other', text: '무엇이든 물어보세요 :D' },
  ]);

  // 채팅 입력 값
  const [inputValue, setInputValue] = useState('');

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      sender: 'me',
      text: inputValue,
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>밥 친구</h2>
      {/* 채팅 로그 */}
      <div style={styles.chatLog}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={
              msg.sender === 'me'
                ? { ...styles.message, ...styles.myMessage }
                : { ...styles.message, ...styles.otherMessage }
            }
          >
            <p style={styles.text}>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* 입력 폼 */}
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
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
