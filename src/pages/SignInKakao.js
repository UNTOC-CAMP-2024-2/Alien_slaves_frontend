import React, { useState } from 'react';
import { IoChatbubble } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function SignInKakao() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState('');

  // 닉네임 중복 확인 버튼
  const handleCheckNickname = () => {
    console.log('닉네임 중복 확인:', nickname);
  };

   // 전화번호 입력 시 숫자만 남기기
   const handlePhoneNumberChange = (e) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(onlyNumbers);
  };

   // 소속 대학 확인
   const handleCheckCollege = () => {
    console.log('소속 대학 확인 요청:', college);
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
      width: '370px',
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
      width: '170px',
      height: 'auto',
      padding: '10px',
    },
    inputRow: {
      display: 'flex',
      alignItems: 'center',
      margin: '16px 0',
    },
    input: {
      flex: 1,
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '0.9rem',
      backgroundColor: '#F5F5F8',
      color: '#939191',
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
    select: {
      width: '100%',
      padding: '8px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '0.9rem',
      marginBottom: '10px',
      color: '#939191',
      backgroundColor: '#F5F5F8',
      marginTop: '0px',
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
        
                {/* 전화번호 입력 - 숫자만 */}
                <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="전화번호를 입력해주세요."
            style={styles.input}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

       {/*  소속 대학 선택 (select 태그) */}
       <select
          style={{
            ...styles.select,
            marginBottom: '20px', // ← 여기만 추가
          }}
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

        {/* 카카오 로그인 버튼 */}
        <button style={styles.kakaoButton} onClick={handleKakaoSignIn}>
          <IoChatbubble style={styles.kakaoIcon} />Sign in with Kakao
        </button>
      </div>
    </div>
  );
}

export default SignInKakao;
