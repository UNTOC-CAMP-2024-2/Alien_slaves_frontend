import React, { useState } from 'react';
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
    // 실제 구현 시, 카카오 OAuth SDK or 백엔드 API 호출
    // 완료 후, navigate('/home') 등 페이지 이동 가능
  };

  // 인라인 스타일 정의
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
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
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
      backgroundColor: '#9CE3D4',
      color: '#1a1a1a',
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    // 소속 대학 전용 스타일
    collegeInput: {
      margin: '10px 0',
      width: '95%',         // 원하는 길이로 조절
      alignSelf: 'center',  // 필요 시 정렬 보정
    },
    kakaoButton: {
      width: '100%',
      padding: '12px',
      margin: '16px 0 0 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      backgroundColor: '#FEE500',
      color: '#3B1D1D',
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

        {/* 소속 대학 입력 - 별도 스타일 병합 */}
        <input
          type="text"
          placeholder="소속 대학을 입력해주세요."
          style={{ 
            ...styles.input,       // 기본 input 스타일
            ...styles.collegeInput // 추가/재정의할 스타일
          }}
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        {/* 카카오 로그인 버튼 */}
        <button style={styles.kakaoButton} onClick={handleKakaoSignIn}>
          Sign in with Kakao
        </button>
      </div>
    </div>
  );
}

export default SignInKakao;
