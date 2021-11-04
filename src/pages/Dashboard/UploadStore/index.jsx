import InputForm from '../../../components/Input'
import flowerLeft from '../../../assets/Images/flower-left.png'
import flowerRight from '../../../assets/Images/flowerRight.png'
import HeadBadge from '../../../components/HeaderBadge'
import Button from '../../../components/Button'
import UploadAndDisplayImage from '../../../components/UploadImage/index'
import { useForm }  from 'react-hook-form'

export default function UploadStore() {
    const { register, handleSubmit } = useForm()

    const controlSubmit = (data) => {
        //  data.preventDefault();
        const formData = new FormData()
        formData.append("image", data.image[0])
        formData.append('title', data.title)
        formData.append('content', data.content)
        // console.log(formData.entries(), data)
        for(var pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
         }
    }

    const badgeButton = {
        background : '#CF1D1D'
    }

    return (
        <div className='dashboard'>
            <HeadBadge name="Upload store data" style={badgeButton}/>
             <div className="left-flower">
                <img src={flowerLeft} alt="" srcSet="" />
            </div>
            
            <div >
                <form action="" className="dashboard-holder" onSubmit={handleSubmit(controlSubmit)}>
                    <div className="group-form upload-image">
                        <UploadAndDisplayImage register={register} name='image' />
                    </div>
                    <div className="">
                        <div className="group-form">
                            <label htmlFor="message">Body</label>
                            <textarea {...register('content', {required: true})} id="message" placeholder='' cols="40" rows="20"></textarea>
                        </div>
                        <div className="group-form group-form-button">
                            <label htmlFor="">Link to article</label>
                            <input
                                title=''
                                type='url'
                                name='blog-post-link'
                                id='blog-post-link'
                                className='blog-post-link'
                                key='1'
                                {...register('title', {required: true})}
                            />
                        </div>
                        <div className="group-form group-form-button">
                            <Button title='Send' />
                        </div>
                    </div>
                </form>
            </div>
            <div className="right-flower">
                <img src={flowerRight} alt="" srcSet="" />
            </div>
        </div>
    )
}
