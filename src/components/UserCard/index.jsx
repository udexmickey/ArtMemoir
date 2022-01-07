import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../Avatar';
import './user-card.scss';
import Readmore from '../Readmore';

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
            <p className="message">
            <Readmore
                content={`${props.message}`}
                length={props.messageLength}
                readMore={props.readMore}
                readLess={props.readLess}
            />
              
              </p>
            <button type="submit">
              {' '}
              <Link to={`/${props.link}`}>{props.btn}</Link>
            </button>
              <div className="user-icons">
                <ul>
                  <li className="list-icons">
                        <a href={props.linksName} target="_blank" rel="noopener noreferrer">
                            {props.linkIcon}
                        </a>
                  </li>
                </ul>
              </div>
          </div>
          
          {acceptedLocations.includes(location.pathname) && !isEven && (
            <div>
            <div className="user-img-holder user-img-holder-left">
              <a href={props.avatarLink} target="_blank" rel="noopener noreferrer">
                <Avatar img={props.avatar} />
              </a>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
