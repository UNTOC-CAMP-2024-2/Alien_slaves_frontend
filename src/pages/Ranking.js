import React from 'react';

function Home() {
  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 0',
    },
    logo: {
      width: '40px',
      marginRight: '8px',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    mealInfo: {
      marginTop: '10px',
    },
    mealImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
    },
    mealImage: {
      width: '90%',
      border: '2px solid #00aaff',
      borderRadius: '8px',
    },
    ratings: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    },
    dormRating: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
      position: 'relative',
      width: '100px',
    },
    trophyImage: {
      width: '40px',
      height: '40px',
      marginBottom: '8px',
    },
    dormImage: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      margin: '0 auto',
    },
    topRated: {
      border: '2px solid #ffd700',
      padding: '5px',
      borderRadius: '10px',
    },
    bar: {
      width: '90px',
      height: '230px',
      backgroundColor: '#fff',
      margin: '8px auto 0',
      borderRadius: '2px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ratingText: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#000',
      marginTop: '10px',
    },
    dormName: {
      marginTop: '8px',
      fontWeight: 'bold',
      color: '#fff',
      fontSize: '1.1rem',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.mealInfo}>
        <p style={{ fontWeight: 'bold' }}>2024/10/26 웅비관 저녁</p>
        <div style={styles.mealImageContainer}>
          <img src={`${process.env.PUBLIC_URL}/assets/웅비관 밥 사진.jpg`} alt="Meal" style={styles.mealImage} />
        </div>
      </div>
      <div style={styles.ratings}>
        <div style={styles.dormRating}>
          <img src={`${process.env.PUBLIC_URL}/assets/진리관 사진.jpg`} alt="진리관" style={styles.dormImage} />
          <p style={styles.dormName}>진리관</p>
          <div style={styles.bar}>
            <img src={`${process.env.PUBLIC_URL}/assets/2등.png`} alt="silver Trophy" style={styles.trophyImage} />
            <p style={styles.ratingText}>4.2 Rating</p>
          </div>
        </div>
        <div style={{ ...styles.dormRating, ...styles.topRated }}>
          <img src={`${process.env.PUBLIC_URL}/assets/웅비관 사진.jpg`} alt="웅비관" style={styles.dormImage} />
          <p style={styles.dormName}>웅비관</p>
          <div style={styles.bar}>
            <img src={`${process.env.PUBLIC_URL}/assets/1등.png`} alt="Gold Trophy" style={styles.trophyImage} />
            <p style={styles.ratingText}>4.7 Rating</p>
          </div>
        </div>
        <div style={styles.dormRating}>
        <img src={`${process.env.PUBLIC_URL}/assets/자유관 사진.jpg`} alt="자유관" style={styles.dormImage} />
        <p style={styles.dormName}>자유관</p>
          <div style={styles.bar}>
            <img src={`${process.env.PUBLIC_URL}/assets/3등.png`} alt="bronze Trophy" style={styles.trophyImage} />
            <p style={styles.ratingText}>3.7 Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
