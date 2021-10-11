import React from 'react';
import { Link } from 'react-router-dom';
import './error.scss';

export default function PageNotForm() {
    return (
        <div className='error-page'>
            Page 404!!

            press the back Button to go back to Home page  
            <button> 
                 <Link to='/'>
                 Home
                </Link>
            </button>
        </div>
    )
}
