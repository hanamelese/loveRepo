import React from 'react';
import './App.css';
import diaryBg from './assets/diary2.jpg';
import lover1 from './assets/lover1.png';
import lover2 from './assets/lover2.png';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function App() {
  const navigate = useNavigate();
  return (
    
    <div className="main-container" >
      
        
      <div className="handwriting handwriting-1">"Memories are timeless..."</div>
      <div className="handwriting handwriting-2">"Forever yours."</div>

      
      <div className="notebook-overlay">
        
        {/* The Two Photos */}
        <div className="polaroid photo-1">
            <div className="polaroid-inner" style={{ backgroundImage: `url(${lover1})` }}></div>
            
        </div>
        <div className="polaroid photo-2">
            <div className="polaroid-inner" style={{ backgroundImage: `url(${lover2})` }}></div>
        </div>

        {/* Aesthetic Buttons on the Right */}
        <div className="button-group">
            <button className="aesthetic-btn" onClick={() => navigate('/memories')}>Our Memories</button>
            <button className="aesthetic-btn" onClick={()=> navigate('/love-dave')}>Push Me</button>
        </div>
      </div>
    </div>
  );
}

export default App;