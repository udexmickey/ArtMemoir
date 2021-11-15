import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import AfenBadge from '../../assets/Images/afen logo.png';
import flowerLeft from '../../assets/Images/flower-left.png';
import ConservatioNFT from '../../assets/Images/ConservatioNFT-01.jpg'
import './partners.scss';

export default function Partners() {
  return (
    <div className="our-partners">
      <HeadBadge name="Our Partners" />
      <div className="background-flower">
        <img src={flowerLeft} alt="" srcSet="" />
      </div>
      <div className="our-partners-container">
        <UserCard
          avatar={AfenBadge}
          name={`Afen Group`}
          className="partner-card"
          message={`Afen is the African leading hub for decentralized products in Arts, Education and Real Estate. ArtMemoir partnered with Afen as a Secondary Marketplace for the sale of Her NFTs in the blockchain.`}
        />
        <UserCard
          name={`ConservatioNFT`}
          avatar={ConservatioNFT}
          className="partner-card"
          message={`In a bid to give back to the world, ArtMemoir collaborated with ConservatioNFT to create cross continent Turtles in real life existence.`}
        />
      </div>
    </div>
  );
}
