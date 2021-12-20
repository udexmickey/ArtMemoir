import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import Persons from './Persons';
import './team.scss'

export default function Team() {
    function TeamMembers(person, idx) {
        return(
            <UserCard
                id={person.id}
                key={person.id}
                idx={idx}
                avatar={person.avatar} 
                name={person.name}
                role={person.role}
                className={`team-card1`}
                message={person.message.substring(0, 200)+'...'}
                twitter={person.twitter}
                instagram={person.instagram}
                medium={person.medium}
                twitterIcon={person.twitterIcon}
                instagramIcon={person.instagramIcon}
                facebookIcon={person.facebookIcon}
            />
        )
    }

    return (
        <div className='teams'>
            <HeadBadge name='Our Team' />
            <div className="our-team-container">
                <div>{Persons.map((data, idx) => {
                    return TeamMembers(data, idx)
                })}</div>
            </div>
        </div>
    )
}
