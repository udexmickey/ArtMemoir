import React from 'react';
import pic1 from '../../assets/Images/pic1.png';
import pic2 from '../../assets/Images/pic2.png';
import pic3 from '../../assets/Images/pic3.png';
// import pic4 from '../../assets/Images/pic4.png';
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
        {/* <div>
          <img className="showcase-img" src={pic4} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Showcase;
