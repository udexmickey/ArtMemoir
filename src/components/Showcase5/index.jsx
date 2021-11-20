import React, { useEffect, useState } from 'react';
import roadmap from '../../assets/Images/roadmap.png';
import roadmapMobile from '../../assets/Images/roadmapMobile.png';
import './showcase.scss';

const Showcase5 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth <= 600 ? setIsMobile(true) : setIsMobile(false);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="roadmap-container">
      <h1 className="showcase-text">Roadmap</h1>
      <div className="roadmap-conatiner-inner">
        <img loading="lazy"src={isMobile ? roadmapMobile : roadmap} alt="" />
      </div>
    </div>
  );
};

export default Showcase5;
