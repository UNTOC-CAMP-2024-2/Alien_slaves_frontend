import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { IoIosText } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    backgroundColor: '#FAFAFA',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60px',
    marginBottom: '10px',
  },
  header: {
    fontSize: '20px',
    fontWeight: '700',
  },

  // 추천 식단 영역
  section: {
    margin: '10px',
    padding: '20px',
    backgroundColor: '#FAFAFA',
    border: '1px solid #FAFAFA',
    borderRadius: '10px',
  },
  recommendationBlock: {
    marginBottom: '30px',
  },
  recommendationTitle: {
    margin: '0 0 10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  recommendationContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  imgWrapper: {
    width: '220px',
    height: '110px',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  img: {
    width: '220px',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  textarea: {
    width: '300px',
    height: '110px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    resize: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },

  // 밥친구 매칭 영역
  matchingTitle: {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  label: {
    width: '80px',
    marginRight: '5px',
    textAlign: 'right',
    fontWeight: '600',
  },
  select: {
    flex: '1',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  input: {
    flex: '1',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#9CE3D4',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  listContainer: {
    marginTop: '20px',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
    padding: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  listItemTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
  },
  listItemTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  listItemSub: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#555',
  },
  chatButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '8px 10px',
    backgroundColor: '#ffffff',
    color: 'black',
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
    border: '1px solid #9CE3D4',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  disabledButton: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
};

function Contents() {
  const navigate = useNavigate();

  const restaurantOptions = [
    '금정회관',
    '문창회관',
    '샛별회관',
    '학생회관',
    '웅비관',
    '진리관',
    '자유관',
  ];
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [maxPeople, setMaxPeople] = useState('');

  const [matchingList, setMatchingList] = useState([
    {
      id: 1,
      title: '22/남 같이 금정회관 저녁 먹을 사람',
      restaurant: '금정회관',
      time: '저녁',
      currentPeople: 1,
      maxPeople: 3,
      nickname: '(닉네임)',
      isActive: true,
    },
    {
      id: 2,
      title: '졸업 앞둔 24/여 점심 드실 분~',
      restaurant: '문창회관',
      time: '점심',
      currentPeople: 2,
      maxPeople: 4,
      nickname: '(닉네임)',
      isActive: true,
    },
    {
      id: 3,
      title: '아침 든든하게 먹을 사람 구해요!',
      restaurant: '웅비관',
      time: '아침',
      currentPeople: 1,
      maxPeople: 2,
      nickname: '(닉네임)',
      isActive: true,
    },
  ]);

  const handleRegister = () => {
    if (!selectedRestaurant || !mealTime || !maxPeople) {
      alert('모든 항목을 입력해주세요!');
      return;
    }
    const newMatching = {
      id: matchingList.length + 1,
      title: `새로운 밥친구 모집 (${selectedRestaurant}, ${mealTime})`,
      restaurant: selectedRestaurant,
      time: mealTime,
      currentPeople: 1,
      maxPeople: Number(maxPeople),
      nickname: '(닉네임)',
      isActive: true,
    };
    setMatchingList([...matchingList, newMatching]);
    setSelectedRestaurant('');
    setMealTime('');
    setMaxPeople('');
  };

  const handleChatClick = (item) => {
    navigate('/chat');
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerWrapper}>
        <h2 style={styles.header}>컨텐츠</h2>
      </div>

      {/* 추천 식단 영역 */}
      <div style={styles.section}>
        <div style={styles.recommendationBlock}>
          <h3 style={styles.recommendationTitle}>
            Chat GPT가 추천하는 오늘의 식단
          </h3>
          <div style={styles.recommendationContent}>
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
        </div>
        <div style={styles.recommendationBlock}>
          <h3 style={styles.recommendationTitle}>
            Gemini가 추천하는 오늘의 식단
          </h3>
          <div style={styles.recommendationContent}>
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
      </div>

      {/* 밥친구 매칭 섹션 */}
      <div style={styles.section}>
        <div style={styles.matchingTitle}>밥친구 매칭</div>
        <div style={styles.formRow}>
          <label style={styles.label}>식당 선택:</label>
          <select
            style={styles.select}
            value={selectedRestaurant}
            onChange={(e) => setSelectedRestaurant(e.target.value)}
          >
            <option value="">선택하세요</option>
            {restaurantOptions.map((res) => (
              <option key={res} value={res}>
                {res}
              </option>
            ))}
          </select>
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>식사 시간:</label>
          <select
            style={styles.select}
            value={mealTime}
            onChange={(e) => setMealTime(e.target.value)}
          >
            <option value="">선택하세요</option>
            <option value="아침">아침</option>
            <option value="점심">점심</option>
            <option value="저녁">저녁</option>
          </select>
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>최대인원:</label>
          <input
            type="number"
            min="1"
            style={styles.input}
            value={maxPeople}
            onChange={(e) => setMaxPeople(e.target.value)}
            placeholder="ex) 3"
          />
        </div>
        <div style={{ textAlign: 'right', marginTop: '10px' }}>
          <button style={styles.button} onClick={handleRegister}>
            등록
          </button>
        </div>
      </div>

      {/* 매칭 목록 표시 */}
      <div style={styles.section}>
        <div style={styles.listContainer}>
          {matchingList.map((item) => (
            <div style={styles.listItem} key={item.id}>
              <div style={styles.listItemTop}>
                <span style={styles.listItemTitle}>{item.title}</span>
                <span>-({item.currentPeople}/{item.maxPeople})-</span>
              </div>
              <div style={styles.listItemSub}>
                {item.restaurant} / {item.time}
              </div>
              <div style={styles.listItemTop}>
                <div>{item.nickname}</div>
                <button
                  style={
                    item.isActive
                      ? styles.chatButton
                      : { ...styles.chatButton, ...styles.disabledButton }
                  }
                  disabled={!item.isActive}
                  onClick={() => handleChatClick(item)}
                >
                  <IoIosText />
                  채팅하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Contents;
