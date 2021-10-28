import React from 'react';
import road from '../../assets/Images/road.png';
import man from '../../assets/Images/man.png';
import home from '../../assets/Images/home.png';
import './showcase.scss';

const Showcase2 = () => {
  return (
    <div className="showcase-container">
      <div className="left-container">
        <img src={road} alt="" />
        <img src={man} alt="" />
        <img src={home} alt="" />
      </div>
      <div className="right-container">
        <h1 className="right-container-heading">Single NFTs and</h1>
        <div className="right-container-inner">
          <div className="right-container-content">
            <h1>Collections</h1>
            <p>
              NFTs minted in various nft marketplace to support <br /> various
              artists in their journey of art and for the love of <br /> arts.
            </p>
            <button>Learn more</button>
          </div>
          <div className="right-container-content">
            <h1>GAMEFI</h1>
            <p>
              Minting NFTs which will serve as a medium of exchange <br /> where
              gamers can pay in our minted NFT to play games <br /> and win
              tokens in real time.
            </p>
            <button>Learn more</button>
          </div>
          <div className="right-container-content">
            <h1>Real Estate</h1>
            <p>
              Buy these Nfts in exchange for shares in Real Estate <br />{' '}
              projects or to get an outlet in an estate
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
