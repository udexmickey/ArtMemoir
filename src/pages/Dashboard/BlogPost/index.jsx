// import DashboardFormDataInput from '../dashboardformdata';
import { NavLink } from 'react-router-dom';
import InputForm from '../../../components/Input';
import flowerLeft from '../../../assets/Images/flower-left.png';
import flowerRight from '../../../assets/Images/flowerRight.png';
import HeadBadge from '../../../components/HeaderBadge';
import Button from '../../../components/Button';
import UploadAndDisplayImage from '../../../components/UploadImage/index';
import { useForm } from 'react-hook-form';
import useFetch from '../../../hooks/useFetch';

export default function BlogPost() {
  const { register, handleSubmit, setValue } = useForm();
  const { postRequest } = useFetch(
    'http://localhost:4000/post',
  );

  let see = true;
  const BlongOnSubmit = async (res) => {
    let formData = new FormData();

    formData.append('content', res);
    formData.append('title', res.title);
    formData.append('link', res.link);

    // My axios call ...
    setValue('content', '');
    await postRequest(formData);  };

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
        <img src={flowerLeft} alt="" srcSet="" />
      </div>

      <form action="" onSubmit={handleSubmit(BlongOnSubmit)}>
        <div className="dashboard-holder">
          <div className="group-form upload-image">
            <UploadAndDisplayImage register={register} name="image" />
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
                {...register('content', { required: true })}
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
                name="blog-post-link"
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
        <img src={flowerRight} alt="" srcSet="" />
      </div>
    </div>
  );
}
