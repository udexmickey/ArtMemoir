import React, { useEffect, useMemo, useState } from 'react';
// import Prev from './Prev';
// import Next from './Next';
// import pic1 from '../../assets/Images/storepic1.png';
import pic2 from '../../assets/Images/storepic2.png';
// import pic3 from '../../assets/Images/pic3.png';
// import pic4 from '../../assets/Images/pic4.png';
import CovidPrison from '../../assets/Images/nft-bubbles.JPG';
import Universe from '../../assets/Images/nft--town.JPG';
import Massai from '../../assets/Images/nft--africa.JPG';
import ColorfulBird from '../../assets/Images/nft-bird.JPG';
import Lady from '../../assets/Images/nft-lady.JPG';
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
        img: CovidPrison,
        header: 'COVID PRISON',
        link: 'https://afenmarketplace.com/art-details/3/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          'This artwork is a visual representation of The pains, struggle, Lame communication we all suffered in 2020 lead to the covid prison we all experinced.',
      },
      {
        id: v4(),
        img: Universe,
        header: 'THE 19 UNIVERSE',
        link: 'https://afenmarketplace.com/art-details/347/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          'This artwork is a visual representation of the illustration of the struggle we all faced during 2019. The depression, innovation, the fights and lots more. With the popular day Wash Your Hands Regularly.',
      },
      {
        id: v4(),
        img: Massai,
        header: 'The Massai Family',
        link: 'https://afenmarketplace.com/art-details/273/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          "This artwork is a visual representation of the Maasai tribe. The Massai culture includes colorful clothing & ceremonial spitting. Their colorful clothing is called 'shuka', which comes in a range of symbolic colors.",
      },
      {
        id: v4(),
        img: ColorfulBird,
        header: 'Colorful bird',
        lINK: 'https://afenmarketplace.com/art-details/33/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          'This artwork is a visual representation of the Venenatis ac sit turpis fringilla nisi nunc aliquet eu egestas. Libero pharetra enim egestas adipiscing hac. Sagittis id.',
      },
      {
        id: v4(),
        img: Lady,
        header: 'Music brought out the hope',
        lINK: 'https://afenmarketplace.com/art-details/34/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          "This artwork is a visual representation of the Music bought out the best out of Adanma's emotions after the loss of her child.",
      },
      {
        id: v4(),
        img: pic2,
        header: 'Vision Stare',
        link: 'https://afenmarketplace.com/art-details/3/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          'This artwork is a visual representation of The man stand upright to stare into the vision he had once planned',
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
        <Item id={d.id} content={d.content} header={d.header} img={d.img} link={d.link} />
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
        showArrows={true}
        infiniteLoop={true}
      >
        {chunkedImages}
      </Carousel>
    </div>
  );
};

export default Showcase6;
