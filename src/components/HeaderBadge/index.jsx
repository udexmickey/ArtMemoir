import React from 'react'
import './headbadge.scss'
export default function HeadBadge(props) {
    return (
        <div className='headbadge-title-container'>
            <div className={`headbadge-title ${props.name}`} style={props.style}>{props.name}</div>
        </div>
    )
}
