import React, { useEffect, useMemo, useState } from 'react';
// import Prev from './Prev';
// import Next from './Next';
import pic1 from '../../assets/Images/storepic1.png';
import pic2 from '../../assets/Images/storepic2.png';
import pic3 from '../../assets/Images/pic3.png';
import pic4 from '../../assets/Images/pic4.png';
import { v4 } from 'uuid';
import './showcase.scss';
import Item from './Item';
import { chunk } from 'lodash';
import { Carousel } from 'react-responsive-carousel';

const Showcase6 = () => {
  const [width, setWidth] = useState(window.innerWidth);
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
      {
        id: v4(),
        img: pic4,
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
    ],
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => window.innerWidth),
    );
  }, []);

  const chunkedImages = chunk(data, width <= 600 ? 1 : 3).map((set) => (
    <div className="store-container-inner">
      {set.map((d) => (
        <Item id={d.id} content={d.content} header={d.header} img={d.img} />
      ))}
    </div>
  ));

  return (
    <div className="store-container">
      <h1 className="showcase-text">Store</h1>
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
      >
        {chunkedImages}
      </Carousel>
    </div>
  );
};

export default Showcase6;
