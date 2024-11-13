// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // 스타일 파일이 없으면 생략 가능
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // id="root" 요소에 렌더링
);

reportWebVitals();
