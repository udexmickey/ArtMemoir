import DashboardFormDataInput from './dashboardformdata'
import React from 'react'
import InputForm from '../../components/Input'
import flowerLeft from '../../assets/Images/flower-left.png'
import flowerRight from '../../assets/Images/flowerRight.png'
import './dashboard.scss'
import HeadBadge from '../../components/HeaderBadge'
import Button from '../../components/Button'
export default function Dashboard() {
   const dashboardData = DashboardFormDataInput.map( 
        function inputData(data){
            return (
                <InputForm 
                    title={data.title}
                    type={data.type}
                    name={data.name}
                    id={data.id} 
                    className={data.className}
                    key={data.key}
                    placeholder={data.placeholder}
                />
            )
        }
     )

    return (
        <div className='dashboard'>
            <HeadBadge name="Send Email" />
             <div className="left-flower">
                <img src={flowerLeft} alt="" srcset="" />
            </div>
            
            <div className="dashboard-holder">
                {/* <div className=""> */}
                    <div className="group-form">
                        {dashboardData}

                    </div>
                    <div className="">
                        <div className="group-form">
                        <label htmlFor="message">Title</label>
                            <input type="text" src="img_submit.gif" placeholder='example@email.com' id="send-email" name="send-email" />
                        </div>
                        <div className="group-form">
                            <label htmlFor="message">Body</label>
                            <textarea name="message" id="message" placeholder='' cols="40" rows="20"></textarea>
                        </div>
                        <div className="group-form group-form-button">
                            {/* <button > Send </button> */}
                            <Button title='Send' />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="right-flower">
                <img src={flowerRight} alt="" srcset="" />
            </div>
        </div>
    )
}
