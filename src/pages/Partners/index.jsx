import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import AfenBadge from '../../assets/Images/afen logo.png'
import flowerLeft from '../../assets/Images/flower-left.png'
import './partners.scss'

export default function Partners() {
    return (
        <div className='our-partners'>
            <HeadBadge name='Our Partners' />
            <div className="background-flower">
                <img src={flowerLeft} alt="" srcset="" />
            </div>
            <div className="our-partners-container">

                <div>
                    <UserCard 
                        avatar={AfenBadge}
                        name={`Afen Group`}
                        className="partner-card"
                        message={`convallis eget elit id rhoncus parturient enim turpis. Nibh tortor tellus urna diam cras cursus. Adipiscing cras euismod tortor dui. Urna amet sit cursus.`}
                    />
                    <UserCard 
                        name={`Swirge Community`}
                        avatar={AfenBadge}
                        className="partner-card"
                        message={`convallis eget elit id rhoncus parturient enim turpis. Nibh tortor tellus urna diam cras cursus. Adipiscing cras euismod tortor dui. Urna amet sit cursus.`}
                />
                </div>
            </div>
        </div>
    )
}
