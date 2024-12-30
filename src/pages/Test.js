// src/pages/Home.js
import React from 'react';

function test() {
    const handleKakaoLogin = async () => { 
        //이게 안좋은 방식인데 일단 
        //프론트에서 처리하는거 최대한 없애려고 대부분의 책임을 백엔드로 옮겨둠.
        window.location.href = 'http://localhost:4000/api/v1/users/kakao';
    }
  return (
    <div>
      <h2>백엔드 개발 테스트용용</h2>
      <p>백엔드 개발에서 실험해볼꺼 테스트하는 용입니다..</p>
      <button onClick={handleKakaoLogin}>카카오로 로그인하기</button>
    </div>
  );
}

export default test;