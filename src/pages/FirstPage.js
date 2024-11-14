// src/pages/1.js
import React from 'react';
import riceBowlIcon from '../assets/rice-bowl-icon.png';

function FirstPage() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#101012',
      flexDirection: 'column',
      margin: '0',
      padding: '0',
    },
    logo: {
      width: '200px',
      height: '200px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '3rem',
      color: '#ffffff',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <img src={riceBowlIcon} alt="Rice Bowl Icon" style={styles.logo} />
      <div style={styles.title}>BUGIK</div>
    </div>
  );
}
//asdsdasdasd
export default FirstPage;
