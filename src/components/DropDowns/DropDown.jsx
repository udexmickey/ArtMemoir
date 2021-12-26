import React, { useState } from 'react';
import 'react-dropdown/style.css';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './dropdown.scss';

function DropDowns({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    'Abstract',
    'THE SEVEN CONTINENT',
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="dropdowns-icons">
          {isActive ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, i) => (
            <div
              key={i}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDowns;
