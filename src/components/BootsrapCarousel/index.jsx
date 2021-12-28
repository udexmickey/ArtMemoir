import React, { useState } from 'react'
// import { Carousel } from 'react-bootstrap'
import pic8 from '../../assets/Images/nft-head.JPG';
import pic9 from '../../assets/Images/nft-lady.JPG';
import pic10 from '../../assets/Images/nft-lion.JPG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function BootsrapCarousel() {
//     return (
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={pic10}
//                     alt="First slide"
//                     />
//                     <Carousel.Caption>
//                     <h3>First slide label</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-70"
//                     src={pic8}
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={pic9}
//                     alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//     )
// }
















function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-70 h-200"
            src={pic10}
            alt="First slide"
            loading='lazy'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 h-200"
            src={pic9}
            alt="Second slide"
            loading='lazy'
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 h-200"
            src={pic8}
            alt="Third slide"
            loading='lazy'
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel ;