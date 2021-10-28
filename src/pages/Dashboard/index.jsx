import DashboardFormDataInput from './dashboardformdata'
import React from 'react'
import InputForm from '../../components/Input'

export default function Dashboard() {
   const dashboardData = DashboardFormDataInput.map( 
        function inputData(data){
            return (
                <InputForm 
                    title={data.title}
                    type={data.type}
                    name={data.name}
                    id={data.id} 
                    key={data.key}
                    placeholder={data.placeholder}
                />
            )
        }
     )

    return (
        <div>
            
            {/* <InputForm /> */}
            <div className="contact-form-title">
                {/* Leave us a message */}
                <div className="group-form">
                    {dashboardData}
                </div>
                <div className="group-form">
                    <label htmlFor="info-message">Message</label>
                    <textarea name="request-message" id="info-message" placeholder='Hello there, How may we help you' cols="30" rows="10"></textarea>
                </div>
                <div className="group-form group-form-button">
                    <button type="submit"> Send </button>
                </div>
            </div>
        </div>
    )
}
