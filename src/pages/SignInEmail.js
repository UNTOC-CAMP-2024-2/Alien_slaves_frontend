import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInEmail() {
  const navigate = useNavigate();

  // 폼 입력값 상태
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [college, setCollege] = useState('');

  // (1) 이메일 코드 전송
  const handleSendCode = () => {
    console.log('이메일로 인증 코드를 전송합니다. 이메일:', email);
  };

  // (2) 인증 코드 확인
  const handleVerifyCode = () => {
    console.log('사용자가 입력한 인증 코드:', code);
  };

  // (3) 닉네임 중복 확인
  const handleCheckNickname = () => {
    console.log('닉네임 중복 확인 요청:', nickname);
  };

  // (4) 소속 대학 확인
  const handleCheckCollege = () => {
    console.log('소속 대학 확인 요청:', college);
  };

  // (5) 로그인 버튼 클릭 시 -> Home으로 이동
  const handleLogin = () => {
    console.log('회원가입 완료 후 Home으로 이동');
    // navigate('/login');  // 기존 코드
    navigate('/home');      // 수정
  };

  // 인라인 스타일
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '80vh',
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
    header: {
      textAlign: 'left',
      margin: '0 0 10px 5px',
      fontWeight: '400',
    },
    // 로고와 타이틀을 나란히, 가운데 정렬
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px',
    },
    logoImage: {
      width: '40px',
      height: 'auto',
      marginRight: '10px', 
    },
    title: {
      margin: 0,
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    inputRow: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
    input: {
      flex: 1,
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '0.9rem',
    },
    smallButton: {
      marginLeft: '8px',
      padding: '8px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#e0e0e0',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    loginButton: {
      width: '100%',
      padding: '12px',
      margin: '16px 0 0 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#9CE3D4',
      color: '#1a1a1a',
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* 상단 레이블 */}
        <h3 style={styles.header}>회원가입</h3>

        {/* 로고와 타이틀 */}
        <div style={styles.titleContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`}
            alt="Rice Bowl Icon"
            style={styles.logoImage}
          />
          <h2 style={styles.title}>BUGIK</h2>
        </div>

        {/* (1) 이메일 입력 + 코드 전송 버튼 */}
        <div style={styles.inputRow}>
          <input
            type="email"
            placeholder="이메일을 입력해주세요."
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={styles.smallButton} onClick={handleSendCode}>
            코드 전송
          </button>
        </div>

        {/* (2) 인증 코드 입력 + 확인 버튼 */}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="인증 코드를 입력해주세요."
            style={styles.input}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button style={styles.smallButton} onClick={handleVerifyCode}>
            확인
          </button>
        </div>

        {/* (3) 닉네임 입력 + 중복 확인 버튼 */}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요."
            style={styles.input}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button style={styles.smallButton} onClick={handleCheckNickname}>
            중복 확인
          </button>
        </div>

        {/* (4) 소속 대학 입력 + 확인 버튼 */}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="소속 대학을 입력해주세요."
            style={styles.input}
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <button style={styles.smallButton} onClick={handleCheckCollege}>
            확인
          </button>
        </div>

        {/* (5) 최종 로그인 버튼 (수정) */}
        <button style={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default SignInEmail;
