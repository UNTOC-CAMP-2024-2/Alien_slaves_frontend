import React, { useState } from 'react';
import { FaHome, FaListAlt, FaTrophy, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  // 아이콘별 색상 상태
  const [iconColors, setIconColors] = useState({
    home: '#E3E5E9',
    evaluating: '#E3E5E9',
    ranking: '#E3E5E9',
    contents: '#E3E5E9',
  });

  // 마우스 오버 시 아이콘 색상 변경
  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#9CE3D4' }));
  };

  // 마우스가 떠났을 때 아이콘 색상 복구
  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#E3E5E9' }));
  };

  // 마우스 클릭 시 아이콘 색상 변경 + 다른 아이콘은 기본 색상
  const handleIconClick = (icon, route) => {
    setIconColors({
      home: '#E3E5E9',
      evaluating: '#E3E5E9',
      ranking: '#E3E5E9',
      contents: '#E3E5E9',
      [icon]: '#9CE3D4',
    });
    navigate(route); // 클릭 시 해당 경로로 이동
  };

  // 스타일 객체
  const styles = {
    bottomNav: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '25px 0',
      width: '100%',
      backgroundColor: '#ffffff',
      color: '#fff',
      position: 'sticky',
      bottom: 0,
      zIndex: 10,
    },
    bottomButton: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.bottomNav}>
      {/* 홈 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={() => handleMouseLeave('home')}
        onClick={() => handleIconClick('home', '/home')}
      >
        <FaHome color={iconColors.home} />
      </div>

      {/* 리뷰 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('evaluating')}
        onMouseLeave={() => handleMouseLeave('evaluating')}
        onClick={() => handleIconClick('evaluating', '/evaluating')}
      >
        <FaListAlt color={iconColors.evaluating} />
      </div>

      {/* 랭킹 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('ranking')}
        onMouseLeave={() => handleMouseLeave('ranking')}
        onClick={() => handleIconClick('ranking', '/ranking')}
      >
        <FaTrophy color={iconColors.ranking} />
      </div>

      {/* 전체 메뉴 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('contents')}
        onMouseLeave={() => handleMouseLeave('contents')}
        onClick={() => handleIconClick('contents', '/contents')}
      >
        <FaBars color={iconColors.contents} />
      </div>
    </div>
  );
}

export default Navbar;
