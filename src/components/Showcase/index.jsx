import React from 'react';
import pic1 from '../../assets/Images/nft--africa.JPG';
import pic2 from '../../assets/Images/nft--town.JPG';
import pic3 from '../../assets/Images/nft-bird.JPG';
// import pic4 from '../../assets/Images/nft-boy.JPG';
// import pic5 from '../../assets/Images/nft-bubbles.JPG';
// import pic6 from '../../assets/Images/nft-eye.JPG';
// import pic7 from '../../assets/Images/nft-girl.JPG';
// import pic8 from '../../assets/Images/nft-head.JPG';
// import pic9 from '../../assets/Images/nft-lady.JPG';
// import pic10 from '../../assets/Images/nft-lion.JPG';
// import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap'
import './showcase.scss';
import ControlledCarousel from '../BootsrapCarousel';

const Showcase = () => {
  return (
    
    <div className="showcase">
      <ControlledCarousel />
      <div className="showcase-container">
      <Carousel fade={true}>
        {/* <Carousel.Item>
          <img src={pic1} alt="" /> 
        </Carousel.Item> */}
        {/* <div className="showcase-img"> */}
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={pic1} alt="" /> 
            <Carousel.Caption>
              <h3>Test 1</h3>
              <p>Hello 1</p>
            </Carousel.Caption>
          </Carousel.Item>
        {/* </div> */}
        {/* <div className="showcase-img"> */}
          <Carousel.Item>
            <img className="d-block w-100" src={pic2} alt="" /> 

            <Carousel.Caption>
              <h3>Test 2</h3>
              <p>Hello 2</p>
            </Carousel.Caption>
          </Carousel.Item>
        {/* </div> */}
        {/* <div className="showcase-img"> */}
          <Carousel.Item>
            <img className="d-block w-100" src={pic3} alt="" /> 
            <Carousel.Caption>
              <h3>Test 3</h3>
              <p>Hello 3</p>
            </Carousel.Caption>
          </Carousel.Item>
        {/* </div> */}
        {/* <div className="showcase-img">
          <img src={pic2} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic4} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic5} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic6} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic3} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic7} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic8} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic9} alt="" />
        </div>
        <div className="showcase-img">
          <img src={pic10} alt="" />
        </div> */}
        {/* <div className="showcase-img">
          <img src={pic4} alt="" />*/}
           </Carousel>
      </div> 
    </div>
  );
};

export default Showcase;
