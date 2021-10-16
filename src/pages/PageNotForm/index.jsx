import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

export default function PageNotForm() {
    return (
        <div className='error-page'>
            
            <div className="error-page-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iK9Ox2kDjycxc_LsZC2VN4vMNyI_vgqdmw&usqp=CAU"
                    alt="" 
                />
            </div>
            Page 404!! press the back Button to go back to Home page  
            <button> 
                 <Link to='/'>
                 Home
                </Link>
            </button>
        </div>
    )
}
