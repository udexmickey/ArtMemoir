import React, { useMemo } from 'react';
import { v4 } from 'uuid';
import Item from './Item';
import './showcase.scss';

const Showcase3 = () => {
  const data1 = useMemo(
    () => [
      {
        id: v4(),
        header: 'STAKE AND EARN',
        content:
          'Hodlers of selected NFts will be able to stake their NFTs to earn returns of both Fiat and Tokens from partnered projects and other crypto companies through the blockchain within a given period of time.',
      },
      {
        id: v4(),
        header: 'CASH BACK RETURNS',
        content:
          'Hodlers of selected NFts will be able to stake their NFTs to earn returns of both Fiat and Tokens from partnered projects and other crypto companies through the blockchain within a given period of time.',
      },
      {
        id: v4(),
        header: 'REAL ESTATE',
        content:
          'Hodlers of selected NFts will be able to stake their NFTs to earn returns of both Fiat and Tokens from partnered projects and other crypto companies through the blockchain within a given period of time.',
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
          'Users hodling selected nfts used to fund real estate projects automatically become shareholders of that real estate and will receive shares and dividends in Crypto Currency directly to their wallet.',
      },
      {
        id: v4(),
        header: 'GAMEFI REWARDS',
        content:
          'Tokens will be rewarded randomly to gamers who use nfts as a medium of transaction in partnered gamefi projects.',
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
