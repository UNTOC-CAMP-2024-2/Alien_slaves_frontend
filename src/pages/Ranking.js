import React from "react";
import Navbar from "../components/Navbar";
import CalendarHeader from "../components/CalendarHeader";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: "20px",
    fontWeight: '700',
    textAlign: "center", // 글자 가운데 정렬
    backgroundColor: "#ffffff", // 배경색 흰색
    padding: "30px 0", // 상하 여백 추가
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 헤더 하단 그림자
  },
  calendarSection: {
    padding: "0px",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  rankingsContainer: {
    padding: "24px",
    flex: 1,
    overflowY: "auto",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "16px 0px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  rankingCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    borderRadius: "8px",
  },
  cardTitle: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  cardRating: {
    marginTop: "4px",
    color: "#fbbf24",
  },
  listContainer: {
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "16px",
  },
  listImage: {
    width: "64px",
    height: "64px",
    borderRadius: "8px",
    marginRight: "16px",
  },
  listTitle: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  navbar: {
    backgroundColor: "white",
  },
};

const Ranking = () => {
  const rankingListData = [
    { id: 1, name: "응비관 중식", rating: 4.5, img: "/path/to/image" },
    { id: 2, name: "응비관 중식", rating: 4.5, img: "/path/to/image" },
  ];

  const menuRankingData = [
    { id: 1, name: "짜장면 - 응비관 중식", rating: 4.5, img: "/path/to/image" },
    { id: 2, name: "짜장면 - 응비관 중식", rating: 4.5, img: "/path/to/image" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>랭킹</div>
      {/* Calendar Section */}
      <div style={styles.calendarSection}>
        <CalendarHeader />
      </div>

      {/* Rankings */}
      <div style={styles.rankingsContainer}>
        <section>
          <h2 style={styles.sectionTitle}>식단별 랭킹</h2>
          <div style={styles.gridContainer}>
            {rankingListData.map((item) => (
              <div key={item.id} style={styles.rankingCard}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`}
                  alt={item.name}
                  style={styles.cardImage}
                />
                <h3 style={styles.cardTitle}>{item.name}</h3>
                <p style={styles.cardRating}>⭐ {item.rating}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 style={styles.sectionTitle}>메뉴별 랭킹</h2>
          <div>
            {menuRankingData.map((item) => (
              <div key={item.id} style={styles.listContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`}
                  alt={item.name}
                  style={styles.listImage}
                />
                <div style={{ flex: 1 }}>
                  <h3 style={styles.listTitle}>{item.name}</h3>
                </div>
                <p style={styles.cardRating}>⭐ {item.rating}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div style={styles.navbar}>
        <Navbar />
      </div>
    </div>
  );
};

export default Ranking;
