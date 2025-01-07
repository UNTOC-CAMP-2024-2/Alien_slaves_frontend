import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IoIosText } from "react-icons/io";

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
    backgroundColor: '#9CE3D4',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#FFFFFF',
    marginBottom: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  listItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  itemTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  itemStatus: {
    fontSize: '14px',
    color: '#888',
    marginTop: '5px',
  },
  itemFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  sellerInfo: {
    fontSize: '12px',
    color: '#666',
    marginTop: '18px',
  },
  chatButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px 0px',
    backgroundColor: '#ffffff',
    color: 'black',
    fontSize: '16px',
    fontWeight: '700',
    textAlign: 'center',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0px 0px 50px'
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
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <div style={styles.listItemHeader}>
                <p style={styles.itemTitle}>금정회관 학생 식당 정식 식권 10매</p>
                <p style={styles.itemPrice}>38,000원</p>
              </div>
              <p style={styles.itemStatus}>- 판매중 -</p>
              <div style={styles.itemFooter}>
                <p style={styles.sellerInfo}>판매자: (닉네임)</p>
                <button style={styles.chatButton}><IoIosText />채팅하기</button>
              </div>
            </li>
            <li style={styles.listItem}>
              <div style={styles.listItemHeader}>
                <p style={styles.itemTitle}>금정회관 학생 식당 정식 식권 10매</p>
                <p style={styles.itemPrice}>38,000원</p>
              </div>
              <p style={styles.itemStatus}>- 판매완료 -</p>
              <div style={styles.itemFooter}>
                <p style={styles.sellerInfo}>판매자: (닉네임)</p>
                <button style={styles.chatButton} disabled><IoIosText />채팅하기</button>
              </div>
            </li>
            <li style={styles.listItem}>
              <div style={styles.listItemHeader}>
                <p style={styles.itemTitle}>금정회관 학생 식당 일품 식권</p>
                <p style={styles.itemPrice}>39,000원</p>
              </div>
              <p style={styles.itemStatus}>- 판매중 -</p>
              <div style={styles.itemFooter}>
                <p style={styles.sellerInfo}>판매자: (닉네임)</p>
                <button style={styles.chatButton}><IoIosText />채팅하기</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Contents;
