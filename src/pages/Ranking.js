import React, { useEffect, useState } from "react";
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
    padding: "3px",
  },
  listImage: {
    width: "100px",
    height: "80px",
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
    marginRight: '15px',
  },
};

const Ranking = () => {
  const [rankingListData, setRankingListData] = useState([]);
  const [menuRankingData, setMenuRankingData] = useState([]);

  // 식당 랭킹 데이터 가져오기
  const fetchRestaurantData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/rank/restaurants/all");
      const result = await response.json();
      setRankingListData(result.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  // 메뉴 랭킹 데이터 가져오기
  const fetchFoodData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/rank/foods/all");
      const result = await response.json();
      setMenuRankingData(result.data);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져오기
  useEffect(() => {
    fetchRestaurantData();
    fetchFoodData();
  }, []);

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>랭킹</div>

      {/* Calendar Section */}
      <div style={styles.calendarSection}>
        <CalendarHeader />
      </div>

      {/* Rankings */}
      <div style={styles.rankingsContainer}>
        {/* 식당별 랭킹 */}
        <section>
          <h2 style={styles.sectionTitle}>식당별 랭킹</h2>
          <div style={styles.gridContainer}>
            {rankingListData.map((item, index) => (
              <div key={index} style={styles.rankingCard}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`} // 이미지 경로를 적절히 설정
                  alt={item.restaurant_name}
                  style={styles.cardImage}
                />
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>{item.restaurant_name}</h3>
                    <p style={styles.cardRating}>⭐ {item.average_rating}</p>
                  </div>
                  <p style={styles.cardDescription}>평점: {item.average_rating}점</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 메뉴별 랭킹 */}
        <section>
          <h2 style={styles.sectionTitle}>메뉴별 랭킹</h2>
          <div>
            {menuRankingData.map((item, index) => (
              <div key={index} style={styles.listContainer}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`} // 이미지 경로를 적절히 설정
                  alt={item.food_name}
                  style={styles.listImage}
                />
                <h3 style={styles.listTitle}>
                  {item.food_name} - {item.name}
                </h3>
                <p style={styles.listRating}>⭐ {item.average_rating}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Navbar />
    </div>
  );
};

export default Ranking;
