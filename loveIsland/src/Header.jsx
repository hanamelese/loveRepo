import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Define your styles as a JavaScript object
  const styles = {
    header: {
      padding: '5px',
   
      display: 'flex',
      gap: '230px',
    //   borderBottom: '2px solid #5a4a42'
    },
    button: {
      backgroundColor: '#212121',
      color: '#fff',
      border: 'none',
      padding: '0px 6px',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '26px',
      fontWeight: 'bold',
    }
  };

  return (
    <header style={styles.header}>
      <button style={styles.button} onClick={() => navigate(-1)}>← </button>
      <button style={styles.button} onClick={() => navigate(1)}> →</button>
    </header>
  );
};

export default Header;