// src/pages/1.js
import React from 'react';

function FirstPage() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#101012',
      flexDirection: 'column',
      margin: '0',
      padding: '0',
    },
    logo: {
      width: '100px',
      height: 'auto',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      color: '#ffffff',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon.png`} alt="Rice Bowl Icon (white)" style={styles.logo} />
      <div style={styles.title}>BUGIK</div>
    </div>
  );
}
//asdsdasdasd
export default FirstPage;
