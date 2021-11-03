// import DashboardFormDataInput from '../dashboardformdata'
import InputForm from '../../../components/Input'
import flowerLeft from '../../../assets/Images/flower-left.png'
import flowerRight from '../../../assets/Images/flowerRight.png'
import HeadBadge from '../../../components/HeaderBadge'
import Button from '../../../components/Button'
import UploadAndDisplayImage from '../../../components/UploadImage/index'
import { NavLink } from "react-router-dom";
import { useForm }  from 'react-hook-form'
import '../dashboard.scss'
import { useState } from 'react'
export default function Announcement() {

    const [data, setData] = useState([
        {
         
        }
    ])
    // const { register, errors, handleSubmit } = useForm()

    const controlSubmit = (e) => {
         e.preventDefault();
        const formData = new FormData()
        formData.append("image", data.image)
        formData.append('title', data.title)
        formData.append('content', data.content)
        console.log(data)
    }



    const badgeContainer = {
        marginRight: '11rem'
    }
    const flexContainer = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto 22%',
        
    }

    const flexForm = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }

    const sizeHeadBadge = {
        width: '300px',
    }

    const badgeButton = {
        background : '#606060',
        width: '300px',
    }

    // const dashboardData = DashboardFormDataInput.map( 
    //     function inputData(data){
    //         return (
    //             <InputForm 
    //                 title={data.title}
    //                 type={data.type}
    //                 name={data.name}
    //                 id={data.id} 
    //                 className={data.className}
    //                 key={data.key}
    //                 placeholder={data.placeholder}
    //                 ref={register}
    //             />
    //         )
    //     }
    //  )

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
                        <form action="" style={flexForm } onSubmit={controlSubmit}>
                            <div className="group-form upload-image">
                                <UploadAndDisplayImage getPhoto={setData} externalData={data} />
                            </div>
                            <div>
                                <input
                                    title={'Title'}
                                    type={"text"}
                                    name={"title"}
                                    id={'send-email'} 
                                    // className={data.className}
                                    // value={setData(data.title)}
                                    // onChange={(title) => setData(title)}
                                    key={'1'}
                                />
                                <div className="group-form">
                                    <label htmlFor="message">Body</label>
                                    <textarea name="content" 
                                    // onChange={(content) => setData(content)} 
                                    // value={setData(data.content)} 
                                    id="message" placeholder='' cols="40" rows="20"></textarea>
                                </div>
                                <div className="group-form group-form-button">
                                    <Button title='Send' type='submit'/>
                                </div>
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
