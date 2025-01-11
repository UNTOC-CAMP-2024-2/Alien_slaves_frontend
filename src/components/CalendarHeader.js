import React, { useState } from "react";

function CalendarHeader() {
  const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 상태
  const [selectedDate, setSelectedDate] = useState(null); // 클릭된 날짜 상태

  const styles = {
    calendar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "0px",
      width: "100%",
      backgroundColor: "#ffffff",
      boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
    },
    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      marginTop: "10px",
    },
    arrowButton: {
      border: "none",
      backgroundColor: "#ffffff",
      cursor: "pointer",
      fontSize: "16px",
      padding: "5px 10px",
      borderRadius: "4px",
      marginBottom: '18px'
    },
    daysRow: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "bold",
      color: "#555",
      width: "90%",
      marginBottom: "20px",
      fontSize: "13px",
    },
    datesRow: {
      display: "flex",
      justifyContent: "space-between",
      width: "90%",
    },
    day: {
      width: "30px",
      textAlign: "center",
    },
    dateButton: {
      color: "#333",
      fontSize: "17px",
      width: "35px",
      height: "35px",
      textAlign: "center",
      border: "none",
      cursor: "pointer",
      borderRadius: "20px",
      marginBottom: "10px",
      fontWeight: "600",
    },

    yearMonth: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '18px'
    }
  };

  // 현재 날짜 기준으로 한 주(7일) 계산
  const generateWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // 현재 날짜에서 요일 차이만큼 빼서 주의 시작일 설정

    return Array.from({ length: 7 }, (_, i) => {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + i);
      return newDate;
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date.toDateString());
    console.log(`Clicked date: ${date.toDateString()}`);
  };

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(currentDate.getDate() - 7);
    setCurrentDate(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(currentDate.getDate() + 7);
    setCurrentDate(nextWeek);
  };

  const weekDates = generateWeekDates(currentDate);

  return (
    <div style={styles.calendar}>
      {/* 상단 화살표 버튼 */}
      <div style={styles.topRow}>
        <button style={styles.arrowButton} onClick={handlePrevWeek}>
          ◀
        </button>
        <span style={styles.yearMonth}>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </span>
        <button style={styles.arrowButton} onClick={handleNextWeek}>
          ▶
        </button>
      </div>

      {/* 요일 표시 */}
      <div style={styles.daysRow}>
        <span style={styles.day}>일</span>
        <span style={styles.day}>월</span>
        <span style={styles.day}>화</span>
        <span style={styles.day}>수</span>
        <span style={styles.day}>목</span>
        <span style={styles.day}>금</span>
        <span style={styles.day}>토</span>
      </div>

      {/* 날짜 버튼 */}
      <div style={styles.datesRow}>
        {weekDates.map((date, index) => {
          const isSelected = selectedDate === date.toDateString();

          return (
            <button
              key={index}
              style={{
                ...styles.dateButton,
                backgroundColor: isSelected ? "#67D3C4" : "#ffffff",
              }}
              onClick={() => handleDateClick(date)}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.target.style.backgroundColor = "#67D3C4";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.target.style.backgroundColor = "#ffffff";
                }
              }}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarHeader;
