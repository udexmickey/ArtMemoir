import React, {useEffect, useMemo, useState} from 'react';
import Prev from './Prev';
import Next from './Next';
import pic1 from '../../assets/Images/storepic1.png';
import pic2 from '../../assets/Images/storepic2.png';
import pic3 from '../../assets/Images/pic3.png';
import pic4 from '../../assets/Images/pic4.png';
import { v4 } from 'uuid';
import './showcase.scss';
import Item from './Item';
import { chunk } from 'lodash';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const Showcase6 = () => {
  const [windowsize , setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', ()=>{
      setWindowSize(window.innerWidth)
    }) 
    return () => {
      window.removeEventListener('resize')
    }
  }, [])

  const dataStore = useMemo(
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
  

    const storeSliders = chunk(dataStore, windowsize <= 600 ? 1 : 3).map((data) => (
      <div className="blog-card-holder">
        {data.map((store, idx) => (
          <div className="blog-card">
            <Item
              id={store.id}
              content={store.content}
              header={store.header}
              img={store.img}
            />
          </div>
        ))}
      </div>
    ));
  return (
    <div className="store-container">
      <h1 className="showcase-text">Store</h1>
      <div className="store-container-inner">
        <div className="prev">
          <Prev />
        </div>
        <Carousel infiniteLoop={true} autoPlay={true} showArrows={false}>
          <div className="storries-slide">{storeSliders}</div>
        </Carousel>
         
        <div className="next">
          <Next />
        </div>
      </div>
    </div>
  );
};

export default Showcase6;
