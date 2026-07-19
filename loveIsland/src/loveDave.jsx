import React, { useState } from 'react';
import './LoveDave.css';
import Header from './Header';

const LoveDave = () => {
  const [noPosition, setNoPosition] = useState({ top: '60%', left: '50%' });
  const [isLoved, setIsLoved] = useState(false);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleYesClick = () => {
    setIsLoved(true);
    speak("yay!");
  };

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 60) + 20 + '%';
    const newLeft = Math.floor(Math.random() * 60) + 20 + '%';
    setNoPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="page-wrapper">
     
      <div className="love-container">
         <Header />
        {isLoved ? (
          <div className="celebration">
            <h1>Yay! ❤️</h1>
          </div>
        ) : (
          <>
            <h1 style={{color:'wheat',fontFamily:'cursive'}}>Do you love me?</h1>
            <div className="love-buttons">
              <button className="yes-btn" onClick={handleYesClick}>Yes</button>
              <button 
                className="no-btn" 
                style={{ top: noPosition.top, left: noPosition.left }}
                onMouseEnter={moveNoButton}
              >
                No
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoveDave;