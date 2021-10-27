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
            <div className="group-form">
                <label htmlFor="fName">{props.title}</label>
                <input style={styling} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
            </div>
        </div>
    )
}
