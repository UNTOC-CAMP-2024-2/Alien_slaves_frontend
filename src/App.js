// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputInformation from './pages/Input_information';
import DormSelect from './pages/Dorm_select';
import Home from './pages/Home';
import Review from './pages/Review';
import Ranking from './pages/Ranking';
import All from './pages/All';
import './index.css';

function App() {
  return (
    <div id="app-container">
      <Router>
        <Routes>
          {/* 기본 경로에서 항상 FirstPage를 로드하고, AutoRedirectFirstPage에서 3초 후 이동 */}
          <Route path="/" element={<AutoRedirectFirstPage />} />
          <Route path="/input" element={<InputInformationWrapper />} />
          <Route path="/dorm" element={<DormSelectWrapper />} />
          <Route path="/home" element={<PageWithNavbar component={<Home />} />} />
          <Route path="/review" element={<PageWithNavbar component={<Review />} />} />
          <Route path="/ranking" element={<PageWithNavbar component={<Ranking />} />} />
          <Route path="/all" element={<PageWithNavbar component={<All />} />} />
          {/* 경로가 일치하지 않을 때 "/"로 리디렉트 */}
          <Route path="*" element={<AutoRedirectFirstPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function AutoRedirectFirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 "/input" 페이지로 이동
    const timer = setTimeout(() => {
      navigate('/input');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return <FirstPage />;
}

function InputInformationWrapper() {
  const navigate = useNavigate();
  return <InputInformation onSubmit={() => navigate('/dorm')} />;
}

function DormSelectWrapper() {
  const navigate = useNavigate();
  return <DormSelect onSubmit={() => navigate('/home')} />;
}

function PageWithNavbar({ component }) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar setCurrentPage={(page) => navigate(`/${page.toLowerCase()}`)} />
      {component}
    </>
  );
}

export default App;
