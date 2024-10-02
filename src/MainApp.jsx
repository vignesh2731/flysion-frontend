import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import App2 from './App2'; 
import App3one from './App3one'; 
import './App.css'; 
import './App2.css';
import './App3.css';
import Loginpage from './Loginpage';
import App4 from './App4'; 
function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<App2 />} />
        <Route path="/customer/create" element={<App3one />} /> 
        <Route path="/designer/create" element={<App3one />} />
        <Route path="/login1" element={<Loginpage />} />
        <Route path="/dashboard" element={<App4 />} /> 
      </Routes>
    </Router>
  );
}

export default MainApp;
