import React from 'react';
import logo from '../../assets/Images/logo-xs.png';
import Readmore from '../../components/Readmore';

const Item = ({ id, img, header, content, link }) => {
  return (
    <div className="item-container" key={id}>
      <div className="cover">
        <img loading="lazy" src={img} alt="" />
      </div>
      
      <div className="content-container">
        <p className="header">{header}</p>
        <p className="content">
              
              <Readmore 
                content={`${content}`}
                length={120}
                readMore={"Read More ▼"}
                readLess={"Read Less ▲"}
            />
          </p>
        <div className="footer">
          
            <div className="logo-container">
                <a href={link}>
                  <img loading="lazy"className="logo" src={logo} alt="" />
                  <p>Afen Group</p>
              </a>
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
