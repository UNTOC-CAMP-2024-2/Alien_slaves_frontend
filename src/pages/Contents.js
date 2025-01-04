import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contents() {
  const navigate = useNavigate();

  const menuItems = [
    { label: '공지사항', route: '/notice' },
    { label: '평가 화면', route: '/review' },
    { label: '랭킹 화면', route: '/ranking' },
    { label: '식단 화면', route: '/home' },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      overflow: 'hidden',
      color: '#ffffff',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      marginTop: '40px'
    },
    button: {
      backgroundColor: '#ffffff',
      color: '#333333',
      width: '80%',
      padding: '20px 20px',
      margin: '30px 0',
      borderRadius: '25px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '1.3rem',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
      fontWeight: 'bolder',
    },
    buttonHover: {
      backgroundColor: '#999999',
    },
    arrow: {
      fontSize: '1.2rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>전체 메뉴</h1>
      {menuItems.map((item, index) => (
        <div
          key={index}
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate(item.route)}
        >
          <span>{item.label}</span>
          <span style={styles.arrow}>&gt;</span>
        </div>
      ))}
    </div>
  );
}

export default Contents;