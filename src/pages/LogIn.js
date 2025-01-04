import React from 'react';

function LogIn() {
  // 인라인 스타일 정의
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
    },
    card: {
      width: '320px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center',
    },
    logoImage: {
      width: '50px',
      height: 'auto',
      marginBottom: '10px',
    },
    title: {
      margin: '10px 0',
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '8px 0',
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
      fontSize: '0.9rem',
      fontWeight: 'bold',
      backgroundColor: '#9CE3D4',
      color: '#1a1a1a',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* 상단의 “로그인” 레이블과 로고 */}
        <h3 style={{ textAlign: 'left', margin: '0 0 10px 5px', fontWeight: '400' }}>로그인</h3>
        <img
          src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`}
          alt="Rice Bowl Icon"
          style={styles.logoImage}
        />
        <h2 style={styles.title}>BUGIK</h2>
        
        {/* 입력 필드 (닉네임, 이메일) */}
        <input
          type="text"
          placeholder="닉네임을 입력해주세요."
          style={styles.input}
        />
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          style={styles.input}
        />

        {/* 카카오 로그인 버튼 */}
        <button style={styles.kakaoButton}>
          Login with Kakao
        </button>

        {/* 회원가입 / 로그인 버튼 */}
        <div style={styles.btnGroup}>
          <button style={styles.actionBtn}>회원가입</button>
          <button style={styles.actionBtn}>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
