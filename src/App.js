// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 공통 컴포넌트
import Header from './components/Header';

// 페이지 컴포넌트
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Ranking from './pages/Ranking';
import Review from './pages/Review';
import Contents from './pages/Contents';
import ChatPage from './pages/ChatPage';
import Evaluating from './pages/Evaluating';
import SignInEmail from './pages/SignInEmail';
import SignInKakao from './pages/SignInKakao';
import Test from './pages/Test';

// 전역 스타일
import './index.css';
import CalendarHeader from './components/CalendarHeader';

/* 
 * (A) Header와 CalendarHeader를 경로별로 조건부 렌더링할 컴포넌트
 */
function ConditionHeaderNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Header는 "/home"에서만 렌더링 */}
      {currentPath === '/home' && <Header />}
      {currentPath === '/home' && <CalendarHeader />}
      
      {/* CalendarHeader는 "/home"과 "/contents"에서만 렌더링 */}
      {/* {['/home', '/ranking'].includes(currentPath) && <CalendarHeader />} */}
    </>
  );
}

function App() {
  return (
    <div id="app-container">
      <Router>
        {/* (B) 조건부 렌더링 컴포넌트 */}
        <ConditionHeaderNavbar />

        <Routes>
          {/* 첫 화면을 로그인 페이지로 설정 (원하는 대로 수정 가능) */}
          <Route path="" element={<LogIn />} />

          {/* 페이지별 라우트 */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/evaluating" element={<Evaluating />} />
          <Route path="/signinemail" element={<SignInEmail />} />
          <Route path="/signinkakao" element={<SignInKakao />} />
          
          <Route path="/test" element={<Test />} />

          {/* 404 대체 - 없는 경로로 들어올 경우 로그인으로 */}
          <Route path="*" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
