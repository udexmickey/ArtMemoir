import flowerLeft from '../../../assets/Images/flower-left.png'
import flowerRight from '../../../assets/Images/flowerRight.png'
import HeadBadge from '../../../components/HeaderBadge'
import Button from '../../../components/Button'
import UploadAndDisplayImage from '../../../components/UploadImage/index'
import { useForm }  from 'react-hook-form'

export default function BlogPost() {

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
        background : 'var(--accent)'
    }

    return (
        <div className='dashboard'>
            <HeadBadge name="Edit store data" style={badgeButton}/>
             <div className="left-flower">
                <img loading="lazy"src={flowerLeft} alt="" srcSet="" />
            </div>
            
            <div className="dashboard-holder">
                <form action="" onSubmit={handleSubmit(controlSubmit)}>
                    <div className="group-form upload-image">
                        <UploadAndDisplayImage register={register} name='image' />
                    </div>
                    <div className="group-form group-form-button">
                        <Button title='Send' />
                    </div>
                </form>
            </div>
            <div className="right-flower">
                <img loading="lazy"src={flowerRight} alt="" srcSet="" />
            </div>
        </div>
    )
}
