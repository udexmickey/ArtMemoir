import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../src/assets/Images/logo.png';

import './headNav.scss';
export default function HeaderNav() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    return setShowMenu(!showMenu);
  };

  const btnStyle = {
    width: '100px',
    height: '59px',
    background: 'rgb(207, 29, 29)',
    borderRadius: '5px',
    // color: 'rgb(255, 255, 255)',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    fontFamily: 'open sans',
  }

  return (
    <div className="headnav-container">
      <div className="headerNav">
        <div className="nav-logo">
          <Link to="/" exact={true}>
            <img src={logo} alt="" srcSet="" />
          </Link>
        </div>
        <div className="nav-list-container">
          <div className="nav-burger-icon">
            <FontAwesomeIcon
              icon={faBars}
              onClick={openMenu}
              size="500px"
              className={`memu-list-display`}
            />
          </div>

          <ul className={`nav-list `}>
            <li>
              <NavLink activeClassName="is-active" to="/contact">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/partners">
                Our Partners
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/team">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/whitepaper">
                WhitePaper
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-btn" >
        <Link to='/auth'>
          <button style={btnStyle} className='btn-nav'> {'Login'}</button>
        </Link>
          
        </div>
      </div>
    </div>
  );
}
