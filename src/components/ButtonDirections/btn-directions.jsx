import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './btn-directions.scss';
export default function ButtonDirections() {
  return (
    <div className="btn-direction">
      <div className="arrow-left">
        <FaAngleLeft />
      </div>
      <div className="arrow-right">
        <FaAngleRight />
      </div>
    </div>
  );
}
