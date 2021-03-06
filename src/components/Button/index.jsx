import React from 'react'

export default function Button(props) {
    const buttonSyle = {
        width: '290px',
        height: '59px',
        background: 'var(--accent)',
        borderRadius: '5px',
        color: '#fff',
        border: 'none',
        outline: 'none',
    }
    return (
        <div>
            <button type={props.type} className={props.class} style={buttonSyle} onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    )
}
