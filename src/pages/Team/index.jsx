import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import './team.scss'

export default function Team() {
    return (
        <div className='teams'>
            <HeadBadge name='Our Team' />
            <div className="our-team-container">
                <UserCard avatar={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU`} 
                    name={`Harmony Elendu`}
                    role={`CEO / Co-Founder`}
                    className="team-card1"
                    message={`convallis eget elit id rhoncus parturient enim turpis. Nibh tortor tellus urna diam cras cursus. Adipiscing cras euismod tortor dui. Urna amet sit cursus.`}
                />

                <UserCard avatar={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU`} 
                    name={`Favour Kachi`}
                    role={`Head of Design`}
                    className="team-card2"
                    message={`convallis eget elit id rhoncus parturient enim turpis. Nibh tortor tellus urna diam cras cursus. Adipiscing cras euismod tortor dui. Urna amet sit cursus.`}
                />

                <UserCard avatar={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU`} 
                    name={`Harmony Elendu`}
                    role={`CEO / Co-Founder`}
                    className="team-card3"
                    message={`convallis eget elit id rhoncus parturient enim turpis. Nibh tortor tellus urna diam cras cursus. Adipiscing cras euismod tortor dui. Urna amet sit cursus.`}
                />
            </div>
        </div>
    )
}
