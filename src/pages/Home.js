import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import CalendarHeader from '../components/CalendarHeader'; // 날짜 선택 컴포넌트
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    backgroundColor: '#F3F4F6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  content: {
    flex: 1,
    marginTop: '1.5rem',
    marginInline: '1rem',
    paddingBottom: '4rem',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionHeading: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1rem',
  },
  tabButton: {
    padding: '0.5rem 1rem',
    marginRight: '0.5rem',
    borderRadius: '0.5rem',
    fontSize: '13px',
    transition: 'background-color 0.2s ease',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    color: '#1F2937',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardList: {
    color: '#4B5563',
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
  },
};

const menus = {
  cafeteria: {
    금정회관: {
      breakfast: ['흑미밥', '계란찜', '김치', '사골국', '두부조림', '콩나물무침'],
      lunch: ['불고기', '미역국', '샐러드', '김치전', '어묵볶음', '양배추김치'],
      dinner: ['김치찌개', '계란후라이', '콩나물무침', '제육볶음', '잡채', '배추김치'],
    },
    문창회관: {
      breakfast: ['잡곡밥', '감자볶음', '김치', '단호박죽', '스크램블에그', '사과'],
      lunch: ['짜장면', '탕수육', '단무지', '된장국', '비빔밥', '나물무침'],
      dinner: ['된장국', '생선구이', '무생채', '떡볶이', '김말이', '깍두기'],
    },
    샛별회관: {
      breakfast: ['토스트', '우유', '바나나', '삶은 달걀', '감자샐러드', '오렌지'],
      lunch: ['치즈돈까스', '우동', '김치', '불고기', '미역국', '양배추무침'],
      dinner: ['카레라이스', '시저샐러드', '양배추김치', '삼겹살', '된장국', '깍두기'],
    },
    학생회관: {
      breakfast: ['쌀밥', '김치찌개', '스크램블에그', '두부조림', '감자볶음', '바나나'],
      lunch: ['제육볶음', '콩나물국', '배추김치', '떡갈비', '시금치무침', '오이소박이'],
      dinner: ['참치김치찌개', '불고기', '깍두기', '어묵볶음', '잡채', '샐러드'],
    },
  },
};

const restaurantMapping = {
  1: "진리관",
  2: "웅비관",
  3: "금정회관 교직원 식당",
  4: "금정회관 학생 식당",
  5: "문창회관 식당",
  6: "자유관",
  7: "학생회관 학생 식당",
};

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜
  const [selectedDorm, setSelectedDorm] = useState('자유관'); // 선택된 기숙사
  const [selectedHall, setSelectedHall] = useState('금정회관'); // 선택된 학식
  const [dormMenus, setDormMenus] = useState({ 아침: [], 점심: [], 저녁: [] }); // 기숙사 메뉴
  // const [hallMenus, setHallMenus] = useState({ 아침: [], 점심: [], 저녁: [] }); // 학식 메뉴
  const navigate = useNavigate();

 // 날짜 기반으로 API 호출
 const fetchMenusByDate = async (type, location, date) => {
  const validDate = date instanceof Date ? date : new Date(date);

  if (isNaN(validDate)) {
    console.error("유효하지 않은 날짜가 전달되었습니다:", date);
    return { 자유관: { 아침: [], 점심: [], 저녁: [] }, 진리관: { 아침: [], 점심: [], 저녁: [] }, 웅비관: { 아침: [], 점심: [], 저녁: [] } };
  }

  const formattedDate = validDate.toISOString().split("T")[0];
  const url = `http://localhost:4000/api/v1/restaurants/meals/all?date=${formattedDate}`;

  try {
    const response = await axios.get(url, {
      params: { type, location },
    });

    const data = response.data.data;

    const uniqueData = data.filter(
      (menu, index, self) =>
        index ===
        self.findIndex(
          (m) =>
            m.restaurant_id === menu.restaurant_id &&
            m.time === menu.time &&
            m.food_name === menu.food_name
        )
    );

    // 기숙사별 데이터 초기화
    const groupedByDorm = {
      자유관: { 아침: [], 점심: [], 저녁: [] },
      진리관: { 아침: [], 점심: [], 저녁: [] },
      웅비관: { 아침: [], 점심: [], 저녁: [] },
    };

    // 데이터를 기숙사별로 그룹화
    uniqueData.forEach((menu) => {
      const dormName = restaurantMapping[menu.restaurant_id];

      if (groupedByDorm[dormName]) {
        if (menu.time === "조식") {
          groupedByDorm[dormName]["아침"].push(menu.food_name);
        } else if (menu.time === "중식") {
          groupedByDorm[dormName]["점심"].push(menu.food_name);
        } else if (menu.time === "석식") {
          groupedByDorm[dormName]["저녁"].push(menu.food_name);
        }
      }
    });

    return groupedByDorm;
  } catch (error) {
    console.error(`${type} 메뉴 데이터 가져오기 실패:`, error);
    return { 자유관: { 아침: [], 점심: [], 저녁: [] }, 진리관: { 아침: [], 점심: [], 저녁: [] }, 웅비관: { 아침: [], 점심: [], 저녁: [] } };
  }
};




// 기숙사 및 학식 메뉴 데이터 가져오기
useEffect(() => {
  const fetchDormMenus = async () => {
    const data = await fetchMenusByDate('dormitory', selectedDorm, selectedDate);
    console.log('기숙사 메뉴:', data); // 콘솔 출력
    setDormMenus(data);
  };

  // const fetchHallMenus = async () => {
  //   const data = await fetchMenusByDate('cafeteria', selectedHall, selectedDate);
  //   console.log('학식 메뉴:', data); // 콘솔 출력
  //   setHallMenus(data);
  // };

  fetchDormMenus();
  // fetchHallMenus();
}, [selectedDorm, selectedHall, selectedDate]);

  

  // 기숙사 버튼 핸들러
const handleDormClick = (dorm) => {
  setSelectedDorm(dorm);
  console.log(`현재 선택된 기숙사: ${dorm}`);
};

// 학식 버튼 핸들러
const handleHallClick = (hall) => {
  setSelectedHall(hall);
  console.log(`현재 선택된 학식: ${hall}`);
};


  // 리뷰 페이지 이동
  const handleReviewNavigate = (type, location, time) => {
    console.log(`${type}의 ${location} ${time} 메뉴를 선택함.`);
    navigate('/review', { state: { type, location, time } });
  };

  return (
    <div style={styles.container}>  
      {/* 날짜 선택 컴포넌트 */}
      <CalendarHeader onDateChange={setSelectedDate} />

      {/* 메인 콘텐츠 */}
      <div style={styles.content}>
        {/* 기숙사 Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>기숙사</h2>
          <div style={styles.buttonRow}>
            {['자유관', '진리관', '웅비관'].map((dorm) => (
              <button
                key={dorm}
                onClick={() => handleDormClick(dorm)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: selectedDorm === dorm ? '#9CE3D4' : '#E5E7EB',
                  color: selectedDorm === dorm ? '#FFFFFF' : '#1F2937',
                }}
              >
                {dorm}
              </button>
            ))}
          </div>
            <div style={styles.gridContainer}>
            {['아침', '점심', '저녁'].map((time) => (
              <button
                key={time}
                style={styles.card}
                onClick={() => handleReviewNavigate('dormitory', selectedDorm, time)}
              >
                <h3 style={styles.cardTitle}>{time}</h3>
                <ul style={styles.cardList}>
                  {dormMenus[selectedDorm]?.[time]?.map((menu, index) => (
                    <li key={index}>{menu}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>

        {/* 학식 Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>학식</h2>
          <div style={styles.buttonRow}>
            {['금정회관', '문창회관', '샛별회관', '학생회관'].map((hall) => (
              <button
                key={hall}
                onClick={() => handleHallClick(hall)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: selectedHall === hall ? '#9CE3D4' : '#E5E7EB',
                  color: selectedHall === hall ? '#FFFFFF' : '#1F2937',
                }}
              >
                {hall}
              </button>
            ))}
          </div>
          <div style={styles.gridContainer}>
            {['breakfast', 'lunch', 'dinner'].map((time) => (
              <button
                key={time}
                style={styles.card}
                onClick={() => handleReviewNavigate('cafeteria', selectedHall, time)}
              >
                <h3 style={styles.cardTitle}>
                  {time === 'breakfast' ? '아침' : time === 'lunch' ? '점심' : '저녁'}
                </h3>
                <ul style={styles.cardList}>
                  {menus.cafeteria[selectedHall]?.[time]?.map((menu, index) => (
                    <li key={index}>{menu}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 바 */}
      <Navbar />
    </div>
  );
}

export default Home;
