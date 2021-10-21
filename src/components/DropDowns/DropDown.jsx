import React from 'react'
import 'react-dropdown/style.css';
import './dropdown.scss'
export default function DropDowns() {

    return (
        <div className='dropdown' >
            {/* <div className="dropdown-btn">Open</div>
            <div className="dropdown-content">
                <div className="dropdown-item">React</div>
                <div className="dropdown-item">Angular</div>
                <div className="dropdown-item">Vue</div>
                <div className="dropdown-item">Node</div>
                <div className="dropdown-item">Express</div>
            </div> */}
            <select name="browser">
                <option value="firefox">Firefox</option>
                <option value="ie">IE</option>
                <option value="chrome">Chrome</option>
                <option value="opera">Opera</option>
                <option value="safari">Safari</option>
            </select>
        </div>
    )
}