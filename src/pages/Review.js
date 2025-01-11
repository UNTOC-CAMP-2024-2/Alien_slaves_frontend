import React from 'react';
import Navbar from '../components/Navbar';
import { FaStar, FaRegStar } from 'react-icons/fa';

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: '400px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    marginBottom: '20px',
    fontWeight: '700',
  },
  reviewContainer: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  nickname: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  reviewText: {
    fontSize: '15px',
    marginBottom: '10px',
    fontWeight: '600',
  },
  starsContainer: {
    display: 'inline-block',
    margin: '5px 0',
    fontWeight: '700',
  },
  star: {
    fontSize: '20px',
    margin: '0 2px',
    display: 'inline-block',
    transition: 'color 0.3s ease',
  },
  starFull: {
    color: '#FFD700',
  },
  starEmpty: {
    color: '#ccc',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  navbar: {
    position: 'sticky',
    bottom: '0',
    width: '100%',
    zIndex: '1000',
  },
  ratingsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
  },
  ratingsItem: {
    fontSize: '16px',
    fontWeight: '600',
  },
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: '#FFCD00',
    gap: '5px'
  },
};

const reviews = [
  {
    nickname: '사용자1',
    reviewText: '정말 맛있어요!',
    stars: 5,
    image: `${process.env.PUBLIC_URL}/assets/qkq.jpg`,
    ratings: [
      { name: '흑미밥', score: 3 },
      { name: '참치김치찌개', score: 3 },
      { name: '돈육장조림', score: 3 },
      { name: '맛김', score: 3 },
      { name: '콩나물무침', score: 3 },
      { name: '배추김치', score: 3 },
      { name: '우유(두유)', score: 3 },
    ],
  },
  {
    nickname: '사용자2',
    reviewText: '다시 방문하고 싶어요!',
    stars: 4,
    image: `${process.env.PUBLIC_URL}assets/진리관점심밥.jpg`,
    ratings: [
      { name: '쌀밥', score: 4 },
      { name: '된장찌개', score: 4 },
      { name: '고등어구이', score: 5 },
      { name: '계란말이', score: 4 },
      { name: '무생채', score: 4 },
      { name: '깍두기', score: 3 },
      { name: '요구르트', score: 4 },
    ],
  },
];

const calculateAverage = (ratings) => {
  const total = ratings.reduce((sum, item) => sum + item.score, 0);
  return (total / ratings.length).toFixed(1);
};

const StarRating = ({ stars }) => {
  const totalStars = 5; // 최대 5점

  return (
    <div style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= stars;
        const IconComponent = isActive ? FaStar : FaRegStar;

        return (
          <span key={index}>
            <IconComponent />
          </span>
        );
      })}
    </div>
  );
};
const FoodRatings = ({ ratings }) => {
  return (
    <div>
      {ratings.map((item, index) => (
        <div key={index} style={styles.ratingsRow}>
          <span style={styles.ratingsItem}>{item.name}</span>
          <StarRating stars={item.score} />
        </div>
      ))}
    </div>
  );
};

const Review = () => {
  return (
    <div>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>리뷰</h1>

        {/* Reviews */}
        {reviews.map((review, index) => {
          const averageStars = calculateAverage(review.ratings);
          return (
            <div key={index} style={styles.reviewContainer}>
              {/* Review Card */}
              <div style={styles.card}>
                <h2 style={styles.nickname}>{review.nickname}</h2>
                <p style={styles.reviewText}>{review.reviewText}</p>
                <StarRating stars={averageStars} />
              </div>

              {/* Image */}
              <div style={styles.imageContainer}>
                <img src={review.image} alt="음식 이미지" style={styles.image} />
              </div>

              {/* Food Ratings */}
              <FoodRatings ratings={review.ratings} />
            </div>
          );
        })}
      </div>
      <Navbar style={styles.navbar} />
    </div>
  );
};

export default Review;
