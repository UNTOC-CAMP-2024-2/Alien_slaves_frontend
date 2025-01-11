import React, { useState } from 'react';
import { IoChatbubble } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('닉네임:', nickname);
    console.log('이메일:', email);
  };

  const handleSignup = () => {
    navigate('/signinemail');
  };

  const handleKakaoLogin = () => {
    navigate('/signinkakao');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#FAFAFA',
    },
    card: {
      width: '370px',
      backgroundColor: '#fff',
      borderRadius: '26px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      textAlign: 'center',
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
    },
    logoImage: {
      width: '170px',
      height: 'auto',
      marginRight: '10px',
      padding: '10px',
    },
    input: {
      width: '95%',
      padding: '8px',
      margin: '10px 0',
      borderRadius: '8px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      backgroundColor: '#F5F5F8',
    },
    kakaoButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '87%',
      padding: '10px',
      margin: '12px 0px 20px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: '#FEE500',
      color: '#3B1D1D',
      fontWeight: 'bold',
      fontSize: '1.0rem',
    },
    kakaoIcon: {
      fontSize: '0.9rem',
      marginRight: '8px',
    },
    btnGroup: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10px',
    },
    actionBtn: {
      width: '40%',
      padding: '8px',
      margin: '0 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: '#9CE3D4',
      color: '#ffffff',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={{ textAlign: 'left', margin: '0 0 10px 5px', fontWeight: '500', fontSize: '12px' }}>
          로그인
        </h3>
        <div style={styles.logoContainer}>
          <img
            src={`${process.env.PUBLIC_URL}assets/BUGIK_Logo.jpg`}
            alt="BUGIK Logo"
            style={styles.logoImage}
          />
        </div>
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          style={styles.input}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={styles.kakaoButton} onClick={handleKakaoLogin}>
          <IoChatbubble style={styles.kakaoIcon} /> Login with Kakao
        </button>
        <div style={styles.btnGroup}>
          <button style={styles.actionBtn} onClick={handleSignup}>
            회원가입
          </button>
          <button style={styles.actionBtn} onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
