// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Notice from './components/Notice';
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
        {/* Header, Notice 조건부 렌더링 */}
        <ConditionalHeaderAndNotice />
        <Routes>
          <Route path="/" element={<AutoRedirectFirstPage />} />
          <Route path="/input" element={<InputInformationWrapper />} />
          <Route path="/dorm" element={<DormSelectWrapper />} />
          <Route path="/home" element={<PageWithNavbar component={<Home />} />} />
          <Route path="/review" element={<PageWithNavbar component={<Review />} />} />
          <Route path="/ranking" element={<PageWithNavbar component={<Ranking />} />} />
          <Route path="/all" element={<PageWithNavbar component={<All />} />} />
          <Route path="*" element={<AutoRedirectFirstPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function ConditionalHeaderAndNotice() {
  const location = useLocation();

  const headerVisibleRoutes = ['/home', '/review', '/ranking', '/all'];
  const noticeVisibleRoutes = ['/home', '/review', '/ranking'];

  const noticeMessage = '공지사항공지사항공지사항공지사항공지사항.';

  return (
    <>
      {headerVisibleRoutes.includes(location.pathname) && <Header />}
      {noticeVisibleRoutes.includes(location.pathname) && <Notice message={noticeMessage} />}
    </>
  );
}

function AutoRedirectFirstPage() {
  const navigate = useNavigate();

  useEffect(() => {
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
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
