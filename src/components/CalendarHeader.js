import React, { useState } from "react";

function CalendarHeader({ onDateChange }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

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
      marginBottom: "18px",
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
      fontSize: "18px",
      fontWeight: "700",
      marginBottom: "18px",
    },
  };

  const generateWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());

    return Array.from({ length: 7 }, (_, i) => {
      const newDate = new Date(startOfWeek);
      newDate.setDate(startOfWeek.getDate() + i);
      return newDate;
    });
  };

  const handleDateClick = (date) => {
    // date가 Date 객체인지 확인
    if (!(date instanceof Date) || isNaN(date)) {
      console.error("유효하지 않은 날짜가 선택되었습니다:", date);
      return;
    }
  
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD 포맷
    setSelectedDate(formattedDate);
    onDateChange(formattedDate); // 부모 컴포넌트로 YYYY-MM-DD 포맷 전달
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

      <div style={styles.daysRow}>
        <span style={styles.day}>일</span>
        <span style={styles.day}>월</span>
        <span style={styles.day}>화</span>
        <span style={styles.day}>수</span>
        <span style={styles.day}>목</span>
        <span style={styles.day}>금</span>
        <span style={styles.day}>토</span>
      </div>

      <div style={styles.datesRow}>
        {weekDates.map((date, index) => {
          const isSelected = selectedDate === date.toISOString().split("T")[0];

          return (
            <button
              key={index}
              style={{
                ...styles.dateButton,
                backgroundColor: isSelected ? "#67D3C4" : "#ffffff",
              }}
              onClick={() => handleDateClick(date)}
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