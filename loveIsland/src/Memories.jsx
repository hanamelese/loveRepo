



import React, { useState } from 'react';
import './Memories.css';
import img1 from './assets/photos/image1.jpg';
import img2 from './assets/photos/image2.jpg';
import img3 from './assets/photos/image3.jpg';
import img4 from './assets/photos/image4.jpg';
import img5 from './assets/photos/image5.jpg';
import img6 from './assets/photos/image6.jpg';
import img7 from './assets/photos/image7.jpg';
import img8 from './assets/photos/image8.jpg';  
import img9 from './assets/photos/image9.jpg';
import img10 from './assets/photos/image10.jpg';
import Header from './Header';


const photoList = [img1, img2, img3,img4, img5, img6, img7, img8, img9, img10];
const videoList = ['https://res.cloudinary.com/dxvv3zylg/video/upload/v1784223283/vid4_zmglvc.mp4',
  'https://res.cloudinary.com/dxvv3zylg/video/upload/v1784218742/vid3_dor9dh.mp4',
   'https://res.cloudinary.com/dxvv3zylg/video/upload/v1784218677/vid2_b4u69o.mp4', 
   'https://res.cloudinary.com/dxvv3zylg/video/upload/v1784216977/videos/vid5_czbosx.mp4'];
const MemoriesPage = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 300); 
    }
  };

  return (
    <div className="memories-container">
      <Header />
      <div className="tabs">
        <h2 onClick={() => handleTabChange('photos')} className={activeTab === 'photos' ? 'active' : ''}>Photos</h2>
        <h2 onClick={() => handleTabChange('videos')} className={activeTab === 'videos' ? 'active' : ''}>Videos</h2>
      </div>

      <div className="content-wrapper">
        <div className={`grid-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>

{activeTab === 'photos' ? (
  photoList.map((src, i) => (
    <div 
      key={`photo-${i}`} 
      className="card" 
      style={{ 
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  ))
) : (
  videoList.map((src, i) => (
    <video 
      key={`video-${i}`} 
      className="card" 
      src={src} 
      controls 
      style={{ width: '90%', height: '80%', objectFit: 'cover' }}
    />
  ))
)}
<div className="handwritings handwriting-3">"I am happy to have you 😍"</div>
      <div className="handwritings handwriting-4">"Deep kisses💋💋"</div>


        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;