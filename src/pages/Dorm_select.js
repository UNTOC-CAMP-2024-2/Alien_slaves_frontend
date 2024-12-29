// src/pages/Dorm_select.js
import React, { useState } from 'react';
import riceBowlIcon from '../assets/rice-bowl-icon.png';

// 기숙사 이름과 사진 리스트
const dormData = [
  { name: '금정회관', image: `${process.env.PUBLIC_URL}/assets/금정회관 사진.jpg` },
  { name: '웅비관', image: `${process.env.PUBLIC_URL}/assets/웅비관 사진.jpg` },
  { name: '자유관', image: `${process.env.PUBLIC_URL}/assets/자유관 사진.jpg` },
  { name: '진리관', image: `${process.env.PUBLIC_URL}/assets/진리관 사진.jpg` },
];

function DormSelect({ onSubmit }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % dormData.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dormData.length - 1 : prevIndex - 1
    );
  };

  const handleConfirm = () => {
    const selectedDorm = dormData[currentImageIndex];
    console.log(`기숙사 선택: ${selectedDorm.name}`);
    if (onSubmit) onSubmit(selectedDorm.name);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#101012',
      padding: '0',
      overflow: 'hidden',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    logo: {
      width: '50px',
      marginRight: '10px',
    },
    title: {
      fontSize: '1.5rem',
      color: '#ffffff',
      fontWeight: 'bold',
    },
    imageContainer: {
      position: 'relative',
      width: '80%',
      maxWidth: '400px',
      borderRadius: '20px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '20px',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '2rem',
      color: '#ffffff',
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '5px 10px',
      borderRadius: '50%',
    },
    leftArrow: {
      left: '10px',
    },
    rightArrow: {
      right: '10px',
    },
    dormName: {
      fontSize: '1.2rem',
      color: '#ffffff',
      marginTop: '10px',
    },
    button: {
      width: '30%',
      padding: '10px',
      marginTop: '20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#ddd',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={riceBowlIcon} alt="Rice Bowl Icon" style={styles.logo} />
        <div style={styles.title}>BUGIK</div>
      </div>
      <div style={styles.imageContainer}>
        <img src={dormData[currentImageIndex].image} alt="Dormitory" style={styles.image} />
        <div style={{ ...styles.arrow, ...styles.leftArrow }} onClick={handlePrev}>
          ◀
        </div>
        <div style={{ ...styles.arrow, ...styles.rightArrow }} onClick={handleNext}>
          ▶
        </div>
      </div>
      <div style={styles.dormName}>{dormData[currentImageIndex].name}</div>
      <button style={styles.button} onClick={handleConfirm}>확인</button>
    </div>
  );
}

export default DormSelect;
