// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // 평가 페이지
import Review from './pages/Review'; // 평가 페이지
import Ranking from './pages/Ranking'; // 랭킹 페이지
import All from './pages/All';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
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
      <Navbar setCurrentPage={setCurrentPage} />
      <div style={{ paddingTop: '60px', paddingBottom: '60px', textAlign: 'center', color: '#fff' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
