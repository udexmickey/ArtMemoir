import React from 'react'
import Twitter from '../../assets/Svg/Twitter'; 
import Telegram from '../../assets/Svg/Telegram';
import Instagram from '../../assets/Svg/Instagram';
import Linkedin from '../../assets/Svg/Linkedin';
import Facebook from '../../assets/Svg/Facebook';
import Reddit from '../../assets/Svg/Reddit';

export default function IconList() {
    return (
        <div>
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
    )
}
