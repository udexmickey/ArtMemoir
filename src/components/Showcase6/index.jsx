import React, { useEffect, useMemo, useState } from 'react';
// import Prev from './Prev';
// import Next from './Next';
// import pic1 from '../../assets/Images/storepic1.png';
// import pic2 from '../../assets/Images/storepic2.png';
// import pic3 from '../../assets/Images/pic3.png';
// import pic4 from '../../assets/Images/pic4.png';
import seaturtle035 from '../../assets/Images/seaturtle035.jpg';
import seaturtle043 from '../../assets/Images/seaturtle043.jpg';
import seaturtle048 from '../../assets/Images/seaturtle048.jpg';
import Queen from '../../assets/Images/queen.jpg';
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
        img: seaturtle035,
        header: 'Sea Turtle #035',
        link: 'https://afenmarketplace.com/art-details/2/0x78BfC475a83d8C537867C00Df3A6E621bc9688fe',
        content:
          'Turtle Name: AKAN ROYAL- Kente is an indigenous fabric of the Akan people of Ghana. It is a silk and cotton fabric made of interwoven cloth strips. It is a very colourful fabric and each colour on the Kente has its own meaning and symbolism. The turtle represented here has a shell covered with Kente design.'
      },

      {
        id: v4(),
        img: seaturtle043,
        header: 'Sea Turtle #043',
        link: 'https://afenmarketplace.com/art-details/10/0x78BfC475a83d8C537867C00Df3A6E621bc9688fe',
        content:
          "History has it that the Maya are an extinct ethnic group, native of old Wey province in Ethiopia. Their culture says that the turtle shell represents earth, fertility, wisdom, cleverness and love. This art and the shell's African pattern show all these attributes and the love Mayan people have for creatures.",
      },

      {
        id: v4(),
        img: seaturtle048,
        header: 'Sea Turtle #048',
        link: 'https://afenmarketplace.com/art-details/15/0x78BfC475a83d8C537867C00Df3A6E621bc9688fe',
        content:
          'The Masai people have a great culture which is admired and loved by people all over the world. The turtle in the painting is depicted with a Masai shield design on his shell, a spear and a Masai giraffe design fused with the ripples on the sea where it inhabits. He is the hunter and Warrior amongst the turtles.',
      },
      
      {
        id: v4(),
        img: Queen,
        header: 'Maasai Queen',
        link: 'https://afenmarketplace.com/art-details/26/0x3Dd1FcfF4889277b2C1Bcd47c6Ef4b926907E42B',
        content:
          'A visual representation of the native African woman. The Maasai, a Nilotic ethnic group in Kenya & Tanzania, they play a key role in teaching culture, creating beaded Jewelry & teaching children the language of Maa.',
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
        <Item 
          id={d.id} 
          content={d.content} 
          header={d.header} 
          img={d.img} 
          link={d.link} 
        />
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
