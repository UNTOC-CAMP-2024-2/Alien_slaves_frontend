import React from 'react';

function Header() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'center',   // 수평 가운데 정렬
      alignItems: 'center',       // 수직 가운데 정렬
      padding: '5px',
      backgroundColor: '#FFFFFF',
      color: '#101010',
      width: '100%',
      boxSizing: 'border-box',
      position: 'sticky',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
      width: '170px',  // 로고 크기를 조정
      height: 'auto',
      padding: '10px',
    },
  };

  return (
    <nav style={styles.header}>
      <div style={styles.logoContainer}>
        {/* 로고와 텍스트가 합쳐진 이미지로 대체 */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/BUGIK_Logo.jpg`}
          alt="BUGIK Logo"
          style={styles.logoImage}
        />
      </div>
    </nav>
  );
}

export default Header;
