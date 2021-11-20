import React, { useEffect, useMemo, useState } from 'react';
import pic1 from '../../assets/Images/nft--africa.JPG';
import pic2 from '../../assets/Images/nft--town.JPG';
import pic3 from '../../assets/Images/nft-bird.JPG';
import pic4 from '../../assets/Images/nft-boy.JPG';
import pic5 from '../../assets/Images/nft-bubbles.JPG';
import pic6 from '../../assets/Images/nft-eye.JPG';
import pic7 from '../../assets/Images/nft-girl.JPG';
import pic8 from '../../assets/Images/nft-head.JPG';
import pic9 from '../../assets/Images/nft-lady.JPG';
import pic10 from '../../assets/Images/nft-lion.JPG';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './showcase.scss';
import { v4 } from 'uuid';
import { chunk } from 'lodash';
import { Carousel } from 'react-responsive-carousel';

const Showcase = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const showcaseImages = useMemo(
    () => [
      {
        id: v4(),
        content: <img className="showcase-img" src={pic1} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic2} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic3} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic4} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic5} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic6} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic7} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic8} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic9} alt="" />,
      },
      {
        id: v4(),
        content: <img className="showcase-img" src={pic10} alt="" />,
      },
    ],
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => window.innerWidth),
    );
  }, []);

  const chunkedImages = chunk(showcaseImages, width <= 600 ? 1 : 4).map(
    (set) => (
      <div className="showcase-container">
        {set.map((d) => (
          <div key={d.id}>{d.content}</div>
        ))}
      </div>
    ),
  );

  return (
    <div className="showcase">
      <Carousel
        autoPlay={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {chunkedImages}
      </Carousel>
    </div>
  );
};

export default Showcase;
