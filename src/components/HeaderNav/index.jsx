import React from 'react'
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../../../src/assets/Images/logo.png'

import './headNav.scss'
export default function HeaderNav() {

    return (
        <div className='headerNav'>
            <div className='nav-logo'>
                <Link to='/' exact={true}>
                    <img src={logo} alt="" srcset="" /> 
                </Link>
            </div>
            <div className="nav-list-container">
                <ul className='nav-list'>
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
                </ul>
            </div>
        </div>
    )
}
