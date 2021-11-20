import React from 'react';
import logo from '../../assets/Images/logo-xs.png';

const Item = ({ id, img, header, content }) => {
  return (
    <div className="item-container" key={id}>
      <img loading="lazy"className="cover" src={img} alt="" />
      <div className="content-container">
        <p className="header">{header}</p>
        <p className="content">{content}</p>
        <div className="footer">
          <div className="logo-container">
            <img loading="lazy"className="logo" src={logo} alt="" />
            <p>Afen group</p>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
