import React from 'react';

function App() {
  const menuItems = [
    "흑미밥", "참치김치찌개", "돈육장조림", "맛김", "콩나물무침", "배추겉절이", "우유(두유)"
  ];

  const ratings = [5, 5, 5, 5, 5, 5, 5];

  return (
    <div style={styles.container}>
      
      <ImageSection />
      <InfoSection menuItems={menuItems} ratings={ratings} />
      
    </div>
  );
}



function ImageSection() {
  return (
    <div style={styles.imageSection}>
      <img src="웅비관 밥 사진.jpg" alt="웅비관 밥 사진.jpg" style={styles.image} />
    </div>
  );
}

function InfoSection({ menuItems, ratings }) {
  return (
    <div style={styles.infoSection}>
      <div style={styles.dormitoryTitle}>기숙사</div>
      <div style={styles.menuTabs}>
        <span>자유관</span> <span>진리관</span> <span>올비관</span>
      </div>
      <div style={styles.mealTime}>
        <span>아침</span> <span>점심</span> <span>저녁</span>
      </div>
      <div style={styles.menu}>
        {menuItems.map((item, index) => (
          <div key={index} style={styles.menuItem}>
            <span>{item}</span>
            <span style={styles.rating}>{'⭐'.repeat(ratings[index])}</span>
          </div>
        ))}
      </div>
    </div>
  );
}




const styles = {
  container: {
    width: '360px',
    margin: 'auto',
    backgroundColor: '#222',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: '20px',
    color: '#fff',
  },
  header: {
    backgroundColor: '#333',
    textAlign: 'center',
    padding: '20px',
    color: '#fff',
    fontSize: '18px',
  },
  logo: {
    width: '24px',
    verticalAlign: 'middle',
    marginRight: '8px',
  },
  imageSection: {
    textAlign: 'center',
    padding: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  infoSection: {
    padding: '20px',
  },
  dormitoryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  menuTabs: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  mealTime: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
  },
  menu: {
    marginTop: '10px',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px 0',
  },
  rating: {
    color: 'gold',
  },
  footer: {
    backgroundColor: '#333',
    textAlign: 'center',
    padding: '10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default App;
