import React from 'react'
import Avatar from '../Avatar'
import './user-card.scss'
export default function UserCard(props) {
    return (
        <div>
            <div className="user-card-container">
                <div className={props.className}>
                    <div className="user-details">
                        <div className="user-img-holder">
                            <Avatar img={props.avatar}/>
                        </div>
                        <div className='class'>
                        <h1>{props.key}</h1>
                            <h3 className="name">{props.name}</h3>
                            <small className="role">{props.role}</small>
                            <hr />
                            <div className="message">{props.message}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
