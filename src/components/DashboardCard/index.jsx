import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DashboardCard(props) {
    const styleCard = {
        width: '280px',
        height: '480px',
        background: '#242424',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4rem',
    }
    return (
        <div className={props.className}>
            <NavLink style={styleCard} to={props.link} activeClassName="is-active">
                {props.name}
            </NavLink>
        </div>
    )
}
