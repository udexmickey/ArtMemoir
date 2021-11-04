import React from 'react';
import Showcase from '../../components/Showcase';
import Showcase2 from '../../components/Showcase2';
import Showcase3 from '../../components/Showcase3';
import Showcase4 from '../../components/Showcase4';
import Showcase5 from '../../components/Showcase5';
import Showcase6 from '../../components/Showcase6';
import './home.scss';

export default function Home() {
  return (
    <div className="home-container">
      <Showcase />
      <h1 className="showcase-text">Exploring the world of Art with NFT. </h1>
      <Showcase2 />
      <Showcase3 />
      <Showcase4 />
      <Showcase5 />
      <div className="divider"></div>
      <Showcase6 />
    </div>
  );
}
