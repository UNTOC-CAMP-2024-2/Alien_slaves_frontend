// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputInformation from './pages/Input_information';
import DormSelect from './pages/Dorm_select';
import Home from './pages/Home';
import Review from './pages/Review';
import Ranking from './pages/Ranking';
import All from './pages/All';

function App() {
  const [currentPage, setCurrentPage] = useState('FirstPage'); // 초기 페이지를 FirstPage로 설정
  const [showNavbar, setShowNavbar] = useState(false); // 네비게이션 바 표시 여부

  // 3초 후에 InputInformation 페이지로 전환
  useEffect(() => {
    if (currentPage === 'FirstPage') {
      const timer = setTimeout(() => {
        setCurrentPage('InputInformation');
        setShowNavbar(false); // 네비게이션 바를 숨김 상태로 유지
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'FirstPage':
        return <FirstPage />;
      case 'InputInformation':
        return (
          <InputInformation
            onSubmit={() => {
              setCurrentPage('DormSelect'); // 정보를 제출한 후 DormSelect 화면으로 전환
              setShowNavbar(false); // DormSelect 화면에서도 네비게이션 바를 숨김
            }}
          />
        );
      case 'DormSelect':
        return (
          <DormSelect
            onSubmit={() => {
              setCurrentPage('Home'); // 기숙사 선택을 완료하고 Home 화면으로 전환
              setShowNavbar(true); // Home 화면에서 네비게이션 바를 표시
            }}
          />
        );
      case 'Home':
        return <Home />;
      case 'Review':
        return <Review />;
      case 'Ranking':
        return <Ranking />;
      case 'All':
        return <All />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {showNavbar && <Navbar setCurrentPage={setCurrentPage} />} {/* showNavbar가 true일 때만 네비게이션 바를 렌더링 */}
      <div style={{ paddingTop: showNavbar ? '60px' : '0', paddingBottom: '60px', textAlign: 'center', color: '#fff' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;