import React, { useMemo } from 'react';
import Prev from './Prev';
import Next from './Next';
import pic1 from '../../assets/Images/storepic1.png';
import pic2 from '../../assets/Images/storepic2.png';
import pic3 from '../../assets/Images/pic3.png';
import pic4 from '../../assets/Images/pic4.png';
import { v4 } from 'uuid';
import './showcase.scss';
import Item from './Item';

const Showcase6 = () => {
  const data = useMemo(
    () => [
      {
        id: v4(),
        img: pic1,
        header: 'Viverra sed adipiscing mi dictumst.',
        content:
          'Venenatis ac sit turpis fringilla nisi nunc aliquet eu egestas. Libero pharetra enim egestas adipiscing hac. Sagittis id.',
      },
      {
        id: v4(),
        img: pic2,
        header: 'Viverra sed adipiscing mi dictumst.',
        content:
          'Venenatis ac sit turpis fringilla nisi nunc aliquet eu egestas. Libero pharetra enim egestas adipiscing hac. Sagittis id.',
      },
      {
        id: v4(),
        img: pic3,
        header: 'Viverra sed adipiscing mi dictumst.',
        content:
          'Venenatis ac sit turpis fringilla nisi nunc aliquet eu egestas. Libero pharetra enim egestas adipiscing hac. Sagittis id.',
      },
      // {
      //   id: v4(),
      //   img: pic4,
      //   header: 'Viverra sed adipiscing mi dictumst.',
      //   content:
      //     'Venenatis ac sit turpis fringilla nisi nunc aliquet eu egestas. Libero pharetra enim egestas adipiscing hac. Sagittis id.',
      // },
    ],
    [],
  );
  return (
    <div className="store-container">
      <h1 className="showcase-text">Store</h1>
      <div className="store-container-inner">
        <div className="prev">
          <Prev />
        </div>
        {data.map((data) => (
          <Item
            id={data.id}
            content={data.content}
            header={data.header}
            img={data.img}
          />
        ))}
        <div className="next">
          <Next />
        </div>
      </div>
    </div>
  );
};

export default Showcase6;
