// import DashboardFormDataInput from '../dashboardformdata'
import InputForm from '../../../components/Input';
import flowerLeft from '../../../assets/Images/flower-left.png';
import flowerRight from '../../../assets/Images/flowerRight.png';
import HeadBadge from '../../../components/HeaderBadge';
import Button from '../../../components/Button';
import UploadAndDisplayImage from '../../../components/UploadImage/index';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../dashboard.scss';
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
export default function Announcement() {
  const { register, handleSubmit } = useForm();
  const { loading, error, data, postRequest } = useFetch(
    'http://localhost:4000/announcement',
  );

  const controlSubmit = async (data) => {
    //  data.preventDefault();
    const formData = new FormData();
    formData.append('image', data.image[0]);
    formData.append('title', data.title);
    formData.append('content', data.content);
    // console.log(formData.entries(), data)
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    await postRequest(formData);
  };

  // Styling the component
  const badgeContainer = {
    marginRight: '11rem',
  };
  const flexContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto 22%',
  };

  const flexForm = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const sizeHeadBadge = {
    width: '300px',
  };

  const badgeButton = {
    background: '#606060',
    width: '300px',
  };

  return (
    <div className="dashboard">
      <div className="" style={badgeContainer}>
        <ul className="badge-toggle" style={flexContainer}>
          <li>
            <NavLink activeClassName="is-active" to="/blogpost">
              <HeadBadge name="Blog post" style={badgeButton} />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="is-active" to="/announcement">
              <HeadBadge name="Announcement" style={sizeHeadBadge} />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="left-flower">
        <img src={flowerLeft} alt="" srcSet="" />
      </div>

      <form action="" style={flexForm} onSubmit={handleSubmit(controlSubmit)}>
        <div className="dashboard-holder">
          <div className="group-form upload-image">
            <UploadAndDisplayImage register={register} name="image" />
          </div>
          <div>
            <div className="group-form">
              <label htmlFor="">Title</label>
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
                name="content"
                id="message"
                placeholder=""
                cols="40"
                rows="20"
              ></textarea>
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
