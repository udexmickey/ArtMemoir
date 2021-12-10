import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import flowerLeft from '../../assets/Images/flower-left.png';
import './partners.scss';
import partnersData from './partner'

export default function Partners() {
  const PartnersList =  partnersData.map((partnership, idx) => {
      return (
        <UserCard
          key={idx}
          avatar={partnership.avatar}
          name={partnership.name}
          className={"partner-card"}
          message={partnership.message}
        />
      )
    })
  return (
    <div className="our-partners">
       <HeadBadge name="Our Partners" />
       <div className="background-flower">
         <img loading="lazy" src={flowerLeft} alt="" srcSet="" />
       </div>
      <div className="our-partners-container">
        {PartnersList }
      </div>
    </div>
  );
}
