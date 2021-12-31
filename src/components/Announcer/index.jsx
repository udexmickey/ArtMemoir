import React from 'react'
import { Link } from 'react-router-dom';

export default function Announce(props) {
    return (
        <div
            className="blog-badge"
            style={{
            backgroundSize: '100%',
            width: '100%',
            }}
        >
            <div className="img-badge-holder">
                <img className="announce-img" loading='lazy' src={props.img} alt="" />
            </div>
        
            <div className="blog-heading-container">
                <div className="blog-heading-holder">
                    <div className="blog-heading-title">
                        {props.title}
                    </div>
                    <div className="blog-heading-text">
                        {props.message}
                    </div>
                    {/* <div className="blog-anouncement-link">
                        <Link  style={{color: '#fff'}} to={props.btnlink}>{props.btn}</Link>
                    </div> */}
                    
                    <Link style={{color: '#fff'}} to={props.btnlink}>
                        <button className='blog-anouncement-btn'>
                            {props.btn}
                        </button>
                    </Link>
                    
                </div>
            </div>
      </div>
    )
}
