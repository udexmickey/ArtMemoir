import React from 'react';
import { FaInstagram, FaMedium, FaTwitter } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../Avatar';
import './user-card.scss';

export default function UserCard(props) {
  const acceptedLocations = ['/team'];
  const location = useLocation();
  const isEven = props.idx % 2 === 0 ? true : false;
  // console.log(isEven, props.idx)
  return (
    <div className="user-card-container">
      <div className={props.className}>
        <div className="user-details">
          {!acceptedLocations.includes(location.pathname) && (
            <div className="user-img-holder">
              <a href={props.avatarLink} target="_blank" rel="noopener noreferrer">
                <Avatar img={props.avatar} />
              </a>
            </div>
          )}
          {acceptedLocations.includes(location.pathname) && isEven && (
            <div className="user-img-holder">
              <a href={props.avatarLink} target="_blank" rel="noopener noreferrer">
                <Avatar img={props.avatar} />
              </a>
            </div>
          )}
          <div
            className="class"
            style={{
              ...(acceptedLocations.includes(location.pathname) &&
                !isEven && {
                  textAlign: 'right',
                  marginRight: '1rem',
                  // marginLeft: '2rem',
                }),
            }}
          >
            <div>{props.key}</div>
            <div className="user-info">
              <h5 className="name">{props.name}</h5>
              <small className="role">{props.role}</small>
            </div>
            <hr />
            <p className="message">{props.message}</p>
            <button type="submit">
              {' '}
              <Link to={`/blog/${props.link}`}>{props.btn}</Link>
            </button>
            {acceptedLocations.includes(location.pathname) && isEven && (
              <div className="user-icons">
                <ul>
                  <li className="list-icons">
                        <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                  </li>
                  <li className="list-icons">
                        <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                  </li>
                  <li className="list-icons">
                        <a href={props.medium} target="_blank" rel="noopener noreferrer">
                              <FaMedium/>
                        </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {acceptedLocations.includes(location.pathname) && !isEven && (
            <div>
            <div className="user-img-holder">
              <a href={props.avatarLink} target="_blank" rel="noopener noreferrer">
                <Avatar img={props.avatar} />
              </a>
            </div>
            <div className="user-icons user-icons-left">
                <ul>
                  <li className="list-icons">
                        <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                  </li>
                  <li className="list-icons">
                        <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                  </li>
                  <li className="list-icons">
                        <a href={props.medium} target="_blank" rel="noopener noreferrer">
                              <FaMedium/>
                        </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
