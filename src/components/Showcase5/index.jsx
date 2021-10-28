import React from 'react';
import roadmap from '../../assets/Images/roadmap.png';
import './showcase.scss';

const Showcase5 = () => {
  return (
    <div className="roadmap-container">
      <h1 className="showcase-text">Roadmap</h1>
      <div className="roadmap-conatiner-inner">
        <img src={roadmap} alt="" />
      </div>
    </div>
  );
};

export default Showcase5;
