import React from 'react'
import './headbadge.scss'
export default function HeadBadge(props) {
    console.log(props);
    return (
        <div className='headbadge-title-container'>
            <div className="headbadge-title">{props.name}</div>
        </div>
    )
}
