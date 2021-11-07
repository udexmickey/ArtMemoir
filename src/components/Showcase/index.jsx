import React from 'react';
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
import './showcase.scss';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-container">
        <div>
          <img className="showcase-img" src={pic1} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic2} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic3} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic4} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic5} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic6} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic7} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic8} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic9} alt="" />
        </div>
        <div>
          <img className="showcase-img" src={pic10} alt="" />
        </div>
        {/* <div>
          <img className="showcase-img" src={pic4} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Showcase;
