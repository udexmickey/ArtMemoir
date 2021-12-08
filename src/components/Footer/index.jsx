import React from 'react';
import logo from '../../../src/assets/Images/logo.png';
import { Link } from 'react-router-dom';
import './footer.scss';
import { ImLink } from 'react-icons/all';
import IconList from '../IconList/IconList';
import {url} from '../../config/config.json'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Test from '../../pages/Test';

export default function Footer() {

  const { register, handleSubmit, formState, setValue, error } = useForm();
  const { isSubmitting } = formState;
  const handleneswletterSubmit = async data => {
    // e.preventDefault();
    setValue('email');

    axios
    .post(`${url}subscribe`, data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    if (error) console.log('email must be unique');

      // return promise that resolves after 2 seconds
      return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
  }

  return (
    <div className="footer">
      <footer>
        <div className="footer-container">
          <div className="footer-img">
            <img src={logo} alt=" " />
          </div>
          <div className="footer-title">
          Exploring the world of Art <br /> through NFTs.
          </div>
          <div className="footer-form">
            <form action={`${url}subscribe`} method="post" onSubmit={handleSubmit(handleneswletterSubmit)}>
              {/* <Test name={`Sign Up`}/> */}
              <label htmlFor="newsletter" className="newsletter-label">
                Sign up for our newsletter <br />
                <div className="value-btn-box">
                  <input
                    type="email"
                    name="newsletter"
                    placeholder="Your Email"
                    id="newsletter"
                    {...register('email', { required: true })}
                  />
                  {/* <input type="button" value="Sign up" className="newsletter-btn"/> */}
                  {/* <button className="newsletter-btn" type="submit">
                    Sign Up
                  </button> */}
                  {/* <Test name={`Sign Up`}/> */}
                  <button disabled={isSubmitting} style={{cursor : 'pointer'}} className="newsletter-btn" type='submit'>
                      {isSubmitting && <span style={{marginRight: '.5rem'}}><i class="fa fa-refresh fa-spin"></i></span>}
                       login
                  </button>
                </div>
              </label>
            </form>
          </div>
          <div className="footer-list">
            <div className="footer-menu">
              <span className="footer-list-title">Menu</span>
              <ul>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/partners">Our Partners</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/whitepaper">Whitepaper</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer-service">
              <span className="footer-list-title">Service</span>
              <ul>
                <li>
                  <Link to="#">Single NFTs</Link>
                </li>
                <li>
                  <Link to="#">Collection NFTs</Link>
                </li>
                <li>
                  <Link to="#">GameFI</Link>
                </li>
                <li>
                  <Link to="#">Real Estate</Link>
                </li>
                <li>
                  <Link to="#">RoadMap</Link>
                </li>
              </ul>
            </div>
          </div>
          <IconList />
          <div className="footer-copyright">
            <div className="copy-text">© ArtMemoir. All rights reserved</div>
            <div className="terms-privacy">
              <div className="terms">
                <Link to="/terms">Terms and Conditions</Link>
              </div>
              <div className="privacy">
                <Link to="/privacy">Privacy</Link>
              </div>
            </div>
            <div className="footer-dev">
              <ImLink /> Powered by HarmonicStudioz
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
