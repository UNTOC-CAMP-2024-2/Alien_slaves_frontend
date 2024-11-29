import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InputInformation({ onSubmit }) {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (name && studentId && department) {
      // 입력된 값들을 콘솔에 출력
      console.log('이름:', name);
      console.log('학번:', studentId);
      console.log('단과대학:', department);
      
      // onSubmit 호출
      onSubmit();

      // 입력 필드 초기화
      setName('');
      setStudentId('');
      setDepartment('');
      setErrorMessage('');
    } else {
      setErrorMessage('모든 정보를 입력해주세요.');
    }
  };

  const isFormValid = name && studentId && department;

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/rice-bowl-icon-white.png`} 
          alt="Rice Bowl Icon (white)" 
          style={styles.logo} 
        />
        <div style={styles.title}>BUGIK</div>
        <input
          style={styles.input}
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="학번을 입력해주세요."
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="단과대학을 입력해주세요."
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        {errorMessage && <div style={styles.error}>{errorMessage}</div>}
        <button
          style={styles.button}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          확인
        </button>
      </div>
    </div>
  );
}

InputInformation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputInformation;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
  },

  formBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '20px',
    width: '80%',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },

  logo: {
    width: '70px',
    marginBottom: '10px',
  },

  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
  },

  input: {
    width: '90%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#f0f0f0',
  },

  button: {
    width: '30%',
    padding: '10px',
    marginTop: '20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ddd',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },

  buttonHover: {
    backgroundColor: '#bbb',
  },

  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '10px',
  }
};