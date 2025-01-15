import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../components/Navbar';

// 데이터/상수 정의
const CATEGORIES = {
  학식: ['금정회관', '문창회관', '샛별회관', '학생회관'],
  기숙사: ['웅비관', '진리관', '자유관'],
};

const TIMES = ['아침', '점심', '저녁'];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    padding: '20px 10px 20px 20px',
    backgroundColor: '#f9f9f9',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#f1f1f1',
    border: 'none',
    borderRadius: '3px',
    padding: '6px 8px',
    margin: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '900',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  selectedButton: {
    backgroundColor: '#9CE3D4',
    color: '#fff',
  },
  ratingsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#424141',
  },
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#FFCD00',
    gap: '5px',
  },
  addPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '230px',
    backgroundColor: '#eaeaea',
    borderRadius: '8px',
    margin: '20px 0',
    fontSize: '16px',
    color: '#aaa',
    cursor: 'pointer',
    textAlign: 'center',
  },
  textArea : {
    width: '100%',
    height: '100px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '16px',
    resize: 'none',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  submitButton : {
    width: '100%',
    backgroundColor: '#9CE3D4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  },
  navbar: {
    position: 'sticky', /* 'sticky' -> 'fixed' */
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    zIndex: 1000,
  },
};


// 별점 표시 컴포넌트
const StarRating = ({ stars, onStarClick }) => {
  return (
    <div style={styles.starContainer}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= stars;
        const IconComponent = isActive ? FaStar : FaRegStar;

        return (
          <button
            key={starValue}
            onClick={() => onStarClick(starValue)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <IconComponent />
          </button>
        );
      })}
    </div>
  );
};

// 음식 별점 리스트 컴포넌트
const FoodRatings = ({ ratings, onStarChange }) => {
  return (
    <div>
      {ratings.map((item, index) => (
        <div key={item.name} style={styles.ratingsRow}>
          <span>{item.name}</span>
          <StarRating
            stars={item.score}
            onStarClick={(starValue) => onStarChange(index, starValue)}
          />
        </div>
      ))}
    </div>
  );
};

const restaurantMapping = {
  1: "진리관",
  2: "웅비관",
  3: "금정회관 교직원 식당",
  4: "금정회관 학생 식당",
  5: "문창회관 식당",
  6: "자유관",
  7: "학생회관 학생 식당",
};

// 평가 페이지
const Evaluating = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [ratings, setRatings] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  // API를 통해 식단 데이터 가져오기
  const fetchMenusByDate = async (type, location) => {
    // 당일 날짜를 가져와서 형식 변환
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // YYYY-MM-DD 포맷
  
    const url = `http://localhost:4000/api/v1/restaurants/meals/all?date=${formattedDate}`;
  
    try {
      const response = await axios.get(url, {
        params: { type, location },
      });
  
      const data = response.data.data;
  
      const uniqueData = data.filter(
        (menu, index, self) =>
          index ===
          self.findIndex(
            (m) =>
              m.restaurant_id === menu.restaurant_id &&
              m.time === menu.time &&
              m.food_name === menu.food_name
          )
      );
  
      // 기숙사별 데이터 초기화
      const groupedByDorm = {
        자유관: { 아침: [], 점심: [], 저녁: [] },
        진리관: { 아침: [], 점심: [], 저녁: [] },
        웅비관: { 아침: [], 점심: [], 저녁: [] },
      };
  
      // 데이터를 기숙사별로 그룹화
      uniqueData.forEach((menu) => {
        const dormName = restaurantMapping[menu.restaurant_id];
  
        if (groupedByDorm[dormName]) {
          if (menu.time === "조식") {
            groupedByDorm[dormName]["아침"].push(menu.food_name);
          } else if (menu.time === "중식") {
            groupedByDorm[dormName]["점심"].push(menu.food_name);
          } else if (menu.time === "석식") {
            groupedByDorm[dormName]["저녁"].push(menu.food_name);
          }
        }
      });
  
      return groupedByDorm;
    } catch (error) {
      console.error(`${type} 메뉴 데이터 가져오기 실패:`, error);
      return {
        자유관: { 아침: [], 점심: [], 저녁: [] },
        진리관: { 아침: [], 점심: [], 저녁: [] },
        웅비관: { 아침: [], 점심: [], 저녁: [] },
      };
    }
  };

  // 카테고리, 세부 카테고리, 시간 변경 시 데이터 다시 가져오기
  useEffect(() => {
    if (selectedCategory && selectedSubCategory && selectedTime) {
      const type = selectedCategory === '학식' ? 'cafeteria' : 'dormitory';
      fetchMenusByDate(type, selectedSubCategory).then((data) => {
        // 선택한 시간대에 맞는 데이터를 설정
        const timeData = data[selectedSubCategory]?.[selectedTime] || [];
        const formattedRatings = timeData.map((food) => ({ name: food, score: 0 }));
        setRatings(formattedRatings);
      });
    }
  }, [selectedCategory, selectedSubCategory, selectedTime]);
  
  // 리뷰 제출
  const handleReviewSubmit = async () => {
    try {
      const restaurantId = Object.keys(restaurantMapping).find(
        (key) => restaurantMapping[key] === selectedSubCategory
      );
      const selectedMealTime =
        selectedTime === "아침" ? "조식" : selectedTime === "점심" ? "중식" : "석식";
  
      if (!restaurantId || !selectedMealTime) {
        alert("카테고리, 세부 카테고리, 시간을 선택해주세요.");
        return;
      }
  
      // `menu_date_id` 가져오기
      const response = await axios.get(
        `http://localhost:4000/api/v1/restaurants/${restaurantId}`
      );
  
      const menuData = response.data.data;
      const menuItem = menuData.find((item) => item.time === selectedMealTime);
  
      if (!menuItem || !menuItem.menu_date_id) {
        alert("해당 날짜와 시간에 해당하는 메뉴 데이터가 없습니다.");
        return;
      }
  
      const menuDateId = menuItem.menu_date_id;
  
      // 로그인 사용자 이메일 가져오기
      const emailResponse = await axios.post(
        "http://localhost:4000/api/v1/auth/email/login",
        {
          email: "user1@test.com", // 실제 사용자의 이메일
          nickname: "유저1", // 실제 사용자의 닉네임
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!emailResponse.data || !emailResponse.data.email) {
        alert("사용자 이메일 정보를 가져오는 데 실패했습니다.");
        return;
      }
  
      const email = emailResponse.data.email;
  
      // 리뷰 데이터 전송
      const url = `http://localhost:4000/api/v1/reviews`;
  
      const requestBody = {
        menu_date_id: menuDateId,
        email,
        comment: reviewText,
        photo_path: uploadedFile || null, // 파일 경로 또는 null
        review_date: new Date().toISOString(),
      };
  
      const reviewResponse = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (reviewResponse.status === 200 || reviewResponse.status === 201) {
        console.log("리뷰 제출 성공:", reviewResponse.data);
        alert("리뷰가 성공적으로 제출되었습니다!");
      } else {
        console.error("리뷰 제출 실패:", reviewResponse.data);
        alert("리뷰 제출에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("리뷰 제출 실패:", error);
      alert("리뷰 제출에 실패했습니다. 다시 시도해주세요.");
    }
  };
  
  

  return (
    <div>
    <div style={styles.container}>
      <h1 style={styles.title}>평가</h1>

      {/* 카테고리 선택 */}
      <div style={styles.buttonGroup}>
        {Object.keys(CATEGORIES).map((category) => (
          <button
            key={category}
            style={{
              ...styles.button,
              ...(selectedCategory === category ? styles.selectedButton : {}),
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 세부 카테고리 선택 */}
      {selectedCategory && (
        <div style={styles.buttonGroup}>
          {CATEGORIES[selectedCategory]?.map((subCategory) => (
            <button
              key={subCategory}
              style={{
                ...styles.button,
                ...(selectedSubCategory === subCategory ? styles.selectedButton : {}),
              }}
              onClick={() => setSelectedSubCategory(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}

      {/* 시간 선택 */}
      {selectedSubCategory && (
        <div style={styles.buttonGroup}>
          {TIMES.map((time) => (
            <button
              key={time}
              style={{
                ...styles.button,
                ...(selectedTime === time ? styles.selectedButton : {}),
              }}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {/* 음식 리스트 + 별점 */}
      <FoodRatings ratings={ratings} onStarChange={(index, score) => {
        const updatedRatings = ratings.map((item, idx) =>
          idx === index ? { ...item, score } : item
        );
        setRatings(updatedRatings);
      }} />

      {/* 사진 업로드 */}
      <div
        style={styles.addPhoto}
        onClick={() => document.getElementById('fileInput').click()}
      >
        {uploadedFile ? (
          <img src={uploadedFile} alt="업로드된 사진" style={{ width: '100%' }} />
        ) : (
          '사진 추가'
        )}
        <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          onChange={(e) =>
            e.target.files[0] && setUploadedFile(URL.createObjectURL(e.target.files[0]))
          }
        />
      </div>

      {/* 리뷰 작성 */}
      <textarea
        style={styles.textArea}
        placeholder="리뷰를 작성해주세요"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

      {/* 제출 버튼 */}
      <button style={styles.submitButton} onClick={handleReviewSubmit}>
        확인
      </button>
    </div>
    <div style={styles.navbar}>
        <Navbar />
      </div>
    </div>
  );
};

export default Evaluating;
