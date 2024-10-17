import React from 'react';
import './Productdetails.css';

function Productdetails(){
    return(
        <>
        <div className="search-bar">
          <div className="icons">
            <img src='src/bag.svg'/> 
            <img src='src/notiction.png'/>
          </div>
        </div>
        <div className='image'>
          <img src='src/assets/dress.png' />
          <img src='src/assets/dress1.png' />
          <img src='src/assets/dress2.png' />
          <img src='src/assets/dress3.png' />
        </div>
          <p>Designed By</p>
          <p><b>Laura Ashley</b></p>
          <p>Blue Printed Gotta Pure Cotton<br/>Empire A-Line Kurta with Trousers & Dupatta</p>
          <p><b>Rs. 1619</b></p>
          <p><b>Size</b></p>
          <div className='size'>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <p style={{marginTop:'10px'}}><b>Fabric</b></p>
          <div className='fabric'>
            <div>Cotton</div>
            <div>Rayon</div>
            <div>Silk</div>
            <div>Cotton-silk mix</div>
            <div>Georgette</div>
            <div>Polyester</div>
            <div>Velvet</div>
            <div>Denim</div>
            <div>Satin</div>
            <div>Wool</div>
          </div>
          <div className='bottom'>
            <img src='src/assets/share.png' style={{width:'45px' ,height:'45px',float:'right'}}/>
            <button>CONTACT WITH DESIGNER</button>
            <button><img src='src/bag.svg' style={{width:'20px' ,height:'20px'}}/>ADD TO BAG</button>
          </div>
      </>
    );
}