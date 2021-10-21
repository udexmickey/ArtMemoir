import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './btn-directions.scss'
export default function ButtonDirections() {
    return (
        <div className="btn-direction">
            <div className="arrow-left"> 
                <FaArrowLeft />
            </div>
            <div className="arrow-right">
                <FaArrowRight />
            </div>
        </div>
    )
}
