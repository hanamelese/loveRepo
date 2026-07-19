import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MemoriesPage from './Memories'; // Ensure this file exists

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Router MUST be the outermost wrapper */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);