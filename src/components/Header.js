import React from 'react';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기

function Header() {
  const navigate = useNavigate(); // 네비게이트 함수 생성

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      width: '100%',
      boxSizing: 'border-box',
    },
    logoContainer: {
      margin: '5px 0px',
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      width: '30px',
      height: 'auto',
      marginRight: '10px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    iconButton: {
      background: 'none', // 배경 제거
      border: 'none', // 테두리 제거
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '5px',
    },
  };

  return (
    <nav style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`}
          alt="Rice Bowl Icon"
          style={styles.logoImage}
        />
        <span style={styles.title}>BUGIK</span>
      </div>
      {/* FaBell 아이콘을 버튼으로 변경 */}
      <button
        style={styles.iconButton}
        onClick={() => navigate('/notice')} // 클릭 시 /notice로 이동
      >
        <FaBell />
      </button>
    </nav>
  );
}

export default Header;
