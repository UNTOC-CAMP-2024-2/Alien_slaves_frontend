import React from 'react';
import { FaBell } from 'react-icons/fa';

function Header() {
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
    icon: {
      fontSize: '1.2rem',
      margin: '0px 20px 0px 0px',
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
      <FaBell style={styles.icon} />
    </nav>
  );
}

export default Header;
