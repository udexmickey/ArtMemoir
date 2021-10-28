import React from 'react'

export default function Button(props) {
    const buttonSyle = {
        width: '290px',
        height: '59px',
        background: '#CF1D1D',
        borderRadius: '5px',
    }
    return (
        <div>
            <button type="submit" style={buttonSyle}>
                {props.title}
            </button>
        </div>
    )
}
