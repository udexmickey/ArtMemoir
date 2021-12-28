import React, { useMemo } from 'react';
import pie from '../../assets/Images/pie.png';
import { v4 } from 'uuid';
import './showcase.scss';

const Showcase4 = () => {
  const data = useMemo(
    () => [
      {
        id: v4(),
        color: '#FF0007',
        content: 'community incentives 20%',
      },
      {
        id: v4(),
        color: '#FF0035',
        content: 'investors / partnership 12%',
      },
      {
        id: v4(),
        color: '#9C001D',
        content: 'marketing 20%',
      },
      {
        id: v4(),
        color: '#6C0007',
        content: 'advisory board 3%',
      },
      {
        id: v4(),
        color: '#E43E54',
        content: 'art community 10%',
      },
      {
        id: v4(),
        color: '#E10025',
        content: 'artmemoir charity 8%',
      },
      {
        id: v4(),
        color: '#B4000B',
        content: 'team 15%',
      },
      {
        id: v4(),
        color: '#BF1532',
        content: 'artist 12%',
      },
    ],
    [],
  );
  return (
    <div className="economics-container">
      <h1 className="showcase-text">NFT-Economics</h1>
      <div className="economics-container-inner">
        <div className="left-container">
          <img src={pie} alt="" loading='lazy' />
        </div>
        <div className="right-container">
          {data.map((data) => (
            <div className="right-container-content" key={data.id}>
              <div
                className="color-box"
                style={{ background: data.color }}
              ></div>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase4;
