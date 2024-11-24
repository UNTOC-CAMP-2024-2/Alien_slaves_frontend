// src/components/Notice.js
import React from 'react';

function Notice({ message }) {
  const styles = {
    noticeContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 10px',
    },
    noticeBox: {
      color: '#333',
      borderRadius: '25px',
      padding: '10px 20px',
      fontSize: '1rem',
      width: '90%',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
  };

  return (
    <div style={styles.noticeContainer}>
      <div style={styles.noticeBox}>
        {message || '공지사항이 없습니다.'}
      </div>
    </div>
  );
}

export default Notice;
