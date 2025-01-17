

/*
function Test() {
    const [formData, setFormData] = useState({
        menu_date_id: "",
        email: "",
        comment: "",
        data: [],
    });
    const [foodName, setFoodName] = useState("");
    const [ratingValue, setRatingValue] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleAddData = () => {
        const newEntry = { food_name: foodName, rating_value: ratingValue };
        setFormData({
            ...formData,
            data: [...formData.data, newEntry],
        });
        setFoodName("");
        setRatingValue("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitData = new FormData();
        submitData.append("menu_date_id", formData.menu_date_id);
        submitData.append("email", formData.email);
        submitData.append("comment", formData.comment);
        submitData.append("data", JSON.stringify(formData.data));
        if (photo) {
            submitData.append("photo", photo);
        }

        try {
            const response = await fetch("http://localhost:4000/api/v1/review", {
                method: "POST",
                body: submitData,
            });

            const result = await response.json();
            console.log("Success:", result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to submit form.");
        }
    };

    return (
        <form style={{color:"white"}} onSubmit={handleSubmit}>
            <div>
                <label>
                    Menu Date ID:
                    <input
                        type="text"
                        name="menu_date_id"
                        value={formData.menu_date_id}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Comment:
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </label>
            </div>
            <div>
                <label>
                    Food Name:
                    <input
                        type="text"
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                </label>
                <label>
                    Rating Value:
                    <input
                        type="number"
                        value={ratingValue}
                        onChange={(e) => setRatingValue(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleAddData}>
                    Add Data
                </button>
            </div>
            <div>
                <label>
                    Photo:
                    <input type="file" name="photo" onChange={handleFileChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
            <div>
                <h3>Data Preview:</h3>
                <ul>
                    {formData.data.map((item, index) => (
                        <li key={index}>
                            {item.food_name} - {item.rating_value}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default Test;
*/
/*
import React from 'react';

function test() {
    const handleKakaoLogin = async () => { 
        //이게 안좋은 방식인데 일단 
        //프론트에서 처리하는거 최대한 없애려고 대부분의 책임을 백엔드로 옮겨둠.
        window.location.href = 'http://localhost:4000/api/v1/users/kakao';
    }
  return (
    <div>
      <h2>백엔드 개발 테스트용용</h2>
      <p>백엔드 개발에서 실험해볼꺼 테스트하는 용입니다..</p>
      <button onClick={handleKakaoLogin}>카카오로 로그인하기</button>
    </div>
  );
}

export default test;
*/

// App.tsx

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';

// // 서버 URL
// const socket = io('http://localhost:4000', {
//     transports: ['websocket', 'polling'],
// });

// const Test = () => {
//   const [chatRooms, setChatRooms] = useState([]);
//   const [newRoomTitle, setNewRoomTitle] = useState('');
//   const [newRoomRestaurant, setNewRoomRestaurant] = useState('');
//   const [newRoomMaxParticipants, setNewRoomMaxParticipants] = useState(5);
//   const [currentRoomId, setCurrentRoomId] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [email, setEmail] = useState('user1@test.com'); // 로그인된 유저 이메일

//   useEffect(() => {
//     // 서버에서 모든 채팅방 목록을 받아오기
//     axios.get('http://localhost:4000/api/v1/chat/rooms')
//       .then(response => setChatRooms(response.data))
//       .catch(error => console.error('Error fetching rooms:', error));

//     // 서버에서 채팅 메시지 수신
//     socket.on('receive_message', (data) => {
//       // 서버에서 새로운 메시지가 오면 상태를 갱신
//       setMessages(prevMessages => [...prevMessages, data]);
//     });

//     return () => {
//       socket.off('receive_message');
//     };
//   }, []);

//   // 채팅방 생성
//   const createRoom = () => {
//     axios.post('http://localhost:4000/api/v1/chat/create-room', {
//       title: newRoomTitle,
//       restaurant: newRoomRestaurant,
//       maxParticipants: newRoomMaxParticipants,
//     })
//     .then(response => {
//       setChatRooms([...chatRooms, { id: response.data.roomId, title: newRoomTitle }]);
//       setNewRoomTitle('');
//       setNewRoomRestaurant('');
//       setNewRoomMaxParticipants(5);
//     })
//     .catch(error => console.error('Error creating room:', error));
//   };

//   // 채팅방 참가
//   const joinRoom = (roomId) => {
//     axios.post('http://localhost:4000/api/v1/chat/join-room', {
//       chatRoomId: roomId,
//       userId: email,
//     })
//     .then(() => {
//       setCurrentRoomId(roomId);
//       socket.emit('join_room', { chatRoomId: roomId, email });

//       // 기존 메시지 불러오기
//       axios.get(`http://localhost:4000/api/v1/chat/room-messages/${roomId}`)
//         .then(response => {
//           setMessages(response.data); // 채팅방의 기존 메시지들을 상태에 저장
//         })
//         .catch(error => console.error('Error fetching messages:', error));
//     })
//     .catch(error => console.error('Error joining room:', error));
//   };

//   // 메시지 보내기
//   const sendMessage = () => {
//     if (currentRoomId !== null && message.trim() !== '') {
//       const messageData = { chatRoomId: currentRoomId, email, message };
      
//       // 메시지를 보내면서 화면에 즉시 추가하지 않고, 서버로만 보내기
//       socket.emit('send_message', messageData);
//       setMessage(''); // 메시지 입력란 비우기
//     }
//   };

//   return (
//     <div style={{ color: 'white' }}>
//       <h1>Chat Room Test</h1>

//       {/* 채팅방 생성 폼 */}
//       <div>
//         <h2>Create Chat Room</h2>
//         <input
//           type="text"
//           placeholder="Room Title"
//           value={newRoomTitle}
//           onChange={(e) => setNewRoomTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Restaurant"
//           value={newRoomRestaurant}
//           onChange={(e) => setNewRoomRestaurant(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Max Participants"
//           value={newRoomMaxParticipants}
//           onChange={(e) => setNewRoomMaxParticipants(Number(e.target.value))}
//         />
//         <button onClick={createRoom}>Create Room</button>
//       </div>

//       {/* 채팅방 목록 */}
//       <div>
//         <h2>Available Chat Rooms</h2>
//         <ul>
//           {chatRooms.map((room) => (
//             <li key={room.id}>
//               {room.title} - {room.maxParticipants} participants
//               <button onClick={() => joinRoom(room.id)}>Join Room</button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* 현재 채팅방 */}
//       {currentRoomId !== null && (
//         <div>
//           <h2>Room {currentRoomId} - Chat</h2>
//           <div>
//             <div>
//               <h3>Messages</h3>
//               <ul>
//                 {messages.map((msg, index) => (
//                   <li key={index}>
//                     {msg.email}: {msg.message}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <input
//               type="text"
//               placeholder="Type a message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Test = () => {
  const [bets, setBets] = useState([]);
  const [raceData, setRaceData] = useState({});
  const [history] = useState([]);
  const [selectedHorse, setSelectedHorse] = useState(null);
  const [betAmount, setBetAmount] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [raceInProgress, setRaceInProgress] = useState(false);

  useEffect(() => {
    socket.on("bet_placed", (bet) => setBets((prev) => [...prev, bet]));
    socket.on("race_update", (data) => setRaceData(data.raceData));
    socket.on("race_end", (result) => {
      alert(`${result.winningHorse}번 말이 우승했습니다!`);
      fetchRaceHistory();
      setRaceInProgress(false);
    });

    fetchRaceHistory();

    return () => {
      socket.off("bet_placed");
      socket.off("race_update");
      socket.off("race_end");
    };
  }, []);

  const placeBet = () => {
    if (!selectedHorse || betAmount <= 0 || !userEmail) return alert("베팅 정보를 입력하세요!");
    socket.emit("place_bet", {
      email: userEmail,
      horseNumber: selectedHorse,
      amount: betAmount,
    });
    setBetAmount("");
  };

  const startRace = () => {
    setRaceInProgress(true);
    socket.emit("start_race");
  };

  const fetchRaceHistory = () => socket.emit("get_race_history");

  return (
    <div style={{ padding: "20px" , color:"white"}}>
      <h2>🏇 실시간 경마 베팅</h2>

      {/* 베팅 UI */}
      <label>이메일:</label>
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="이메일 입력"
      />

      <label>🐎 말 선택:</label>
      <select onChange={(e) => setSelectedHorse(Number(e.target.value))}>
        <option value="">-- 선택 --</option>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}번 말
          </option>
        ))}
      </select>

      <label>💰 베팅 금액:</label>
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(Number(e.target.value))}
      />

      <button onClick={placeBet}>베팅하기</button>
      <button onClick={startRace} disabled={raceInProgress}>🏁 경기 시작</button>

      {/* 실시간 경기 진행 */}
      <h3>🏁 경기 상황</h3>
      <div style={{ position: "relative", height: "300px", width: "100%" }}>
        {[...Array(10)].map((_, i) => {
          const horseNumber = i + 1;
          const distance = raceData[horseNumber] || 0;

          return (
            <div
              key={horseNumber}
              style={{
                position: "absolute",
                left: `${(distance / 1000) * 100}%`, // 1km를 100%로 나타내기
                top: `${horseNumber * 30}px`,
                width: "40px",
                height: "30px",
                backgroundColor: "green",
                color: "white",
                textAlign: "center",
                lineHeight: "30px",
              }}
            >
              {horseNumber}
            </div>
          );
        })}
      </div>

      {/* 사람들의 베팅 내역 */}
      <h3>📊 베팅 내역</h3>
      <ul>
        {bets.map((bet, index) => (
          <li key={index}>
            <strong>{bet.email}</strong>님이 <strong>{bet.horseNumber}</strong>번 말에 <strong>{bet.amount}원</strong> 베팅
          </li>
        ))}
      </ul>

      {/* 역대 경기 결과 */}
      <h3>📜 역대 경기 결과</h3>
      <ul>
        {history.map((race, index) => (
          <li key={index}>{race.winningHorse}번 말 우승 ({race.raceDate})</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
