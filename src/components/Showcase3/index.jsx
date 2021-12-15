import React, { useMemo } from 'react';
import { v4 } from 'uuid';
import Item from './Item';
import './showcase.scss';

const Showcase3 = () => {
  const data1 = useMemo(
    () => [
      {
        id: v4(),
        header: 'GAMEFI REWARDS',
        content:
          'Partake on revenues generated from our gamefi products and its resources through the blockchain.',
      },
      
      {
        id: v4(),
        header: 'STAKE AND EARN',
        content:
          'Earn effortless passive Income by unlocking Art Memoir’s treasury and receive rewards while staking your NFTs.',
      },
      {
        id: v4(),
        header: 'REAL ESTATE',
        content:
          'Generated flow of cash with stake of NFTs and REAL ESTATE to earn returns of both Fiat and Tokens from partnered projects and other crypto companies through the blockchain within a given period of time.',
      },

    ],
    [],
  );

  const data2 = useMemo(
    () => [

      {
        id: v4(),
        header: 'SHARES',
        content:
          'Be a partaker of the dividends gotten from the Shares your NFTs represents.',
      },
      {
        id: v4(),
        header: 'CASH BACK RETURNS',
        content:
          'Generated extra flow of cash with our DeFi products powered on the Binance Blockchain.',
      },
    ],
    [],
  );

  return (
    <div className="our-utilities-container">
      <h1 className="showcase-text">Our Utilities</h1>
      <div className="our-utilities-container-inner-1">
        {data1.map((data) => (
          <Item header={data.header} content={data.content} id={data.id} />
        ))}
      </div>
      <div className="our-utilities-container-inner-2">
        {data2.map((data) => (
          <Item header={data.header} content={data.content} id={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Showcase3;
