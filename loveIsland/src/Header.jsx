import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const styles = {
   
    button: {
      backgroundColor: '#212121',
      color: '#fff',
      border: 'none',
      padding: '0px 6px',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '26px',
      fontWeight: 'bold',
      left:0,
    }
  };

  return (
    <header style={styles.header}>
      <button style={styles.button} onClick={() => navigate(-1)}>← </button>
      {/* <button style={{...styles.button, color: 'black'}} onClick={() => navigate(1)}> .</button>  */}
    </header>
  );
};

export default Header;