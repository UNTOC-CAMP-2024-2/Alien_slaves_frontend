import React from 'react';

const notices = [
  { id: 1, title: '공지사항 제목 1', date: '2024-11-27', content: '공지사항 내용 1' },
  { id: 2, title: '공지사항 제목 2', date: '2024-11-25', content: '공지사항 내용 2' },
  { id: 3, title: '공지사항 제목 3', date: '2024-11-20', content: '공지사항 내용 3' },
];

const styles = {
  noticeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '80%',
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  noticeList: {
    listStyleType: 'none',
    padding: 0,
    width: '100%',
  },
  noticeItem: {
    marginBottom: '15px',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  noticeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  noticeTitle: {
    fontSize: '1.25rem',
    color: '#2c3e50',
    margin: '0',
  },
  noticeDate: {
    fontSize: '0.875rem',
    color: '#7f8c8d',
  },
  noticeContent: {
    fontSize: '1rem',
    color: '#34495e',
  },
  noticeItemHover: { // 마우스를 올렸을 때 배경색 // 마우스를 올렸을 때 텍스트 색상
    transform: 'scale(1.05)', // 마우스를 올렸을 때 크기 커짐
  },
};

const handleNoticeClick = (id) => {
  // 공지사항 클릭 시 실행될 코드
  console.log(`공지사항 ${id}이 클릭됨!`);
  // 예시로 페이지를 이동하도록 할 수 있음
  // window.location.href = `/notice/${id}`;
};

const Notice = () => {
  return (
    <div style={styles.noticeContainer}>
      <h1 style={styles.heading}>공지사항</h1>
      <ul style={styles.noticeList}>
        {notices.map((notice) => (
          <li
            key={notice.id}
            style={styles.noticeItem}
            onClick={() => handleNoticeClick(notice.id)} // 클릭 시 동작
            // onMouseEnter={(e) => e.target.style.backgroundColor = '#3498db'} // 마우스 오버 시 배경색 변경
            // onMouseLeave={(e) => e.target.style.backgroundColor = '#f9f9f9'} // 마우스를 벗어날 때 원래 색상
          >
            <div style={styles.noticeHeader}>
              <h2 style={styles.noticeTitle}>{notice.title}</h2>
              <span style={styles.noticeDate}>{notice.date}</span>
            </div>
            <p style={styles.noticeContent}>{notice.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notice;