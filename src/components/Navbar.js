import React from 'react';
import { FaHome, FaListAlt, FaTrophy, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const styles = {
    bottomNav: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px 0',
      position: 'absolute',
      height: '40px',
      bottom: 0,
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      borderTop: '1px solid #333',
    },
    bottomButton: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.3rem',
      cursor: 'pointer',
    },
  };

  return (
    <>
      {/* 상단 네비게이션 바 */}
      {/* <Header /> */}

      {/* 하단 탭 네비게이션 */}
      <div style={styles.bottomNav}>
        <div style={styles.bottomButton} onClick={() => navigate('/home')}>
          <FaHome />
        </div>
        <div style={styles.bottomButton} onClick={() => navigate('/review')}>
          <FaListAlt />
        </div>
        <div style={styles.bottomButton} onClick={() => navigate('/ranking')}>
          <FaTrophy />
        </div>
        <div style={styles.bottomButton} onClick={() => navigate('/all')}>
          <FaBars />
        </div>
      </div>
    </>
  );
}

export default Navbar;
