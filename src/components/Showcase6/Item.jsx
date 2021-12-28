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
          
            <div className="logo-container">
              {/* <img loading="lazy"className="logo" src={logo} alt="" /> */}
              <p>Read More</p>
              </div>
            
            <a href={link}>
              <button>
                Buy Now 
              </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
