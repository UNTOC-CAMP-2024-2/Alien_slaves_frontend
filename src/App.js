import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Noticebar from './components/Noticebar';
import Navbar from './components/Navbar';
import FirstPage from './pages/FirstPage';
import InputInformation from './pages/Input_information';
import DormSelect from './pages/Dorm_select';
import Home from './pages/Home';
import Review from './pages/Review';
import Ranking from './pages/Ranking';
import All from './pages/All';
import Notice from './pages/Notice';
import Test from './pages/Test';
import './index.css';

function App() {
  return (
    <div id="app-container">
      <Router>
        {/* Header, Noticebar, Navbar 조건부 렌더링 */}
        <ConditionalLayout />
        <Routes>
          <Route path="/" element={<AutoRedirectFirstPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/input" element={<InputInformationWrapper />} />
          <Route path="/dorm" element={<DormSelectWrapper />} />
          <Route path="/home" element={<PageWithNavbar component={<Home />} />} />
          <Route path="/review" element={<PageWithNavbar component={<Review />} />} />
          <Route path="/ranking" element={<PageWithNavbar component={<Ranking />} />} />
          <Route path="/all" element={<PageWithNavbar component={<All />} />} />
          <Route path="/notice" element={<PageWithNavbar component={<Notice />} />} />
          <Route path="*" element={<AutoRedirectFirstPage />} />
        </Routes>
      </Router>
    </div>
  );

  

}

function ConditionalLayout() {
  const location = useLocation();

  // Header, Noticebar, Navbar가 표시될 경로 정의
  const headerVisibleRoutes = ['/home', '/review', '/ranking', '/all', '/notice'];
  const noticebarVisibleRoutes = ['/home', '/review', '/ranking'];
  const navbarVisibleRoutes = ['/home', '/review', '/ranking', '/all', '/notice'];

  const noticebarMessage = '공지사항공지사항공지사항공지사항공지사항.';

  return (
    <>
      {/* 조건부 Header */}
      {headerVisibleRoutes.includes(location.pathname) && <Header />}

      {/* 조건부 Noticebar */}
      {noticebarVisibleRoutes.includes(location.pathname) && <Noticebar message={noticebarMessage} />}

      {/* 조건부 Navbar */}
      {navbarVisibleRoutes.includes(location.pathname) && <Navbar />}
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
