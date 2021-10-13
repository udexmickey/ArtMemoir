import React from 'react'
import logo from '../../../src/assets/Images/logo.png'
import { Link } from 'react-router-dom';
import './footer.scss';
import Twitter from "./../../assets/Svg/Twitter"
import Telegram from "./../../assets/Svg/Telegram"
import Instagram from "./../../assets/Svg/Instagram"
import Linkedin from "./../../assets/Svg/Linkedin"
import Reddit from "./../../assets/Svg/Reddit"
import Facebook from "./../../assets/Svg/Facebook"
export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div>
                    <div className="footer-img">
                        <img src={logo} alt=" "/>
                    </div>
                    <div className="footer-title">
                        Educating the world <br />
                        about its cultures through NFTs
                    </div>
                    <div className="footer-form">
                        <form action="newsletter" method="post">
                            <label htmlFor="newsletter" className='newsletter-label'>
                                Sign up for our newsletter <br />
                                <div className="value-btn-box">
                                    <input type="email" name="newsletter" placeholder='Your Email' id="newsletter" />
                                    {/* <input type="button" value="Sign up" className="newsletter-btn"/> */}
                                    <button className="newsletter-btn" type="submit">Sign Up</button>
                                </div>
                            </label>
                        </form>
                    </div>
                    <div className="footer-list">
                        <div className="footer-menu">
                            Menu
                            <ul>
                                <li><Link to='/contact'>Contact us</Link></li>
                                <li><Link to='/partners'>Our Partners</Link></li>
                                <li><Link to='/team'>Our Team</Link></li>
                                <li><Link to='/whitepaper'>Whitepaper</Link></li>
                            </ul>
                        </div>
                        <div className="footer-service">
                            Service
                            <ul>
                                <li><Link to='#'>Single NFTs</Link></li>
                                <li><Link to='#'>Collection NFTs</Link></li>
                                <li><Link to='#'>GameFI</Link></li>
                                <li><Link to='#'>Real Estate</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-icons">
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
                    <div className="footer-copyright">
                        <div className="copy-text">
                            © ArtMemoir. All rights reserved
                        </div>
                        <div className="terms">
                            <Link to='/terms'>
                                Terms and Conditions
                            </Link>
                        </div>
                        <div className="privacy">
                            <Link to='privacy'>
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
