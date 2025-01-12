import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';

// -------------------------------------------------
// 1. 데이터/상수 정의
// -------------------------------------------------
const CATEGORIES = {
  학식: ['금정회관', '문창회관', '샛별회관', '학생회관'],
  기숙사: ['웅비관', '진리관', '자유관'],
};

// ※ '웅비관'의 경우 조식도 선택 가능하다고 해서
//   특별히 조식 옵션을 모든 기숙사에 넣지 않고, 조건 처리합니다.
//   (필요하다면 더 확장 가능)
const TIMES = ['아침', '점심', '저녁'];

const INITIAL_RATINGS_DATA = [
  { name: '흑미밥', score: 5 },
  { name: '참치김치찌개', score: 5 },
  { name: '돈육장조림', score: 5 },
  { name: '맛김', score: 5 },
  { name: '콩나물무침', score: 5 },
  { name: '배추김치', score: 5 },
  { name: '우유(두유)', score: 5 },
];

// -------------------------------------------------
// 2. 공통 스타일 정의
// -------------------------------------------------
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    padding: '20px 10px 20px 20px',
    backgroundColor: '#f9f9f9',
    margin: '0 auto', // 가로 중앙 정렬용
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
  ratingsItem: {
    fontSize: '14px',
    fontWeight: '600',
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
    maxHeight: '700px',
    backgroundColor: '#eaeaea',
    borderRadius: '8px',
    margin: '20px 0',
    fontSize: '16px',
    color: '#aaa',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  hiddenInput: {
    display: 'none',
  },
  textArea: {
    width: '100%',
    height: '80px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    resize: 'none',
  },
  submitButton: {
    display: 'block',
    width: '100%',
    backgroundColor: '#9CE3D4',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
  },
};

// -------------------------------------------------
// 3. 별점 표시용 컴포넌트
// -------------------------------------------------
const StarRating = ({ stars, onStarClick }) => {
  const totalStars = 5;

  return (
    <div style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => {
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

// -------------------------------------------------
// 4. 음식 별점 리스트 컴포넌트
// -------------------------------------------------
const FoodRatings = ({ ratings, onStarChange }) => {
  return (
    <div>
      {ratings.map((item, index) => (
        <div key={item.name} style={styles.ratingsRow}>
          <span style={styles.ratingsItem}>{item.name}</span>
          <StarRating
            stars={item.score}
            onStarClick={(starValue) => onStarChange(index, starValue)}
          />
        </div>
      ))}
    </div>
  );
};

// -------------------------------------------------
// 5. 최종 평가 페이지 (Evaluating)
// -------------------------------------------------
const Evaluating = () => {
  // 여러 상태를 각각 관리
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [ratings, setRatings] = useState(INITIAL_RATINGS_DATA);

  // 카테고리 버튼 클릭
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('');
    setSelectedTime('');
  };

  // 세부 카테고리 버튼 클릭
  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedTime('');
  };

  // 시간대 버튼 클릭
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    // 확인 용
    console.log('카테고리:', selectedCategory);
    console.log('세부 카테고리:', selectedSubCategory);
    console.log('시간대:', time);
  };

  // 음식 별점 변경
  const handleStarChange = (foodIndex, newScore) => {
    const updatedRatings = ratings.map((item, idx) =>
      idx === foodIndex ? { ...item, score: newScore } : item
    );
    console.log(`음식: ${updatedRatings[foodIndex].name}, 별점: ${newScore}`);
    setRatings(updatedRatings);
  };

  // 파일 업로드
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedFile(url);
    }
  };

  // 리뷰 제출
  const handleReviewSubmit = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedTime || !reviewText.trim()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    // 제출 시 콘솔 출력 (실제로는 서버 전송 등)
    console.log('카테고리:', selectedCategory);
    console.log('세부 카테고리:', selectedSubCategory);
    console.log('시간대:', selectedTime);
    console.log('리뷰 내용:', reviewText);
    console.log('업로드된 파일:', uploadedFile || '없음');
    console.log('별점 정보:', ratings);

    alert('리뷰가 제출되었습니다.');
    // 필요하다면 상태 리셋 혹은 다른 처리
  };

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>평가</h1>

        {/* 1) 대분류 카테고리 선택 */}
        <div style={styles.buttonGroup}>
          {Object.keys(CATEGORIES).map((category) => (
            <button
              key={category}
              style={{
                ...styles.button,
                ...(selectedCategory === category ? styles.selectedButton : {}),
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 2) 세부 카테고리 선택 */}
        {selectedCategory && (
          <div style={styles.buttonGroup}>
            {CATEGORIES[selectedCategory]?.map((sub) => (
              <button
                key={sub}
                style={{
                  ...styles.button,
                  ...(selectedSubCategory === sub ? styles.selectedButton : {}),
                }}
                onClick={() => handleSubCategoryClick(sub)}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* 3) 시간대 선택 */}
        {selectedSubCategory && (
          <div style={styles.buttonGroup}>
            {/* 만약 '웅비관' 이라면 조식도 표시 */}
            {selectedSubCategory === '웅비관' && (
              <button
                style={{
                  ...styles.button,
                  ...(selectedTime === '조식' ? styles.selectedButton : {}),
                }}
                onClick={() => handleTimeClick('조식')}
              >
                조식
              </button>
            )}
            {TIMES.map((time) => (
              <button
                key={time}
                style={{
                  ...styles.button,
                  ...(selectedTime === time ? styles.selectedButton : {}),
                }}
                onClick={() => handleTimeClick(time)}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        {/* 4) 음식 리스트 + 별점 */}
        <FoodRatings ratings={ratings} onStarChange={handleStarChange} />

        {/* 5) 사진 업로드 */}
        <div
          style={{
            ...styles.addPhoto,
            backgroundImage: uploadedFile ? `url(${uploadedFile})` : 'none',
          }}
          onClick={() => document.getElementById('fileInput').click()}
        >
          {!uploadedFile && '사진 추가'}
          <input
            id="fileInput"
            type="file"
            style={styles.hiddenInput}
            onChange={handleFileChange}
          />
        </div>

        {/* 6) 리뷰 작성 텍스트박스 */}
        <textarea
          style={styles.textArea}
          placeholder="리뷰를 작성해주세요"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        {/* 7) 제출 버튼 */}
        <button style={styles.submitButton} onClick={handleReviewSubmit}>
          확인
        </button>
      </div>

      <Navbar />
    </div>
  );
};

export default Evaluating;
