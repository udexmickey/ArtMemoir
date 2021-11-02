import DashboardFormDataInput from '../dashboardformdata'
import InputForm from '../../../components/Input'
import flowerLeft from '../../../assets/Images/flower-left.png'
import flowerRight from '../../../assets/Images/flowerRight.png'
import HeadBadge from '../../../components/HeaderBadge'
import Button from '../../../components/Button'
import UploadAndDisplayImage from '../../../components/UploadImage/index'

export default function UploadStore() {

    const badgeButton = {
        background : '#CF1D1D'
    }

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
            <HeadBadge name="Upload store data" style={badgeButton}/>
             <div className="left-flower">
                <img src={flowerLeft} alt="" srcSet="" />
            </div>
            
            <div className="dashboard-holder">
                    <div className="group-form upload-image">
                        <UploadAndDisplayImage />
                    </div>
                    <div className="">

                        {dashboardData}

                        <div className="group-form">
                            <label htmlFor="message">Body</label>
                            <textarea name="message" id="message" placeholder='' cols="40" rows="20"></textarea>
                        </div>
                        <div className="group-form group-form-button">
                            <InputForm 
                                title='Link to article'
                                type='url'
                                name='blog-post-link'
                                id='blog-post-link'
                                className='blog-post-link'
                                key='1'
                                // placeholder='blog-post-link'
                            />
                        </div>
                        <div className="group-form group-form-button">
                            <Button title='Send' />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="right-flower">
                <img src={flowerRight} alt="" srcSet="" />
            </div>
        </div>
    )
}
