import React from "react";

function CalendarHeader() {
  const styles = {
    calendar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "0px",
      width: "100%",
      backgroundColor: '#ffffff',
      boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
    },
    daysRow: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "bold",
      color: "#555",
      width: "90%",
      marginBottom: "20px",
      fontSize: '13px'
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
      background: "#ffffff",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      borderRadius: '20px',
      marginBottom: '10px',
      fontWeight: '600',
    },
    hover: {
      backgroundColor: "#67D3C4",
      borderRadius: '20px'
    },
  };

  const handleDateClick = (date) => {
    console.log(`Clicked date: ${date}`);
  };

  return (
    <div style={styles.calendar}>
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
        {[29, 30, 31, 1, 2, 3, 4].map((date) => (
          <button
            key={date}
            style={styles.dateButton}
            onClick={() => handleDateClick(date)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#67D3C4")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarHeader;
