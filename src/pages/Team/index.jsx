import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeadBadge from '../../components/HeaderBadge';
import UserCard from '../../components/UserCard';
import Persons from './Persons';
import './team.scss'

export default function Team() {
    function TeamMembers(person) {
        return(
            <UserCard
                key={person.id}
                avatar={person.avatar} 
                name={person.name}
                role={person.role}
                className={`team-card1`}
                message={person.message}
            />
        )
    }

    return (
        <div className='teams'>
            <HeadBadge name='Our Team' />
            <div className="our-team-container">
                {Persons.map(TeamMembers)}
            </div>
        </div>
    )
}
