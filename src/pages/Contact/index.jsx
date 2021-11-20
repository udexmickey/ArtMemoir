import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IconList from '../../components/IconList/IconList';
import flowerLeft from '../../assets/Images/flower-left.png';
import flowerRight from '../../assets/Images/flowerRight.png';
import HeadBadge from '../../components/HeaderBadge';
import './contact.scss';

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Hello how may i help you.');
  }
  return (
    <div className="contact">
      <div className="left-flower">
        {/* <FlowerRight /> */}
        <img loading="lazy"src={flowerLeft} alt="" srcSet="" />
      </div>

      <div className="contact-container">
        <div className="contact-holder-container">
          <div className="contact-title-container">
            <HeadBadge name="Contact us" />
          </div>
          <div className="contact-text">Leave us a message</div>
          <div className="contact-form">
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="contact-form-title">
                {/* Leave us a message */}
                <div className="group-form">
                  <label htmlFor="fName">Full name</label>
                  <input
                    type="text"
                    name="contact-fName"
                    id="fName"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group-form">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    type="email"
                    name="contact-email"
                    id="contact-email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="group-form">
                  <label htmlFor="info-message">Message</label>
                  <textarea
                    name="request-message"
                    id="info-message"
                    placeholder="Hello there, How may we help you"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="group-form group-form-button">
                  <button type="submit"> Send </button>
                </div>
              </div>
            </form>
          </div>

          <div className="contact-icons">
            <IconList />
          </div>
        </div>
      </div>
      <div className="right-flower">
        <img loading="lazy"src={flowerRight} alt="" srcSet="" />
      </div>
    </div>
  );
}
