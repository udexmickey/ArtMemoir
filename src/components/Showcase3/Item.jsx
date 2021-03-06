import React from 'react';
import './showcase.scss';

const Item = ({ id, header, content }) => {
  return (
    <div className="item-container" key={id}>
      <p className="item-header">{header}</p>
      <p className="item-content">{content}</p>
      {/* <button>Read More</button> */}
      <button>Coming Soon</button>
    </div>
  );
};

export default Item;
