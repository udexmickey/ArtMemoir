import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Twitter from '../../assets/Svg/Twitter';
import Telegram from '../../assets/Svg/Telegram';
import Instagram from '../../assets/Svg/Instagram';
import Linkedin from '../../assets/Svg/Linkedin';
import Facebook from '../../assets/Svg/Facebook';
import Reddit from '../../assets/Svg/Reddit';
import flowerLeft from '../../assets/Images/flower-left.png'
import flowerRight from '../../assets/Images/flowerRight.png'
import './contact.scss'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="left-flower">
                {/* <FlowerRight /> */}
                <img src={flowerLeft} alt="" srcset="" />
            </div>

            <div className="contact-container">

                <div className="contact-holder-container">
                    <div className="contact-title-container">
                        <div className="contact-title">Contact us</div>
                    </div>
                    <div className="contact-text">Leave us a message</div>
                    <div className="contact-form">
                        <form action="" method="post">
                            <div className="contact-form-title">
                                {/* Leave us a message */}
                                <div className="group-form">
                                    <label htmlFor="fName">Full name</label>
                                    <input type="text" name="contact-fName" id="fName" placeholder='John Doe' />
                                </div> 
                                <div className="group-form">
                                    <label htmlFor="contact-email">Email address</label>
                                    <input type="email" name="contact-email" id="contact-email" placeholder='example@email.com' />
                                </div>
                                <div className="group-form">
                                    <label htmlFor="info-message">Message</label>
                                    <textarea name="request-message" id="info-message" placeholder='Hello there, How may we help you' cols="30" rows="10"></textarea>
                                </div>
                                <div className="group-form group-form-button">
                                    <button type="submit"> Send </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="contact-icons">
                            <div>
                            <ul>
                                <li>
                                    <Twitter />
                                </li>
                                <li>
                                    <Telegram />
                                </li>
                                <li> 
                                    <Instagram />
                                </li>
                                <li>
                                    <Linkedin />
                                </li>
                                <li>
                                    <Reddit />
                            </li>   
                                <li>
                                    <Facebook />
                                </li>
                            </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div className="right-flower">
                <img src={flowerRight} alt="" srcset="" />
            </div>
        </div>
    )
}
