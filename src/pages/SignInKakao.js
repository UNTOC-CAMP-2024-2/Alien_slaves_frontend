import React, { useState } from 'react';
import { IoChatbubble } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function SignInKakao() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [college, setCollege] = useState('');

  // 닉네임 중복 확인 버튼
  const handleCheckNickname = () => {
    console.log('닉네임 중복 확인:', nickname);
  };

  // 카카오 로그인/회원가입 버튼
  const handleKakaoSignIn = () => {
    console.log('카카오로 회원가입/로그인 시도');
    navigate('/home');
  };

  // 인라인 스타일 정의
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
      width: '360px',
      backgroundColor: '#fff',
      borderRadius: '26px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      textAlign: 'center',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
    },
    logoImage: {
      width: '140px',
      height: 'auto',
      padding: '30px 0px 60px 0px',
    },
    inputRow: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
    input: {
      flex: 1,
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '0.9rem',
    },
    smallButton: {
      marginLeft: '8px',
      padding: '8px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: '#e0e0e0',
      color: '#939191',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    collegeInput: {
      margin: '10px 0',
      width: '100%',
    },
    kakaoButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '87%',
      padding: '10px',
      margin: '12px 0px 12px 20px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: '#FEE500',
      color: '#3B1D1D',
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    kakaoIcon: {
      fontSize: '1.2rem',
      marginRight: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* 상단 레이블 */}
        <h3
          style={{
            textAlign: 'left',
            margin: '0 0 10px 5px',
            fontWeight: '500',
            fontSize: '12px',
          }}
        >
          회원가입
        </h3>

        {/* 로고와 텍스트가 합쳐진 이미지로 대체 */}
        <div style={styles.titleContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/BUGIK_Logo.jpg`}
            alt="BUGIK Logo"
            style={styles.logoImage}
          />
        </div>

        {/* 닉네임 입력 + 중복 확인 버튼 */}
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

        {/* 소속 대학 입력 */}
        <input
          type="text"
          placeholder="소속 대학을 입력해주세요."
          style={{
            ...styles.input, // 기본 input 스타일
            ...styles.collegeInput, // 추가/재정의할 스타일
          }}
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        {/* 카카오 로그인 버튼 */}
        <button style={styles.kakaoButton} onClick={handleKakaoSignIn}>
          <IoChatbubble style={styles.kakaoIcon} />Sign in with Kakao
        </button>
      </div>
    </div>
  );
}

export default SignInKakao;
