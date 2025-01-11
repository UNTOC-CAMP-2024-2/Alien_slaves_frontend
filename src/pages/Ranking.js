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
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "30px 0",
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
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  cardImage: {
    width: "100%",
    height: "130px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
  },
  cardRating: {
    fontSize: "14px",
    color: "#fbbf24",
    textAlign: "right",
  },
  cardDescription: {
    marginTop: "8px",
    fontSize: "12px",
    color: "#888",
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
    width: "95px",
    height: "65px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "16px",
  },
  listTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    flex: 1,
  },
  listRating: {
    fontSize: "14px",
    color: "#fbbf24",
    fontWeight: "bold",
  },
};

const Ranking = () => {
  const rankingListData = [
    { id: 1, name: "웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
    { id: 2, name: "웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
  ];

  const menuRankingData = [
    { id: 1, name: "짜장면 - 웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
    { id: 2, name: "짬뽕 - 웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
    { id: 3, name: "탕수육 - 웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
    { id: 4, name: "볶음밥 - 웅비관 중식", rating: 4.5, img: "/assets/qkq.jpg" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>랭킹</div>

      {/* Calendar Section */}
      <div style={styles.calendarSection}>
        <CalendarHeader />
      </div>

      {/* Rankings */}
      <div>
      <div style={styles.rankingsContainer}>
        {/* 식단별 랭킹 */}
        <section>
          <h2 style={styles.sectionTitle}>식단별 랭킹</h2>
          <div style={styles.gridContainer}>
            {rankingListData.map((item) => (
              <div key={item.id} style={styles.rankingCard}>
                <img
                  src={`${process.env.PUBLIC_URL}${item.img}`}
                  alt={item.name}
                  style={styles.cardImage}
                />
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>{item.name}</h3>
                    <p style={styles.cardRating}>⭐ {item.rating}</p>
                  </div>
                  <p style={styles.cardDescription}>
                    흑미밥 + 참치김치찌개 + 돈육장조림 + 맛김 + 콩나물 무침 + 배추김치 + 우유(두유)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 메뉴별 랭킹 */}
        <section>
          <h2 style={styles.sectionTitle}>메뉴별 랭킹</h2>
          <div>
            {menuRankingData.map((item) => (
              <div key={item.id} style={styles.listContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}${item.img}`}
                  alt={item.name}
                  style={styles.listImage}
                />
                <h3 style={styles.listTitle}>{item.name}</h3>
                <p style={styles.listRating}>⭐ {item.rating}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Navbar />
    </div>
  );
};

export default Ranking;
