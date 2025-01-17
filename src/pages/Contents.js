import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { IoIosText } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

/** 중복되는 스타일을 재활용하기 위한 기본 스타일 정의 */
const baseBoxShadow = {
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
};

const inputBase = {
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

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
    ...baseBoxShadow,
  },
  textarea: {
    width: '300px',
    height: '110px',
    resize: 'none',
    ...inputBase,
    ...baseBoxShadow,
    padding: '10px', 
  },
  matchingTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '20px',
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
    flex: 1,
    ...inputBase,
  },
  input: {
    flex: 1,
    ...inputBase,
  },
  button: {
    padding: '10px 150px',
    backgroundColor: '#9CE3D4',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  listContainer: {
    marginTop: '0px',
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
    backgroundColor: '#9CE3D4',
    color: 'black',
    fontSize: '14px',
    fontWeight: '700',
    textAlign: 'center',
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
    '금정회관', '문창회관', '샛별회관', '학생회관', '웅비관', '진리관', '자유관',
  ];
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [mealTime, setMealTime] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [title, setTitle] = useState('');
  const [matchingList, setMatchingList] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);
  const [newRoomTitle, setNewRoomTitle] = useState('');
  const [newRoomRestaurant, setNewRoomRestaurant] = useState('');
  const [newRoomMaxParticipants, setNewRoomMaxParticipants] = useState(5);

  // 채팅방 목록 가져오기
  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/chat/rooms')
      .then(response => {
        const fetchedList = response.data.map(item => ({
          id: item.id,
          title: item.title,
          restaurant: item.restaurant,
          time: item.created_at,
          currentPeople: item.current_participants,
          maxPeople: item.max_participants,
          nickname: '(닉네임)', 
          isActive: true,
        }));
        setMatchingList(fetchedList);
      })
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const handleRegister = () => {
    if (!title || !selectedRestaurant || !mealTime || !maxPeople) {
      alert('모든 항목을 입력해주세요!');
      return;
    }
    const newMatching = {
      id: matchingList.length + 1,
      title,
      restaurant: selectedRestaurant,
      time: mealTime,
      currentPeople: 1,
      maxPeople: Number(maxPeople),
      nickname: '(닉네임)',
      isActive: true,
    };
    setMatchingList([...matchingList, newMatching]);
    setTitle('');
    setSelectedRestaurant('');
    setMealTime('');
    setMaxPeople('');
  };

  const createRoom = () => {
    if (!newRoomTitle || !newRoomRestaurant) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    axios.post('http://localhost:4000/api/v1/chat/create-room', {
      title: newRoomTitle,
      restaurant: newRoomRestaurant,
      maxParticipants: newRoomMaxParticipants,
    })
      .then(response => {
        setChatRooms([...chatRooms, { id: response.data.roomId, title: newRoomTitle }]);
        setNewRoomTitle('');
        setNewRoomRestaurant('');
        setNewRoomMaxParticipants(5);
      })
      .catch(error => console.error('Error creating room:', error));
  };

  const handleChatClick = (item) => {
    // 채팅방 아이디를 쿠키에 저장
    Cookies.set('chatRoomId', item.id, { expires: 7 }); // 7일간 저장
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
          <h3 style={styles.recommendationTitle}>Chat GPT가 추천하는 오늘의 식단</h3>
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
          <h3 style={styles.recommendationTitle}>Gemini가 추천하는 오늘의 식단</h3>
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
        <div style={styles.matchingTitle}>채팅방 생성</div>
        <div style={styles.formRow}>
          <label style={styles.label}>방 제목:</label>
          <input
            type="text"
            style={styles.input}
            value={newRoomTitle}
            onChange={(e) => setNewRoomTitle(e.target.value)}
            placeholder="방 제목을 입력하세요"
          />
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>식당:</label>
          <input
            type="text"
            style={styles.input}
            value={newRoomRestaurant}
            onChange={(e) => setNewRoomRestaurant(e.target.value)}
            placeholder="식당 이름"
          />
        </div>
        <div style={styles.formRow}>
          <label style={styles.label}>최대 인원:</label>
          <input
            type="number"
            min="2"
            style={styles.input}
            value={newRoomMaxParticipants}
            onChange={(e) => setNewRoomMaxParticipants(Number(e.target.value))}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={styles.button} onClick={createRoom}>
            생성
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
                <span>
                  -({item.currentPeople}/{item.maxPeople})-
                </span>
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
