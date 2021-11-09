import React from 'react'
import pic6 from '../../assets/Images/nft-eye.JPG';
import pic7 from '../../assets/Images/nft-girl.JPG';
import pic8 from '../../assets/Images/nft-head.JPG';
import Background from '../../assets/Images/blogBacground.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider(props) {
    return (
        <Carousel style={{ height: "200px", color: "#fff" }} showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            <div style={{ height: "200px", color: "#fff" }}>
                <img style={{ height: "400px", color: "#fff" }} src={Background} />
                {/* <p className="legend">Legend 1</p>
                <div className="slider-item-div">Hello world</div> */}
            </div>
            <div>
                <img style={{ height: "400px", color: "#fff" }} src={pic6} />
                {/* <p className="legend">Legend 2</p>
                <div className="slider-item-div">Hello world</div> */}
            </div>
            <div>
                <img style={{ height: "400px", color: "#fff" }} src={pic7} />
                {/* <p className="legend">Legend 3</p>
                <div className="slider-item-div">Hello world</div> */}
            </div>

            <div className='slider-component'>
                <img src={props.avatar} />
                {/* <p className="legend">{props.message}</p> */}
            </div>
        </Carousel>
    );

}
