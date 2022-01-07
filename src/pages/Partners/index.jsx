import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import './partners.scss';
import partnersData from './partner'
// import ModalFocus from '../../components/ModalFocus';

export default function Partners() {
  const PartnersList =  partnersData.map((partnership, idx) => {
      return (
        <UserCard
          key={idx}
          avatar={partnership.avatar}
          avatarLink={partnership.avatarLink}
          name={partnership.name}
          className={"partner-card"}
          message={partnership.message}
          messageLength={250}
          readMore={"Read More ▼"}
          readLess={"Read Less ▲"}
        />
      )
    })
  return (
    <div className="our-partners">
       <HeadBadge name="Our Partners" />
       {/* <ModalFocus /> */}
      <div className="our-partners-container">
        {PartnersList }
      </div>
    </div>
  );
}
