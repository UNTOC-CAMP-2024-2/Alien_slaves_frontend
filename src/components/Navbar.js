import React, { useState } from 'react';
import { FaHome, FaListAlt, FaTrophy, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  // 아이콘별 색상 상태
  const [iconColors, setIconColors] = useState({
    home: '#E3E5E9',
    review: '#E3E5E9',
    ranking: '#E3E5E9',
    contents: '#E3E5E9',
  });

  // 마우스 오버 시 아이콘 색상 변경
  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#9CE3D4' }));
  };

  // 마우스 클릭 시 아이콘 색상 변경 + 다른 아이콘은 기본 색상
  const handleIconClick = (icon) => {
    setIconColors({
      home: '#E3E5E9',
      review: '#E3E5E9',
      ranking: '#E3E5E9',
      contents: '#E3E5E9',
      [icon]: '#9CE3D4',
    });
  };

  // 마우스가 벗어났을 때 색상 복귀
  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#E3E5E9' }));
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
        onClickCapture={() => handleIconClick('home')} // << 추가
        onClick={() => navigate('/home')}              // 기존 코드 유지
      >
        <FaHome color={iconColors.home} />
      </div>

      {/* 리뷰 아이콘 (코드상 name='evaluating'이지만 state는 'review'로 되어 있어 맞춰줌) */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('evaluating')}
        onMouseLeave={() => handleMouseLeave('evaluating')}
        onClickCapture={() => handleIconClick('review')} // << 추가
        onClick={() => navigate('/evaluating')}          // 기존 코드 유지
      >
        <FaListAlt color={iconColors.review} />
      </div>

      {/* 랭킹 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('ranking')}
        onMouseLeave={() => handleMouseLeave('ranking')}
        onClickCapture={() => handleIconClick('ranking')} // << 추가
        onClick={() => navigate('/ranking')}              // 기존 코드 유지
      >
        <FaTrophy color={iconColors.ranking} />
      </div>

      {/* 전체 메뉴 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('contents')}
        onMouseLeave={() => handleMouseLeave('contents')}
        onClickCapture={() => handleIconClick('contents')} // << 추가
        onClick={() => navigate('/contents')}              // 기존 코드 유지
      >
        <FaBars color={iconColors.contents} />
      </div>
    </div>
  );
}

export default Navbar;
