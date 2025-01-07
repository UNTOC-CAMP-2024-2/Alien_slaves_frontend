import React, { useState } from 'react';
import Navbar from '../components/Navbar';

// 스타일 객체 정의 (모든 CSS를 중앙에서 관리)
const styles = {
  container: {
    // 전체 화면의 배경색과 레이아웃 설정
    backgroundColor: '#f3f4f6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  content: {
    // 상단 여백, 양쪽 마진, 하단 여백 설정
    flex: 1,
    marginTop: '24px',
    marginInline: '16px',
    paddingBottom: '64px',
  },
  section: {
    // 각 섹션 간 여백 설정
    marginBottom: '24px',
  },
  title: {
    // 섹션 제목의 글꼴 크기와 스타일
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '16px',
  },
  buttonGroup: {
    // 버튼 그룹의 정렬과 여백 설정
    display: 'flex',
    justifyContent: 'start',
    marginBottom: '16px',
  },
  button: (isActive) => ({
    // 버튼의 크기, 스타일, 상태별 배경색 변경
    padding: '8px 16px',
    marginRight: '8px',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: isActive ? '#3b82f6' : '#e5e7eb', // 활성화 상태에 따라 색상 변경
    color: isActive ? '#ffffff' : '#1f2937',
    transition: 'background-color 0.2s', // 배경색 전환 효과
    cursor: 'pointer',
    ':hover': {
      backgroundColor: isActive ? '#2563eb' : '#d1d5db', // 호버 시 색상 변경
    },
  }),
  grid: {
    // 그리드 레이아웃 설정
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3열 그리드
    gap: '16px',
  },
  card: {
    // 각 카드(식단 메뉴)의 스타일
    backgroundColor: '#ffffff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    // 카드의 제목 스타일
    color: '#1f2937',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  cardList: {
    // 카드 내용의 목록 스타일
    color: '#6b7280',
    listStyle: 'none',
    paddingLeft: 0,
    margin: 0,
  },
  listItem: {
    // 카드 내용의 각 항목 간 간격 설정
    marginBottom: '4px',
  },
};

function Home() {
  // 기숙사와 학식 선택 상태를 관리하는 useState 훅
  const [selectedDorm, setSelectedDorm] = useState('자유관'); // 기숙사 선택 상태
  const [selectedHall, setSelectedHall] = useState('금정회관'); // 학식 선택 상태

  // 아침, 점심, 저녁 메뉴 데이터를 정의
  const menus = {
    dormitory: {
      자유관: {
        breakfast: ['짜장밥', '홍게짬뽕', '멘보샤', '계란찜', '우유', '바나나'],
        lunch: ['김치볶음밥', '돈까스', '계란찜', '샐러드', '미역국', '배추김치'],
        dinner: ['제육덮밥', '미역국', '배추김치', '불고기', '잡채', '어묵볶음'],
      },
    },
    cafeteria: {
      금정회관: {
        breakfast: ['흑미밥', '계란찜', '김치', '사골국', '두부조림', '콩나물무침'],
        lunch: ['불고기', '미역국', '샐러드', '김치전', '어묵볶음', '양배추김치'],
        dinner: ['김치찌개', '계란후라이', '콩나물무침', '제육볶음', '잡채', '배추김치'],
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* 콘텐츠 섹션 */}
      <div style={styles.content}>
        {/* 기숙사 섹션 */}
        <div style={styles.section}>
          <h2 style={styles.title}>기숙사</h2>
          <div style={styles.buttonGroup}>
            {['자유관'].map((dorm) => (
              <button
                key={dorm}
                onClick={() => setSelectedDorm(dorm)}
                style={styles.button(selectedDorm === dorm)}
              >
                {dorm}
              </button>
            ))}
          </div>
          <div style={styles.grid}>
            {['아침', '점심', '저녁'].map((time) => (
              <div key={time} style={styles.card}>
                <h3 style={styles.cardTitle}>{time}</h3>
                <ul style={styles.cardList}>
                  {menus.dormitory[selectedDorm][
                    time === '아침'
                      ? 'breakfast'
                      : time === '점심'
                      ? 'lunch'
                      : 'dinner'
                  ].map((menu, i) => (
                    <li key={i} style={styles.listItem}>
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 학식 섹션 */}
        <div style={styles.section}>
          <h2 style={styles.title}>학식</h2>
          <div style={styles.buttonGroup}>
            {['금정회관'].map((hall) => (
              <button
                key={hall}
                onClick={() => setSelectedHall(hall)}
                style={styles.button(selectedHall === hall)}
              >
                {hall}
              </button>
            ))}
          </div>
          <div style={styles.grid}>
            {['아침', '점심', '저녁'].map((time) => (
              <div key={time} style={styles.card}>
                <h3 style={styles.cardTitle}>{time}</h3>
                <ul style={styles.cardList}>
                  {menus.cafeteria[selectedHall][
                    time === '아침'
                      ? 'breakfast'
                      : time === '점심'
                      ? 'lunch'
                      : 'dinner'
                  ].map((menu, i) => (
                    <li key={i} style={styles.listItem}>
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
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
