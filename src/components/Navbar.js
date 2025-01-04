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
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#67D3C4' }));
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
      position: 'absolute',
      height: '40px',
      bottom: 0,
      width: '100%',
      backgroundColor: '#fafafa',
      color: '#fff',
      borderTop: '1px solid #333',
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
        onClick={() => navigate('/home')}
      >
        <FaHome color={iconColors.home} />
      </div>

      {/* 리뷰 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('review')}
        onMouseLeave={() => handleMouseLeave('review')}
        onClick={() => navigate('/review')}
      >
        <FaListAlt color={iconColors.review} />
      </div>

      {/* 랭킹 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('ranking')}
        onMouseLeave={() => handleMouseLeave('ranking')}
        onClick={() => navigate('/ranking')}
      >
        <FaTrophy color={iconColors.ranking} />
      </div>

      {/* 전체 메뉴 아이콘 */}
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('contents')}
        onMouseLeave={() => handleMouseLeave('contents')}
        onClick={() => navigate('/contents')}
      >
        <FaBars color={iconColors.contents} />
      </div>
    </div>
  );
}

export default Navbar;
