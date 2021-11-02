import React from 'react'

export default function InputForm(props) {
    const styling = {
        background: '#242424',
        border: "1px solid rgba(186, 186, 186, 0.24)",
        color: 'rgba(#fff, 0.8)',
        boxSizing: 'border-box',
    }
    return (
        <div>
            <div className={`group-form ${props.className}`}>
                <label htmlFor={props.htmlFor}>{props.title}</label>
                <input 
                    style={styling} 
                    accept={props.accept} 
                    type={props.type} 
                    name={props.name} 
                    id={props.id} 
                    placeholder={props.placeholder}
                    ref={props.ref}
                    onChange={props.onChange}
                    value={props.value}
                    className={props.className}
                />
            </div>
        </div>
    )
}
