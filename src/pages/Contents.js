import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const styles = {
  container: {
    backgroundColor: '#FAFAFA',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
  },
  header: {
    fontSize: '24px',
    fontWeight: '900',
  },
  section: {
    border: '1px solid #FAFAFA',
    padding: '0px 20px',
    borderRadius: '10px',
    backgroundColor: '#FAFAFA',
    margin: '10px 0px',
    textAlign: 'center',
  },
  mealSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '0px',
  },
  imgWrapper: {
    width: '220px',
    height: '110px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  textarea: {
    width: '70%',
    height: '100px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    resize: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  header2: {
    textAlign: 'center',
    fontWeight: '600',
    padding: '10px',
    fontSize: '20px',
  },
  
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#34c759',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  chatButton: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  sectionHeader: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};


function Contents() {
  const [ticket, setTicket] = useState({ name: '', validity: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleRegister = () => {
    alert(`등록된 상품: ${ticket.name}, 유효기간: ${ticket.validity}, 가격: ${ticket.price}`);
  };

  // function Contents() {
  //   const [meals, setMeals] = useState([]); // 식단 정보를 저장할 상태
  //   const [loading, setLoading] = useState(true); // 로딩 상태 관리
  
  //   useEffect(() => {
  //     // 데이터 가져오기 함수
  //     const fetchMeals = async () => {
  //       try {
  //         const response = await fetch('https://api.example.com/meals'); // 백엔드 API 엔드포인트
  //         const data = await response.json();
  //         setMeals(data); // API 데이터를 상태에 저장
  //       } catch (error) {
  //         console.error('Error fetching meals:', error);
  //       } finally {
  //         setLoading(false); // 로딩 상태 해제
  //       }
  //     };
  
  //     fetchMeals(); // 함수 호출
  //   }, []);
  
  //   if (loading) {
  //     return <div>Loading...</div>; // 로딩 중 표시
  //   }

  return (
    <div>
      <div style={styles.container}>
        {/* 컨텐츠 제목을 가운데 정렬 */}
        <div style={styles.headerWrapper}>
          <h2 style={styles.header}>컨텐츠</h2>
        </div>

        {/* 추천 식단 영역 */}
        <div style={{ ...styles.section, gap: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={styles.mealSection}>
            <div style={styles.imgWrapper}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`}
                alt="식단"
                style={styles.img}
              />
            </div>
            <textarea
              placeholder="Chat GPT가 이 식단을 추천하는 이유"
              style={styles.textarea}
            />
          </div>  
          <div style={styles.mealSection}>
            <div style={styles.imgWrapper}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/qkq.jpg`}
                alt="식단"
                style={styles.img}
              />
            </div>
            <textarea
              placeholder="Gemini가 이 식단을 추천하는 이유"
              style={styles.textarea}
            />
          </div>
        </div>

        {/* 식권 거래 등록 */}
        <div style={styles.section}>
          <div style={styles.header2}>식권 거래</div>
          <div style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="판매 상품명"
              value={ticket.name}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="text"
              name="validity"
              placeholder="유효기간"
              value={ticket.validity}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="number"
              name="price"
              placeholder="가격"
              value={ticket.price}
              onChange={handleInputChange}
              style={styles.input}
            />
            <button onClick={handleRegister} style={styles.button}>
              등록
            </button>
          </div>
        </div>

        {/* 식권 거래 리스트 */}
        <div style={styles.section}>
          <h3>등록된 식권</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <p>금정회관 학생 식당 정식 식권 10매 - 38,000원</p>
              <button style={styles.chatButton}>채팅하기</button>
            </li>
            <li style={styles.listItem}>
              <p>금정회관 학생 식당 정식 식권 10매 - 38,000원</p>
              <button style={styles.chatButton}>채팅하기</button>
            </li>
            <li style={styles.listItem}>
              <p>금정회관 학생 식당 일품 식권 - 39,000원</p>
              <button style={styles.chatButton}>채팅하기</button>
            </li>
          </ul>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Contents;
