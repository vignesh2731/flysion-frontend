import React from 'react';
import './Categoriespage.css';

function Categoriespage() {
    return(
        <>
           <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="icons">
          <img src='src/bag.svg'/> 
          <img src='src/notiction.png'/>
          <img src='src/assets/account.png'/>
        </div>
      </div>

    <p>Categories</p>

      <div className="categories">
        <div className="category-group">
          <h3>Women</h3>
          <div className="category-item western-wear">
            <div className="category-img"></div>
            <span>Western Wear</span>
          </div>

          <div className="category-item ethnic-wear">
            <div className="category-img"></div>
            <span>Ethnic & Fusion Wear</span>
          </div>
          <div className="category-item kurthis">
            <div className="category-img"></div>
            <span>Kurthis</span>
          </div>
          <div className="category-item kurta-sets">
            <div className="category-img"></div>
            <span>Kurta Sets</span>
          </div>
          <div className="category-item sarees">
            <div className="category-img"></div>
            <span>Sarees</span>
          </div>
          <div className="category-item bottom-wear">
            <div className="category-img"></div>
            <span>Bottom Wear</span>
          </div>
          <div className="category-item party-wear">
            <div className="category-img"></div>
            <p>Party Wear</p>
          </div>
          <div className="category-item sports-wear">
            <div className="category-img"></div>
            <span>Sports Wear</span>
          </div>
          <div className="category-item sleep-wear">
            <div className="category-img"></div>
            <span>Sleep Wear</span>
          </div>
        </div>
        
        <div className="category-group">
          <h3>Men</h3>
          <div className="category-item topwear">
            <div className="category-img"></div>
            <span>Topwear</span>
          </div>
          <div className="category-item bottomwear">
            <div className="category-img"></div>
            <span>Bottomwear</span>
          </div>
          <div className="category-item suits">
            <div className="category-img"></div>
            <span>Suits</span>
          </div>
          <div className="category-item sports">
            <div className="category-img"></div>
            <span>Sportswear</span>
          </div>
          <div className="category-item ethnic">
            <div className="category-img"></div>
            <span>Ethnic Wear</span>
          </div>
          <div className="category-item sleepwear">
            <div className="category-img"></div>
            <span>Sleep Wear</span>
          </div>
          <div className="category-item winter-wear">
            <div className="category-img"></div>
            <span>Winter Wear</span>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default Categoriespage;