import React from 'react'


function Notice() {
    const styles = {
        letter: {
            color: '#fff',
        }
    };

  return (
    <div style={styles.letter}>
        <h1>이 화면은 공지사항 화면입니다.</h1>
        <h3>공지사항화면</h3>
        </div>
  );
}

export default Notice