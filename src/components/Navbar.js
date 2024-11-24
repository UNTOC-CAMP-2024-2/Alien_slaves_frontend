import React, { useState } from 'react';
import { FaHome, FaListAlt, FaTrophy, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [iconColors, setIconColors] = useState({
    home: '#fff',
    review: '#fff',
    ranking: '#fff',
    all: '#fff',
  });

  const handleMouseEnter = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#999999' }));
  };

  const handleMouseLeave = (icon) => {
    setIconColors((prevColors) => ({ ...prevColors, [icon]: '#fff' }));
  };

  const styles = {
    bottomNav: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px 0',
      position: 'absolute',
      height: '40px',
      bottom: 0,
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      borderTop: '1px solid #333',
    },
    bottomButton: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.3rem',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.bottomNav}>
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={() => handleMouseLeave('home')}
        onClick={() => navigate('/home')}
      >
        <FaHome color={iconColors.home} />
      </div>
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('review')}
        onMouseLeave={() => handleMouseLeave('review')}
        onClick={() => navigate('/review')}
      >
        <FaListAlt color={iconColors.review} />
      </div>
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('ranking')}
        onMouseLeave={() => handleMouseLeave('ranking')}
        onClick={() => navigate('/ranking')}
      >
        <FaTrophy color={iconColors.ranking} />
      </div>
      <div
        style={styles.bottomButton}
        onMouseEnter={() => handleMouseEnter('all')}
        onMouseLeave={() => handleMouseLeave('all')}
        onClick={() => navigate('/all')}
      >
        <FaBars color={iconColors.all} />
      </div>
    </div>
  );
}

export default Navbar;
