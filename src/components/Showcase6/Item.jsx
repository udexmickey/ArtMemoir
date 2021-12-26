import React from 'react';
import logo from '../../assets/Images/logo-xs.png';

const Item = ({ id, img, header, content, link }) => {
  return (
    <div className="item-container" key={id}>
      <div className="cover">
        <img loading="lazy" src={img} alt="" />
      </div>
      
      <div className="content-container">
        <p className="header">{header}</p>
        <p className="content">{content}</p>
        <div className="footer">
          <a href={link}>
            <div className="logo-container">
              <img loading="lazy"className="logo" src={logo} alt="" />
              <p>Afen group</p>
              </div>
            </a>
          
          <button>
           Buy Now 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
