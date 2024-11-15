// src/components/Navbar.js
import React from 'react';
import { FaHome, FaListAlt, FaTrophy, FaBars, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const styles = {
    navbar: {
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
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      width: '50px',
      marginRight: '10px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    icon: {
      fontSize: '1.2rem',
      margin: '0px 20px 0px 0px'
    },
    bottomNav: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px 0',
      position: 'absolute',
      height: '50px',
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
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`} alt="Rice Bowl Icon" style={styles.logoImage} />
          <span style={styles.title}>BUGIK</span>
        </div>
        <FaBell style={styles.icon} />
      </nav>

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
