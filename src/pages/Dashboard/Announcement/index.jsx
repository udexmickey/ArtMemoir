import DashboardFormDataInput from '../dashboardformdata'
import InputForm from '../../../components/Input'
import flowerLeft from '../../../assets/Images/flower-left.png'
import flowerRight from '../../../assets/Images/flowerRight.png'
import HeadBadge from '../../../components/HeaderBadge'
import Button from '../../../components/Button'
import UploadAndDisplayImage from '../../../components/UploadImage/index'
import { NavLink } from "react-router-dom";

export default function Announcement() {

    const badgeContainer = {
        marginRight: '11rem'
    }
    const flexContainer = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto 22%',
        
    }
    const sizeHeadBadge = {
        width: '300px',
    }

    const badgeButton = {
        background : '#606060',
        width: '300px',
    }

    return (
        <div className='dashboard'>
            <div className="" style={badgeContainer}>
                <ul style={flexContainer}>
                <li>   
                    <NavLink activeClassName='is-active' to="/blogpost">
                        <HeadBadge name="Blog post" style={badgeButton }/>
                    </NavLink> 
                </li>
                <li>
                    <NavLink activeClassName='is-active' to="/announcement">
                        <HeadBadge name="Announcement" style={sizeHeadBadge} />
                    </NavLink>
                </li>
                </ul>
            </div>
             <div className="left-flower">
                <img src={flowerLeft} alt="" srcSet="" />
            </div>
            
            <div className="dashboard-holder">
                    <div className="">
                        <form action="">
                            <div className="group-form upload-image">
                                <UploadAndDisplayImage />
                            </div>
                                <InputForm 
                                    title={data.title}
                                    type={data.type}
                                    name={data.name}
                                    id={data.id} 
                                    className={data.className}
                                    key={data.key}
                                    placeholder={data.placeholder}
                                />
                            <div className="group-form">
                                <label htmlFor="message">Body</label>
                                <textarea name="message" id="message" placeholder='' cols="40" rows="20"></textarea>
                            </div>
                            <div className="group-form group-form-button">
                                <Button title='Send' />
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div>
            <div className="right-flower">
                <img src={flowerRight} alt="" srcSet="" />
            </div>
        </div>
    )
}
