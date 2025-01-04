import React from 'react';

function Header() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'center',   // 수평 가운데 정렬
      alignItems: 'center',       // 수직 가운데 정렬
      padding: '20px',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      width: '100%',
      boxSizing: 'border-box',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      // 로고와 텍스트를 가로로 나란히 배치
    },
    logoImage: {
      width: '30px',
      height: 'auto',
      marginRight: '10px',        // 로고와 텍스트 사이의 여백
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
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
    </nav>
  );
}

export default Header;
