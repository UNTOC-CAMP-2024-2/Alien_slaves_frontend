import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); // 네비게이트 함수 생성

  // 아이콘 색상을 상태로 관리
  const [iconColors, setIconColors] = useState({
    bell: '#fff', // 알림 아이콘 색상
  });

  // 마우스를 올렸을 때 아이콘 색상 변경
  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#999999' }));
  };

  // 마우스를 떼었을 때 아이콘 색상 원래대로
  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#fff' }));
  };

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
      background: 'none',
      border: 'none',
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
          src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`} // 로고 이미지 경로 확인 필요
          alt="Rice Bowl Icon"
          style={styles.logoImage}
        />
        <span style={styles.title}>BUGIK</span>
      </div>
      <button
        style={styles.iconButton}
        onClick={() => navigate('/notice')}
        onMouseEnter={() => handleMouseEnter('bell')}
        onMouseLeave={() => handleMouseLeave('bell')}
      >
        <FaBell color={iconColors.bell} />
      </button>
    </nav>
  );
}

export default Header;
