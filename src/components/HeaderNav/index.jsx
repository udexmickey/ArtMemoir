import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../src/assets/Images/logo.png'

import './headNav.scss'
export default function HeaderNav() {
    const [showMenu, setShowMenu ] = useState(false);

    const openMenu = () => {
        return setShowMenu(!showMenu);
    }


    return (
        <div className="headnav-container">
            <div className='headerNav'>
            <div className='nav-logo'>
                <Link to='/' exact={true}>
                    <img src={logo} alt="" srcset="" /> 
                </Link>
            </div>
            <div className="nav-list-container">
                <div className="nav-burger-icon">
                    <FontAwesomeIcon 
                        icon={faBars} 
                        onClick = { openMenu }
                        size="400px"
                        className={`memu-list-display`}
                    />
                </div>
                
                <ul className={`nav-list `}>
                    <li >
                        
                        <NavLink activeClassName='is-active' to="/contact">Contact Us</NavLink>     
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/partners">Our Partners</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/team">Our Team</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/whitepaper">WhitePaper</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='is-active' to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}
