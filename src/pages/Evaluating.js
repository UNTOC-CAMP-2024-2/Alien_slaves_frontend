import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
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
    borderRadius: '10px',
    padding: '10px 12px',
    margin: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  selectedButton: {
    backgroundColor: '#9CE3D4',
    color: '#fff',
  },
  ratingsRow: {
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex', // 추가
    alignItems: 'center', // 추가
  },
  ratingsItem: {
    fontSize: '18px',
    fontWeight: '600',
  },
  // 별 컨테이너
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#FFCD00',
  },
  addPhoto: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px',
    backgroundColor: '#eaeaea',
    borderRadius: '8px',
    margin: '20px 0',
    fontSize: '16px',
    color: '#aaa',
    cursor: 'pointer',
    textAlign: 'center',
  },
  hiddenInput: {
    display: 'none',
  },
  uploadedFile: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#555',
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

/**
 * 별점을 표시하고, 클릭 시 선택한 별점을 상위로 전달하는 컴포넌트
 * @param {number} stars 현재 별점 (1 ~ 5)
 * @param {function} onStarClick 클릭 시 호출되는 함수 (별점 값 전달)
 */
const StarRating = ({ stars, onStarClick }) => {
  const totalStars = 5; // 최대 5점

  return (
    <div style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= stars;
        const IconComponent = isActive ? FaStar : FaRegStar;

        return (
          <span
            key={index}
            onClick={() => onStarClick(starValue)}
          >
            <IconComponent />
          </span>
        );
      })}
    </div>
  );
};

// 초기 데이터
const ratingsData = [
  { name: '흑미밥', score: 5 },
  { name: '참치김치찌개', score: 5 },
  { name: '돈육장조림', score: 5 },
  { name: '맛김', score: 5 },
  { name: '콩나물무침', score: 5 },
  { name: '배추김치', score: 5 },
  { name: '우유(두유)', score: 5 },
];

/**
 * 각 음식 항목에 대해 별점을 표시하고 클릭 시 해당 값을 업데이트하는 컴포넌트
 */
const FoodRatings = () => {
    // 별점 데이터 상태 관리
    const [ratings, setRatings] = useState(ratingsData);
  
    // 별 클릭 시 해당 음식 항목의 별점을 변경
    const handleStarClick = (index, newScore) => {
      const updatedRatings = [...ratings];
      updatedRatings[index].score = newScore;
  
      // 여기서 음식 이름과 선택된 별점을 console.log로 출력
      console.log(`음식: ${updatedRatings[index].name}, 별점: ${newScore}`);
  
      setRatings(updatedRatings);
    };
  
    return (
      <div>
        {ratings.map((item, index) => (
          <div key={index} style={styles.ratingsRow}>
            <span style={styles.ratingsItem}>{item.name}</span>
            <StarRating
              stars={item.score}
              onStarClick={(starValue) => handleStarClick(index, starValue)}
            />
          </div>
        ))}
      </div>
    );
  };

/**
 * 최종 평가 페이지
 */
const Evaluating = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('');
    setSelectedTime('');
  };

  const handleSubCategoryClick = (subcategory) => {
    setSelectedSubCategory(subcategory);
    setSelectedTime('');
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log('카테고리:', selectedCategory);
    console.log('세부 카테고리:', selectedSubCategory);
    console.log('시간대:', time);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 파일 객체를 브라우저에서 미리 볼 수 있는 임시 URL로 만들어줌
      const url = URL.createObjectURL(file);
      setUploadedFile(url);
    }
  };
  

  const handleReviewSubmit = () => {
    if (!selectedCategory || !selectedSubCategory || !selectedTime || !reviewText.trim()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    console.log('카테고리:', selectedCategory);
    console.log('세부 카테고리:', selectedSubCategory);
    console.log('시간대:', selectedTime);
    console.log('리뷰 내용:', reviewText);
    console.log('업로드된 파일:', uploadedFile || '없음');

    alert('리뷰가 제출되었습니다.');
  };

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>평가</h1>
        {/* 카테고리 선택 */}
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.button,
              ...(selectedCategory === '학식' ? styles.selectedButton : {}),
            }}
            onClick={() => handleCategoryClick('학식')}
          >
            학식
          </button>
          <button
            style={{
              ...styles.button,
              ...(selectedCategory === '기숙사' ? styles.selectedButton : {}),
            }}
            onClick={() => handleCategoryClick('기숙사')}
          >
            기숙사
          </button>
        </div>

        {/* 세부 카테고리 선택 */}
        {selectedCategory === '학식' && (
          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '금정회관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('금정회관')}
            >
              금정회관
            </button>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '문창회관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('문창회관')}
            >
              문창회관
            </button>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '샛별회관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('샛별회관')}
            >
              샛별회관
            </button>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '학생회관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('학생회관')}
            >
              학생회관
            </button>
          </div>
        )}
        {selectedCategory === '기숙사' && (
          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '웅비관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('웅비관')}
            >
              웅비관
            </button>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '진리관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('진리관')}
            >
              진리관
            </button>
            <button
              style={{
                ...styles.button,
                ...(selectedSubCategory === '자유관' ? styles.selectedButton : {}),
              }}
              onClick={() => handleSubCategoryClick('자유관')}
            >
              자유관
            </button>
          </div>
        )}

                {/* 시간대 선택 */}
        <div style={styles.buttonGroup}>
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
        <button
            style={{
            ...styles.button,
            ...(selectedTime === '아침' ? styles.selectedButton : {}),
            }}
            onClick={() => handleTimeClick('아침')}
        >
            아침
        </button>
        <button
            style={{
            ...styles.button,
            ...(selectedTime === '점심' ? styles.selectedButton : {}),
            }}
            onClick={() => handleTimeClick('점심')}
        >
            점심
        </button>
        <button
            style={{
            ...styles.button,
            ...(selectedTime === '저녁' ? styles.selectedButton : {}),
            }}
            onClick={() => handleTimeClick('저녁')}
        >
            저녁
        </button>
        </div>

        {/* 음식 리스트 + 별점(클릭 가능) */}
        <div>
          <FoodRatings />
        </div>

        {/* 사진 업로드 */}
        <div
        style={{
            ...styles.addPhoto,
            backgroundImage: uploadedFile ? `url(${uploadedFile})` : 'none',
            backgroundSize: 'cover',       // div에 가득 차도록
            backgroundPosition: 'center',  // 중앙 정렬
            backgroundRepeat: 'no-repeat',
        }}
        onClick={() => document.getElementById('fileInput').click()}
        >
        {/* 업로드된 파일이 없으면 '사진 추가' 라는 문구를 보여주고, 있으면 문구 없이 배경 이미지만 표시 */}
        {!uploadedFile && '사진 추가'}
        <input
            id="fileInput"
            type="file"
            style={styles.hiddenInput}
            onChange={handleFileChange}
        />
        </div>
        {/* 리뷰 작성 텍스트박스 */}
        <textarea
          style={styles.textArea}
          placeholder="리뷰를 작성해주세요"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        {/* 제출 버튼 */}
        <button style={styles.submitButton} onClick={handleReviewSubmit}>
          확인
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Evaluating;
