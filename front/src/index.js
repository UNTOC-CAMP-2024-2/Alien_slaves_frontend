// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // 이 파일이 없으면 생략 가능
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
