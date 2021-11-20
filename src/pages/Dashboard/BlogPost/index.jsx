// import DashboardFormDataInput from '../dashboardformdata';
import { NavLink } from 'react-router-dom';
import InputForm from '../../../components/Input';
import flowerLeft from '../../../assets/Images/flower-left.png';
import flowerRight from '../../../assets/Images/flowerRight.png';
import HeadBadge from '../../../components/HeaderBadge';
import Button from '../../../components/Button';
import UploadAndDisplayImage from '../../../components/UploadImage/index';
import { useForm } from 'react-hook-form';
import { url } from '../../../config/config.json'
import useFetch from '../../../hooks/useFetch';

export default function BlogPost() {
  const { register, handleSubmit, setValue } = useForm();
  const { postRequest, error } = useFetch(
    `${url}post`,
  );

  let see = true;
  const BlogOnSubmit = async (res) => {
    let formData = new FormData();
    formData.append('cover', res.cover[0], );
    formData.append('post', res.post);
    formData.append('title', res.title);
    formData.append('medium_link', res.medium_link);

    // My axios call ...
    // console.log(formData);
     setValue('post', 'cover', 'title', 'medium_link');
    if (error) console.log('An Error request');
    await postRequest(formData);  
    console.log(res);

    
  };

  
  //Styling the componets inline

  const badgeContainer = {
    marginRight: '11rem',
  };

  const flexContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto 22%',
  };

  const noDisplay = {
    display: 'none',
  };
  const inputContainer = {
    height: '10px',
    width: ' 360px',
  };

  const badgeButton = {
    background: '#606060',
    width: '300px',
  };

  const sizeHeadBadge = {
    width: '300px',
  };

  return (
    <div className="dashboard">
      <div className="" style={badgeContainer}>
        <ul style={see ? flexContainer : noDisplay}>
          <li>
            <NavLink activeClassName="is-active" to="/blogpost">
              <HeadBadge name="Blog post" style={sizeHeadBadge} />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/announcement">
              <HeadBadge name="Announcement" style={badgeButton} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="left-flower">
        <img loading="lazy"src={flowerLeft} alt="" srcSet="" />
      </div>

      <form action="" onSubmit={handleSubmit(BlogOnSubmit)}>
        <div className="dashboard-holder">
          <div className="group-form upload-image">
            <UploadAndDisplayImage register={register} name="cover" />
          </div>
          <div className="">
            <div className="group-form">
              <label htmlFor="title">Title</label>
              <input
                type={'text'}
                name={'title'}
                id={'send-email'}
                key={'1'}
                {...register('title', { required: true })}
              />
            </div>

            <div className="group-form">
              <label htmlFor="message">Body</label>
              <textarea
                {...register('post', { required: true })}
                id="message"
                placeholder=""
                cols="20"
                rows="10"
              ></textarea>
            </div>
            <div className="group-form group-form-button">
              <InputForm
                title="Link to article"
                type="link"
                name="medium_link"
                id="blog-post-link"
                className="blog-post-link"
                key="1"
                style={inputContainer}
                register={register}
              />
            </div>
            <div className="group-form group-form-button">
              <Button title="Send" type="submit" />
            </div>
          </div>
        </div>
      </form>
      <div className="right-flower">
        <img loading="lazy"src={flowerRight} alt="" srcSet="" />
      </div>
    </div>
  );
}
