import React, { useState } from 'react';
import "./App4.css";

const App4 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      <nav className="top-nav">
        <button className="menu-icon" onClick={toggleSidebar}>
          <span>☰</span>
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button><i className="fas fa-microphone"></i></button>
        </div>
        <div className="icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </nav>

      <div 
        className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`} 
        onMouseLeave={closeSidebar} 
      >
        <h2>FLYSHION</h2>
        <div className="sidebar-links">
          <h4>Shop womens wear</h4>
          <ul>
            <li>Indian & Fusion wear</li>
            <li>Western Wear</li>
            <li>Sleepwear</li>
            <li>Winter Wear</li>
          </ul>
          <h4>Shop Menswear</h4>
          <ul>
            <li>Suits and Blazers</li>
            <li>Top Wear</li>
            <li>Bottom Wear</li>
            <li>Indian Wear</li>
            <li>Sports Wear</li>
          </ul>
          <h4>Accessories</h4>
          <ul>
            <li>Scarves</li>
            <li>Bags</li>
            <li>Eyewear</li>
            <li>Wallets</li>
            <li>Hats</li>
            <li>Jewellery</li>
          </ul>
          <button className="logout">Logout</button>
        </div>
      </div>

      <main className="main-content">
        <h1>Top-Rated Designers</h1>
        <div className="designers">
          <div className="designer-card">
            <img src="https://img.freepik.com/free-vector/profile-picture-design_742173-13765.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid" alt="Suhani Shah" />
            <p>Suhani Shah</p>
            <p>Experience: 4.5 years</p>
          </div>
          <div className="designer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8V9BMB5i02DLGQ0CewOPlhOeL-_68xcTDg&s" alt="Sneha Madhavaram" />
            <p>Sneha Madhavaram</p>
            <p>Experience: 3.5 years</p>
          </div>
          <div className="designer-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMVCbHWBi3pjwbfmtpQ9VfRS9_sLtWPpZQQ&s" alt="Abhishek Sharma" />
            <p>Abhishek Sharma</p>
            <p>Experience: 3 years</p>
          </div>
          <div className="designer-card">
            <img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2019/02/Neeraj-Kaushal-150x150.jpg" alt="Gaurav Gupta" />
            <p>Gaurav Gupta</p>
            <p>Experience: 5 years</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App4;
