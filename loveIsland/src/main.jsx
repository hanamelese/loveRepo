import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MemoriesPage from './Memories'; // Ensure this file exists
import LoveDave from './loveDave';
import Header from './Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/love-dave" element={<LoveDave />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);