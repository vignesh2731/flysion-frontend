import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import App2 from './App2'; 
import App3 from './App3'; 
import './App.css'; 
import './App2.css';
import './App3.css';

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App2 />} />
        <Route path="/customer/create" element={<App3 />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
