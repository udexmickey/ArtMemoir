import React from 'react';
import RoadMap from '../../components/RoadMap';
import Showcase from '../../components/Showcase';
import Showcase2 from '../../components/Showcase2';
import Showcase3 from '../../components/Showcase3';
import Showcase4 from '../../components/Showcase4';
// import Showcase5 from '../../components/Showcase5';
import Showcase6 from '../../components/Showcase6';
import './home.scss';

export default function Home() {
  return (
    <div className="home-container">
      <Showcase />
      <h1 className="showcase-text explore-text">
          <div className="explore-head">
              We are Exploring the world of Art through diverse high liquidity products; 
              <span>Valuable NFTs, Arts, Game Fi, Real estate and seamless stake rewards.</span>
          </div>

      </h1>
      <Showcase2 />
      <div className="text-section-artmem">
        <div className="">
          <h3>What is ArtMemoir?</h3>
          <p>
            ArtMemoir is breaking the Art horizon through the exploration of Art and its sectors on the blockchain. 
            However, we are buidling the first adventure play to earn game based of African methodology; 
            focusing on gamefi and Amination utilities with the aim to explore other real life utilities such as 
            real estate etc.
          </p>
        </div>
      </div>
      <Showcase3 />
      <Showcase4 />
      {/* <Showcase5 /> */}
      <div id="roadmap">
          <span className='showcase-text'>RoadMAP</span>
        <RoadMap />
      </div>
      <div className="divider"></div>
      <Showcase6 />
    </div>
  );
}
