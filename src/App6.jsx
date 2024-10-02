import React from 'react';
import './App6.css'
const App6 = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%' 
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#fff9e5',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '50px',
          color: '#000'
        }}>
          Y
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '20px', margin: '10px 0' }}>You</p>

      <div style={{
        backgroundColor: '#fffbe5',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px',
        fontSize: '18px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3496/3496155.png"
            alt="Orders"
            style={{ marginRight: '10px',height:'30px',width:'30px'  }}
          />
          <span>Orders</span>
        </div>
        <span style={{ fontSize: '20px' }}></span>
      </div>

      <div style={{ 
        backgroundColor: '#fffbe5', 
        padding: '20px', 
        borderRadius: '5px', 
        width: '100%', 
        maxWidth: '400px' 
      }}>
        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', marginBottom: '20px', fontSize: '18px' }}>
          <img
            src="https://thumbs.dreamstime.com/b/account-icon-collection-design-concept-simple-element-vector-illustration-white-background-130331760.jpg"
            alt="Manage Account"
            style={{ marginRight: '10px',height:'30px',width:'30px'  }}
          />
          Manage Account
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '5px',
            width: '140px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '16px'
          }}>
            <img
              src="https://www.shutterstock.com/image-vector/id-card-vector-icon-identification-600nw-1722213970.jpg"
              alt="Account Details"
              style={{ marginBottom: '10px',height:'50px',width:'50px' }}
            />
            <p>Account Details</p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '15px',
            borderRadius: '5px',
            width: '140px',
            textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '16px'
          }}>
            <img
              src="https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-gps-icon-png-image_1781435.jpg"
              alt="Addresses"
              style={{ marginBottom: '10px',height:'50px',width:'50px' }}
            />
            <p>Addresses</p>
          </div>
        </div>
      </div>

      <button
        style={{
          marginTop: '30px',
          width: '100%',
          maxWidth: '400px',
          padding: '15px',
          backgroundColor: '#e0e0e0',
          border: 'none',
          borderRadius: '5px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default App6;
