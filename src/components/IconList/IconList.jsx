import React from 'react'
import Twitter from '../../assets/Svg/Twitter'; 
import Instagram from '../../assets/Svg/Instagram';
import Linkedin from '../../assets/Svg/Linkedin';
import { MdAccountCircle, FaMediumM} from "react-icons/all";

import './iconList.scss'
export default function IconList() {
    return (
        <div className='iconlist'>
            <div className='list-icons'>
                <ul>
                    <li>
                        <a activeClassName="is-active" target="_blank" rel="noopener noreferrer" href='https://twitter.com/art_memoir?s=21'>
                            <Twitter />
                        </a>
                    </li>
                    <li> 
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/art_memoirnft?utm_medium=copy_link">
                        <Instagram />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/">
                        <Linkedin />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@artmemoir21nft/">
                        <FaMediumM />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://afenmarketplace.com/artist-profile/0x7a00bf0C5C05ca31d275233A6822327eE3909178">
                        <MdAccountCircle />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

