// import React, { useState } from 'react';

// function App() {
//   const data = {
//     자유관: {
//       아침: { 
//         image: '/assets/자유관아침밥.jpg', 
//         menu: ["콩나물국", "계란말이", "김치", "감자볶음", "스크램블에그", "샐러드"], 
//         ratings: [3.5, 4, 5, 4, 3.5, 4.5] 
//       },
//       점심: { 
//         image: '/assets/자유관점심밥.jpg', 
//         menu: ["된장찌개", "닭볶음탕", "나물무침", "깍두기", "잡채", "어묵볶음"], 
//         ratings: [4, 4.5, 5, 4, 4.5, 5] 
//       },
//       저녁: { 
//         image: '/assets/자유관저녁밥.jpg', 
//         menu: ["김치볶음밥", "미역국", "잡채", "치킨", "볶음김치", "된장국"], 
//         ratings: [4.5, 5, 4, 4.5, 5, 4.5] 
//       },
//     },
//     진리관: {
//       아침: { 
//         image: '/assets/진리관아침밥.jpg', 
//         menu: ["흑미밥", "두부조림", "김치", "콩자반", "멸치볶음", "미소국"], 
//         ratings: [5, 4.5, 4, 4.5, 5, 4.5] 
//       },
//       점심: { 
//         image: '/assets/진리관점심밥.jpg', 
//         menu: ["청국장", "불고기", "상추쌈", "오징어볶음", "비빔국수", "우엉조림"], 
//         ratings: [4.5, 4, 5, 4, 5, 4.5] 
//       },
//       저녁: { 
//         image: '/assets/진리관저녁밥.jpg', 
//         menu: ["비빔밥", "미소된장국", "깍두기", "고등어구이", "닭강정", "어묵국"], 
//         ratings: [5, 5, 4.5, 4, 4.5, 5] 
//       },
//     },
//     웅비관: {
//       아침: { 
//         image: '/assets/웅비관아침밥.jpg', 
//         menu: ["쌀밥", "달걀프라이", "깍두기", "조랭이떡국", "참치샐러드", "소시지구이"], 
//         ratings: [4, 3.5, 4.5, 4, 4.5, 3.5] 
//       },
//       점심: { 
//         image: '/assets/웅비관점심밥.jpg', 
//         menu: ["떡국", "소불고기", "나물무침", "스팸구이", "미나리전", "잡채"], 
//         ratings: [4.5, 5, 4, 4.5, 5, 4.5] 
//       },
//       저녁: { 
//         image: '/assets/웅비관저녁밥.jpg', 
//         menu: ["짜장밥", "튀김", "김치", "계란찜", "카레라이스", "연근조림"], 
//         ratings: [5, 4.5, 4, 4.5, 5, 4.5] 
//       },
//     },
//   };

//   const [selectedDormitory, setSelectedDormitory] = useState("진리관");
//   const [selectedMealTime, setSelectedMealTime] = useState("저녁");

//   const currentData = data[selectedDormitory][selectedMealTime];

//   const handleRatingChange = (index, newRating) => {
//     const updatedRatings = [...currentData.ratings];
//     updatedRatings[index] = newRating;
//     currentData.ratings = updatedRatings; // 별점 수정 반영
//   };

//   return (
//     <div style={styles.container}>
//       <ImageSection image={currentData.image} />
//       <InfoSection
//         menuItems={currentData.menu}
//         ratings={currentData.ratings}
//         selectedDormitory={selectedDormitory}
//         selectedMealTime={selectedMealTime}
//         onSelectDormitory={setSelectedDormitory}
//         onSelectMealTime={setSelectedMealTime}
//         onRatingChange={handleRatingChange}
//       />
//     </div>  
//   );
// }

// function ImageSection({ image }) {
//   return (
//     <div style={styles.imageSection}>
//       <img src={image} alt="식사 이미지" style={styles.image} />
//     </div>
//   );
// }

// function InfoSection({ 
//   menuItems, ratings, selectedDormitory, selectedMealTime, 
//   onSelectDormitory, onSelectMealTime, onRatingChange 
// }) {
//   return (
//     <div style={styles.infoSection}>
//       <div style={styles.barContainer}>
//         {["자유관", "진리관", "웅비관"].map((name) => (
//           <div
//             key={name}
//             style={{
//               ...styles.bar,
//               backgroundColor: name === selectedDormitory ? '#444' : '#333',
//             }}
//             onClick={() => onSelectDormitory(name)}
//           >
//             <span style={styles.barText}>{name}</span>
//           </div>
//         ))}
//       </div>
//       <div style={styles.barContainer}>
//         {["아침", "점심", "저녁"].map((time) => (
//           <div
//             key={time}
//             style={{
//               ...styles.bar,
//               backgroundColor: time === selectedMealTime ? '#444' : '#333',
//             }}
//             onClick={() => onSelectMealTime(time)}
//           >
//             <span style={styles.barText}>{time}</span>
//           </div>
//         ))}
//       </div>
//       <div style={styles.menu}>
//         {menuItems.map((item, index) => (
//           <div key={index} style={styles.menuItem}>
//             <span>{item}</span>
//             <StarRating 
//               rating={ratings[index]} 
//               onChange={(newRating) => onRatingChange(index, newRating)} 
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function StarRating({ rating, onChange }) {
//   const [isDragging, setIsDragging] = useState(false);
//   const [hoveredRating, setHoveredRating] = useState(rating);

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const { left, width } = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - left;
//     const newRating = Math.min(5, Math.max(0, (mouseX / width) * 5)); // 0 ~ 5 범위
//     setHoveredRating(newRating);
//     onChange(Math.round(newRating * 2) / 2); // 반 칸 단위
//   };

//   const handleMouseDown = () => {
//     setIsDragging(true);
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     onChange(Math.round(hoveredRating * 2) / 2);
//   };

//   const handleMouseLeave = () => {
//     if (!isDragging) setHoveredRating(rating);
//   };

//   return (
//     <div
//       style={styles.starRating}
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//     >
//       {[...Array(5)].map((_, i) => {
//         const fillPercentage = Math.min(1, Math.max(0, hoveredRating - i));
//         return (
//           <div key={i} style={styles.starContainer}>
//             <svg
//               viewBox="0 0 24 24"
//               fill={fillPercentage > 0 ? (fillPercentage === 1 ? 'gold' : 'url(#half-gradient)') : 'none'}
//               stroke="gold"
//               xmlns="http://www.w3.org/2000/svg"
//               style={styles.star}
//             >
//               <defs>
//                 <linearGradient id="half-gradient">
//                   <stop offset={`${fillPercentage * 100}%`} stopColor="gold" />
//                   <stop offset={`${fillPercentage * 100}%`} stopColor="none" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M12 .587l3.668 7.425 8.209 1.195-5.938 5.799 1.4 8.165-7.339-3.857-7.338 3.857 1.399-8.165L.123 9.207l8.209-1.195L12 .587z"
//               />
//             </svg>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// const styles = {
//   container: {
//     width: '360px',
//     margin: 'auto',
//     backgroundColor: '#222',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     marginTop: '20px',
//     color: '#fff',
//   },
//   imageSection: {
//     textAlign: 'center',
//     padding: '10px',
//   },
//   image: {
//     width: '100%',
//     height: '200px',
//     borderRadius: '8px',
//     objectFit: 'cover',
//   },
//   infoSection: {
//     padding: '20px',
//   },
//   barContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '10px 0',
//   },
//   bar: {
//     flex: 1,
//     textAlign: 'center',
//     padding: '8px 0',
//     backgroundColor: '#333',
//     margin: '0 5px',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   barText: {
//     color: '#fff',
//     fontSize: '14px',
//     fontWeight: 'bold',
//   },
//   menu: {
//     marginTop: '10px',
//   },
//   menuItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '10px 10px',
//     alignItems: 'center',
//   },
//   starRating: {
//     display: 'flex',
//     alignItems: 'center',
//     cursor: 'pointer',
//     width: '120px',
//     height: '24px',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   starContainer: {
//     width: '20%',
//     position: 'relative',
//   },
//   star: {
//     width: '24px',
//     height: '24px',
//   },
// };

// export default App;
