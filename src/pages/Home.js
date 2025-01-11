import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

// (A) 스타일 정의
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

// (B) 메뉴 데이터
const menus = {
  dormitory: {
    자유관: {
      breakfast: ['짜장밥', '홍게짬뽕', '멘보샤', '계란찜', '우유', '바나나'],
      lunch: ['김치볶음밥', '돈까스', '계란찜', '샐러드', '미역국', '배추김치'],
      dinner: ['제육덮밥', '미역국', '배추김치', '불고기', '잡채', '어묵볶음'],
    },
    진리관: {
      breakfast: ['쌀밥', '계란말이', '김치', '북어국', '햄구이', '콩나물무침'],
      lunch: ['짜장면', '탕수육', '단무지', '나물비빔밥', '된장국', '양배추샐러드'],
      dinner: ['된장찌개', '고등어구이', '시금치무침', '감자조림', '깍두기', '잡채'],
    },
    웅비관: {
      breakfast: ['우유', '빵', '딸기잼', '사과', '삶은 달걀', '오이무침'],
      lunch: ['라면', '만두', '오이무침', '불고기', '무생채', '미역국'],
      dinner: ['치킨카레', '샐러드', '배추김치', '김치볶음밥', '계란찜', '어묵국'],
    },
  },
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

// (C) 메뉴 가져오기 헬퍼 함수들
function getDormMeals(dorm, time) {
  if (time === '아침') return menus.dormitory[dorm].breakfast;
  if (time === '점심') return menus.dormitory[dorm].lunch;
  return menus.dormitory[dorm].dinner;
}

function getHallMeals(hall, time) {
  if (time === '아침') return menus.cafeteria[hall].breakfast;
  if (time === '점심') return menus.cafeteria[hall].lunch;
  return menus.cafeteria[hall].dinner;
}

// (D) 본문
function Home() {
  const [selectedDorm, setSelectedDorm] = useState('자유관');   // 기숙사 선택 상태
  const [selectedHall, setSelectedHall] = useState('금정회관'); // 학식 선택 상태
  const navigate = useNavigate();

  // 기숙사 버튼 핸들러
  const handleDormClick = (dorm) => {
    setSelectedDorm(dorm);
  };
  const handleDormMouseOver = (e) => {
    e.target.style.backgroundColor = '#9CE3D4';
  };
  const handleDormMouseOut = (e, dorm) => {
    e.target.style.backgroundColor =
      selectedDorm === dorm ? '#9CE3D4' : '#E5E7EB';
  };

  // 학식 버튼 핸들러
  const handleHallClick = (hall) => {
    setSelectedHall(hall);
  };
  const handleHallMouseOver = (e) => {
    e.target.style.backgroundColor = '#9CE3D4';
  };
  const handleHallMouseOut = (e, hall) => {
    e.target.style.backgroundColor =
      selectedHall === hall ? '#9CE3D4' : '#E5E7EB';
  };

  //리뷰 화면 이동
  const handleReviewNavigate = (hall, time) => {
    // 콘솔 로그(선택 메뉴 확인)
    console.log(`${hall}의 ${time} 메뉴를 선택함.`);

    // /review 페이지로 이동
    navigate('/review');
  };
  


  return (
    <div style={styles.container}>
      {/* 메인 콘텐츠 */}
      <div style={styles.content}>
        
        {/* 기숙사 Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>기숙사</h2>
          <div style={styles.buttonRow}>
            {['자유관', '진리관', '웅비관'].map((dorm, index) => (
              <button
                key={index}
                onClick={() => handleDormClick(dorm)}
                onMouseOver={handleDormMouseOver}
                onMouseOut={(e) => handleDormMouseOut(e, dorm)}
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
            {['아침', '점심', '저녁'].map((time, i) => (
              <button
                key={i}
                style={{
                  ...styles.card,
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onClick={() => handleReviewNavigate(selectedHall, time)}
              >
                <h3 style={styles.cardTitle}>{time}</h3>
                <ul style={styles.cardList}>
                  {getDormMeals(selectedDorm, time).map((menu, j) => (
                    <li key={j}>{menu}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
        </div> 
        {/* ↑↑↑ 기숙사 Section 닫는 </div> 추가 */}

        {/* 학식 Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>학식</h2>
          <div style={styles.buttonRow}>
            {['금정회관', '문창회관', '샛별회관', '학생회관'].map((hall, index) => (
              <button
                key={index}
                onClick={() => handleHallClick(hall)}
                onMouseOver={handleHallMouseOver}
                onMouseOut={(e) => handleHallMouseOut(e, hall)}
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
            {['아침', '점심', '저녁'].map((time, i) => (
              <button
                key={i}
                style={{
                  ...styles.card,
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onClick={() => handleReviewNavigate(selectedHall, time)}
              >
                <h3 style={styles.cardTitle}>{time}</h3>
                <ul style={styles.cardList}>
                  {getHallMeals(selectedHall, time).map((menu, j) => (
                    <li key={j}>{menu}</li>
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
