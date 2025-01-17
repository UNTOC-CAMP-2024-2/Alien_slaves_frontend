import React, { useState } from 'react';
import { IoIosText } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LogIn() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/auth/email/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, nickname }), // 이메일과 닉네임 전송
      });
  
      if (response.ok) {  
        const data = await response.json(); // 서버에서 반환된 사용자 정보
        const { accessToken, refreshToken } = response;
        Cookies.set('accessToken', accessToken, { expires: 7 });
        Cookies.set('refreshToken', refreshToken, { expires: 7 });
        Cookies.set('email', email, { expires: 7 });
        console.log('로그인 성공:', data);
        alert('로그인 성공! 환영합니다.');
        navigate('/home'); // 로그인 성공 시 홈 페이지로 이동
      } else {
        const errorData = await response.json();
        console.error('로그인 실패:', errorData);
        alert(errorData.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 요청 에러:', error);
      alert('서버와의 연결에 문제가 발생했습니다.');
    }
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
      fontSize: '1.2rem',
      marginRight: '8px',
      marginTop: '3px',
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
          <IoIosText style={styles.kakaoIcon} /> Login with Kakao
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
