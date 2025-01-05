import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInEmail() {
  const navigate = useNavigate();

  // 폼 입력값 상태
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [college, setCollege] = useState(''); // 선택한 대학 저장

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
    console.log('이메일: ',  email);
    console.log('닉네임: ', nickname);
    console.log('선택한 소속 대학:', college);
    navigate('/home');
  };

  // 인라인 스타일
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
      borderRadius: '26px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      textAlign: 'center',
    },
    titleContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px',
    },
    logoImage: {
      width: '140px',
      height: 'auto',
      padding: '10px',
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
      fontSize: '0.8rem',
      fontWeight: 'bold',
    },
    select: {
      width: '100%',
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '0.9rem',
      marginBottom: '10px',
    },
    loginButton: {
      width: '100%',
      padding: '12px',
      margin: '16px 0 0 0',
      border: 'none',
      borderRadius: '8px',
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
        <h3 style={{ textAlign: 'left', margin: '0 0 10px 5px', fontWeight: '500', fontSize: '12px' }}>
          회원가입
        </h3>

        {/* 로고(글자 포함) 하나만 사용 */}
        <div style={styles.titleContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/BUGIK_Logo.jpg`}
            alt="BUGIK Logo"
            style={styles.logoImage}
          />
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

        {/* (4) 소속 대학 선택 (select 태그) */}
        <select
          style={styles.select}
          value={college}
          onChange={(e) => {
            setCollege(e.target.value);
            handleCheckCollege(); // 소속 대학 확인 함수 호출
          }}
        >
          <option value="" disabled>
            소속 대학을 선택해주세요.
          </option>
          <option value="인문대학">인문대학</option>
          <option value="사회과학대학">사회과학대학</option>
          <option value="자연과학대학">자연과학대학</option>
          <option value="경제통상대학">경제통상대학</option>
          <option value="공과대학">공과대학</option>
          <option value="경영대학">경영대학</option>
          <option value="약학대학">약학대학</option>
          <option value="생활과학대학">생활과학대학</option>
          <option value="사범대학">사범대학</option>
          <option value="예술대학">예술대학</option>
          <option value="첨단융합학부">첨단융합학부</option>
        </select>

        {/* (5) 최종 로그인 버튼 */}
        <button style={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  );
}

export default SignInEmail;
