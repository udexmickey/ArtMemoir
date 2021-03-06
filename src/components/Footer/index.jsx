import React, { useState } from 'react'
import logo from '../../../src/assets/Images/logo.png'
import { Link } from 'react-router-dom'
import './footer.scss'
import { ImLink } from 'react-icons/all'
import IconList from '../IconList/IconList'
import { url } from '../../config/config.json'
import { useForm } from 'react-hook-form'
import axios from 'axios'
// import Test from '../../pages/Test';
// import { functions } from 'lodash';

export default function Footer() {
  const [signletter, setSignLetter] = useState('Signup')
  const {reset, register, handleSubmit, formState, setValue, error } = useForm()
  const { isSubmitting } = formState
  const handleneswletterSubmit = async data => {
    // e.preventDefault();
    setValue('email')

    axios
      .post(`${url}subscribe`, data)
      .then(res =>  {
        if (!res.data){
          alert("Oops!! Check your internet connection. Try again later")
        } else {
          alert("Thank you for subscribing to our Newsletter");
          reset()
        }
      })
      .catch(err => {
        if(err){
        alert("Subscription failed, email must be unique. Try again later")
      }}
        )
    if (error) alert("Oops!! Check your internet connection. Try again later")

    // return promise that resolves after 2 seconds
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
        ;<div className='successfulsent' style={{ backgroundColor: 'green' }}>
          {setSignLetter('Sent')}
        </div>
      }, 2000)
      ;<div style={{ background: 'green' }}>{setSignLetter('Loading')}</div>
    })
  }

  // const sendLetter = () => {
  //   if(signletter) {
  //     {isSubmitting && <span style={{marginRight: '.5rem'}}><i class="fa fa-refresh fa-spin"></i></span>}
  //     <div style={{background: 'green'}}>{setSignLetter('Sent')}</div>
  //   }
  //   return signletter;
  // }
  return (
    <div className='footer'>
      <footer>
        <div className='footer-container'>
          <div className='footer-img'>
            <img loading='lazy' src={logo} alt=' ' />
          </div>
          <div className='footer-title'>
            Exploring the world of Art through NFTs.
          </div>
          <div className='footer-form'>
            <form
              action={`${url}subscribe`}
              method='post'
              onSubmit={handleSubmit(handleneswletterSubmit)}
            >
              {/* <Test name={`Sign Up`}/> */}
              <label htmlFor='newsletter' className='newsletter-label'>
                <span>Sign up for our newsletter </span>
                <br />
                <small>
                  Stay up to date on new releases, interviews, events, and
                  updates from ArtMemoir???s community.
                </small>
                <div className='value-btn-box'>
                  <input
                    type='email'
                    name='newsletter'
                    placeholder='Your Email'
                    id='newsletter'
                    {...register('email', { required: true })}
                  />
                  {/* <input type="button" value="Sign up" className="newsletter-btn"/> */}
                  {/* <button className="newsletter-btn" type="submit">
                    Sign Up
                  </button> */}
                  {/* <Test name={`Sign Up`}/> */}
                  <button
                    disabled={isSubmitting}
                    style={{ cursor: 'pointer' }}
                    className='newsletter-btn'
                    type='submit'
                  >
                    {isSubmitting && (
                      <span style={{ marginRight: '.5rem' }}>
                        <i class='fa fa-refresh fa-spin'></i>
                      </span>
                    )}
                    {signletter}
                  </button>
                </div>
              </label>
            </form>
          </div>
          <div className='footer-list'>
            <div className='footer-menu'>
              <span className='footer-list-title'>Menu</span>
              <ul>
                <li>
                  <Link to='/contact'>Contact us</Link>
                </li>
                <li>
                  <Link to='/partners'>Our Partners</Link>
                </li>
                <li>
                  <Link to='/team'>Our Team</Link>
                </li>
                <li>
                  <Link to='/whitepaper'>Whitepaper</Link>
                </li>
                <li>
                  <Link to='/blog'>Blog</Link>
                </li>
              </ul>
            </div>
            <div className='footer-service'>
              <span className='footer-list-title'>Service</span>
              <ul>
                <li>
                  <a href='#art'>Single NFTs</a>
                </li>
                <li>
                  <a href='#art'>Collection NFTs</a>
                </li>
                <li>
                  <a href='#game-fi'>GameFI</a>
                </li>
                <li>
                  <a href='#real-estate'>Real Estate</a>
                </li>
                <li>
                  <a href='#roadmap'>RoadMap</a>
                </li>
              </ul>
            </div>
          </div>
          <IconList />
          <div className='footer-copyright'>
            <div className='copy-text'>?? ArtMemoir. All rights reserved</div>
            {/* <div className="terms-privacy">
              <div className="terms">
              <ImLink /> <Link to="https://www.harmonicstudioz.com/"> Powered by HarmonicStudioz </Link>
              </div>
              <div className="privacy">
                <Link to="/privacy">Privacy</Link>
              </div>
            </div>  */}
          </div>
          <div className='footer-dev'>
            <ImLink />{' '}
            <Link to='https://www.harmonicstudioz.com/'>
              Powered by HarmonicStudioz{' '}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
