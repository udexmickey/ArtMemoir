import React from 'react';
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
              <Avatar img={props.avatar} />
            </div>
          )}
          {acceptedLocations.includes(location.pathname) && isEven && (
            <div className="user-img-holder">
              <Avatar img={props.avatar} />
            </div>
          )}
          <div
            className="class"
            style={{
              ...(acceptedLocations.includes(location.pathname) &&
                !isEven && {
                  textAlign: 'right',
                  marginRight: '2rem',
                  marginLeft: '2rem',
                }),
            }}
          >
            <div>{props.key}</div>
            <div className="user-info">
              <h5 className="name">{props.name}</h5>
              <small className="role">{props.role}</small>
            </div>
            <hr />
            <div className="message">{props.message}</div>
            <button type="submit">
              {' '}
              <Link to={`/blog/${props.link}`}>{props.btn}</Link>
            </button>
          </div>
          {acceptedLocations.includes(location.pathname) && !isEven && (
            <div className="user-img-holder">
              <Avatar img={props.avatar} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
