import React, { useState } from 'react';
import './loveDave.css';
import Header from './Header';
import envelope from './assets/envelope3.png';
const LoveDave = () => {
  
  return (
    <div className="page-wrapper">
     
      <div className="love-container">
         <Header />
       
                    <div className="envelope" style={{ backgroundImage: `url(${envelope})` }}> I wanted to take a moment to tell you just how much you mean to me. 
                      You are my joy, my calm, and my favorite adventure. Thank you for being the person who makes every challenge feel easier just by being by my side.</div>
                    

                
      </div>
    </div>
  );
};

export default LoveDave;