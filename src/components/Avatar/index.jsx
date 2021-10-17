import React from 'react'

export default function Avatar(props) {
    return (
        <div>
            <img src={props.img} alt=' ' className="user-img"  />
        </div>
    )
}
