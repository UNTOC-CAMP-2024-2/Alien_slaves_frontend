import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInEmail() {
  const navigate = useNavigate();

  // 폼 입력값 상태
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [college, setCollege] = useState(''); // 선택한 대학 저장

  // (5) 전화번호 상태 추가
  const [phoneNumber, setPhoneNumber] = useState('');

// 이메일 코드 전송
const handleSendCode = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/auth/email/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('인증 코드 전송 성공');
      alert("인증 코드가 전송되었습니다.");
    } else {
      const errorData = await response.json();
      console.error('인증 코드 전송 실패:', errorData);
    }
  } catch (error) {
    console.error('인증 코드 요청 에러:', error);
  }
};

// 인증 코드 확인
const handleVerifyCode = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/auth/email/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    });

    if (response.ok) {
      console.log('인증 코드 확인 성공');
      alert("인증 코드가 확인되었습니다.");
    } else {
      const errorData = await response.json();
      console.error('인증 코드 확인 실패:', errorData);
      alert("인증 코드가 틀렸습니다.");
    }
  } catch (error) {
    console.error('인증 코드 확인 요청 에러:', error);
  }
};

// 닉네임 중복 확인
const handleCheckNickname = async () => {
  try {
    console.log(nickname);
    const response = await fetch(`http://localhost:4000/api/v1/users/checkUsername/${nickname}`, {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log('닉네임 중복 확인 성공:', data);
      //alert(data.message);
      alert("닉네임 중복 확인되었습니다.")
    } else {
      const errorData = await response.json();
      console.error('닉네임 중복 확인 실패:', errorData);
      alert(errorData.message || '닉네임 중복 확인 실패');
    }
  } catch (error) {
    console.error('닉네임 중복 확인 요청 에러:', error);
    alert('서버와의 연결에 문제가 발생했습니다.');
  }
};



// 소속 대학 확인
const handleCheckCollege = async () => {
  try {
    console.log('소속 대학 확인 요청:', college);
    // 추가 API 호출이 필요하면 여기에 추가 가능합니다.
  } catch (error) {
    console.error('소속 대학 확인 에러:', error);
  }
};

// 최종 회원가입
const handleSignIn = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/v1/auth/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, nickname, phoneNumber, college }),
    });

    if (response.ok) {
      console.log('회원가입 성공');
      navigate('/home'); // 성공 시 홈으로 이동s
      alert('회원가입이 완료되었습니다.');
    } else {
      const errorData = await response.json();
      console.error('회원가입 실패:', errorData);
    }
  } catch (error) {
    console.error('회원가입 요청 에러:', error);
  }
};


  // (5) 전화번호 입력 시 숫자만 남기기
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    // 숫자와 하이픈(-)만 허용
    const formattedInput = input.replace(/[^0-9-]/g, '');
    setPhoneNumber(formattedInput);
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
      marginBottom: '10px',
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
      fontSize: '0.8rem',
      fontWeight: 'bold',
      color: '#939191',
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
    SignInButton: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: '#9CE3D4',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },

    inputNumber: {
      marginTop: '0px',
      padding: '0px'
    }
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

                {/* (4) 전화번호 입력 - 숫자만 */}
                <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="전화번호를 입력해주세요."
            style={styles.input}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

       {/* (5) 소속 대학 선택 (select 태그) */}
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
          <option value="정보의생명공학대학">정보의생명공학대학</option>
        </select>

        {/* (6) 최종 로그인 버튼 */}
        <button style={styles.SignInButton} onClick={handleSignIn}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default SignInEmail;
