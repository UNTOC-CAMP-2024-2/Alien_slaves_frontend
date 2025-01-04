import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  // 로그인 버튼
  const handleLogin = () => {
    console.log('닉네임:', nickname);
    console.log('이메일:', email);
    // 실제 로직에서 서버 통신 or 메인 페이지 이동 등을 수행
  };

  // 회원가입 버튼
  const handleSignup = () => {
    // 이메일 회원가입 페이지로 이동
    navigate('/signinemail');
  };

  // 카카오 로그인 버튼
  const handleKakaoLogin = () => {
    // 카카오 회원가입/로그인 페이지로 이동
    navigate('/signinkakao');
  };

  // 스타일 정의
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
      width: '320px',
      backgroundColor: '#fff', 
      borderRadius: '8px',
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
      width: '50px',
      height: 'auto',
      marginRight: '10px',
    },
    title: {
      margin: 0,
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    input: {
      width: '95%',
      padding: '8px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '0.9rem',
    },
    kakaoButton: {
      width: '100%',
      padding: '12px',
      margin: '12px 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#FEE500',
      color: '#3B1D1D',
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    btnGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    actionBtn: {
      width: '48%',
      padding: '12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: '#9CE3D4',
      color: '#1a1a1a',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* 상단의 “로그인” 레이블 */}
        <h3 style={{ textAlign: 'left', margin: '0 0 10px 5px', fontWeight: '400' }}>
          로그인
        </h3>
        
        {/* 로고와 제목을 가로로, 중앙 정렬 */}
        <div style={styles.logoContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`}
            alt="Rice Bowl Icon"
            style={styles.logoImage}
          />
          <h2 style={styles.title}>BUGIK</h2>
        </div>

        {/* 입력 필드 (닉네임, 이메일) */}
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

        {/* 카카오 로그인 버튼 -> SignInKakao 페이지로 이동 */}
        <button style={styles.kakaoButton} onClick={handleKakaoLogin}>
          Login with Kakao
        </button>

        {/* 회원가입 / 로그인 버튼 */}
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
