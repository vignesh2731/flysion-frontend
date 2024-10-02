import React from 'react';
import { Link } from 'react-router-dom';
import './App2.css';

const App2 = () => {
  return (
    <div className="flyshion-container">
      <h1>FLYSHION</h1>
      <div className="logo-container">
        <img src="logo.jpg" alt="Flyshion Logo" className="logo" />
      </div>

      <div className="button-container">
        
        <div className="button-group">
          <button className="button main-button">CUSTOMER</button>
          <Link to="/customer/create" className="button secondary-button">
            Create Account
          </Link>
        </div>

       
        <div className="button-group">
          <button className="button main-button">DESIGNER</button>
          <button className="button secondary-button">Create Account</button>
        </div>
      </div>

     
      <div className="button-group">
        <span className="or-text">OR</span>
        <button className="button secondary-button">Login</button>
      </div>
    </div>
  );
};

export default App2;
