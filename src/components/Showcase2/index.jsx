import React from 'react';
import road from '../../assets/Images/road.png';
import man from '../../assets/Images/man.png';
import home from '../../assets/Images/home.png';
import './showcase.scss';

const Showcase2 = () => {
  return (
    <div className="showcase-container-holder">
      <div className="left-container">
        {/* <img src={road} alt="" /> */}
        {/* <img src={man} alt="" /> */}
        {/* <img src={home} alt="" /> */}
      </div>
      <div className="right-container">
        <div className="right-container-inner">
          <div className="right-container-content">
          <img src={road} alt="" />
            <div className="right-text">
            <h1 className="right-container-heading"></h1>
            <h1 style={{color: 'var(--secondary)'}}>Art</h1>
            <h2>Single NFTs and Collections</h2>
            <p>
              NFTs minted in various nft marketplace to support various
              artists in their journey of art and for the love of arts.
            </p>
            <button>Read More</button>
            </div>
          </div>
          <div className="right-container-content">
          <img src={man} alt="" />
          <div className="right-text">
          <h1>GAMEFI</h1>
            <p>
              Minting NFTs which will serve as a medium of exchange where
              gamers can pay in our minted NFT to play games and win
              tokens in real time.
            </p>
            <button>Read More</button>
          </div>
          </div>
          <div className="right-container-content">
            <img src={home} alt="" />
            <div className="right-text">
              <h1>Real Estate</h1>
              <p>
                Buy these Nfts in exchange for shares in Real Estate{' '}
                projects or to get an outlet in an estate
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
